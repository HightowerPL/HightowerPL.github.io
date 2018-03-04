<?PHP
//tworzymy tablice do przechowywania błędów
$bledy=array();
//inicjujemy domyślne typ  i treść komunikatu
$komunikat="Mail został wysłany";
$type="ok";
//sprawdzamy czy wypełniono pole nazwisko i jeśli nie dodajemy do tablicy błąd
if (empty($_POST['formName'])) $bledy[]="- Proszę podać imie i nazwisko.";
//sprawdzamy poprawność maila i ewentualnie dodajemy bład
$wyr = "!^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$!i";
if (!preg_match($wyr, $_POST['formMail'] )) $bledy[]="- Proszę podać poprawny adres e-mail";
//jak wyżej sprawdzamy czy pole nie jest puste
if (empty($_POST['formMsg'])) $bledy[]="- Proszę wpisać wiadomość.";
//sprawdzamy czy są jakieś błędy
if ($bledy)
{
//jeśli błędy są, zmieniamy typ wiadomości i ustalamy jej nową treść
    $type="error";
    $komunikat="Wystąpiły następujące błędy:
    <ul>";
    foreach ($bledy as $b) $komunikat.="<li>".$b."</li>";
    $komunikat."</ul>";
}
else {
//jeśli nie ma błędów próbujemy wysłać maila
    $temat= "=?UTF-8?B?".base64_encode("Wiadomość z formularza JS-Web od ".$_POST['formName'])."?=";
    $naglowki = "Reply-to:".$_POST['formMail'].PHP_EOL;
    $naglowki .= "From: ".$_POST['formMail'].PHP_EOL;
    $naglowki .= "MIME-Version: 1.0".PHP_EOL;
    $naglowki .= "Content-type: text/html; charset=iso-8859-2".PHP_EOL;
    if(!mail('jakubsnopkiewicz@gmail.pl', $temat, $_POST['formMsg'], $naglowki))
    {
        //jeśli wystąpił błąd podczas wysyłania maila zmieniamy odpowiednio typ i treść wiadomości
        $komunikat="Wystąpił błąd podczas wysyłania wiadomości";
        $type="error";
    }
}
//wyświetlamy odpowiednią wiadomość w postaci obiektu JSON
$odp=array("type"=>$type,"text"=>$komunikat);
echo json_encode($odp);
?>
