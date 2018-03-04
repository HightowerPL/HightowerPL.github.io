$(document).foundation();

$(document).ready(function(){
  $('.test-nav').hide();
  $('.loader').fadeOut(800);
  var rellaxOn;

  $('.ham-icon').on('click', function(){
    $(this).toggleClass('active');
    $('.hamx').toggleClass('close');
    $('.test-nav').fadeToggle()
  });

  $('.welcome h1').each(function(i){
    $(this).delay(800).animate({'opacity':'1', 'right':'0'},1500);
  });
  $('.welcome p').each(function(i){
    $(this).delay(1800).animate({'opacity':'1', 'right':'0'},1500);
  });

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });

      $('.hamx').toggleClass('close');
      $('.test-nav').fadeToggle()
	});
  function slideInRight(e) {
    $(e).animate({'opacity':'1'},1000);
  }
  $(function() {
      $(window).scroll( function(){
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          var middle_of_object, bottom_of_object;
          if (rellaxOn == undefined) {
            if (bottom_of_window > $('.pause').offset().top){
              //var rellax = new Rellax('.rellax');
              rellaxOn = 1;
            }
          }
          $('.fade-in').each(function(e) {
            middle_of_object = $(this).offset().top + $(this).outerHeight()*0.5;

            if (bottom_of_window > middle_of_object ) {
              $(this).animate({'opacity':'1'},1000);
            }
          });

          $('.projects hr').each(function(e) {
            bottom_of_object = $(this).offset().top + $(this).outerHeight()+ 200;

            if (bottom_of_window > bottom_of_object) {
              $('.projects h2').animate({'opacity':"1","top":"0"}, 1000);
              $('.projects .fade-in').animate({'opacity':"1"}, 1000);
            }
          });

          $('.slide-in-left').each(function(e){
            bottom_of_object = $(this).offset().top + $(this).outerHeight();

            if (bottom_of_window > bottom_of_object ) {
              $(this).animate({'opacity':'1', 'left':'0'},1000);
            }
          });

          $('.slide-in-right').each(function(e){
            bottom_of_object = $(this).offset().top + $(this).outerHeight();

            if (bottom_of_window > bottom_of_object ) {
              $(this).animate({'opacity':'1', 'right':'0'},1000);
            }
          });
      });

      $("form").submit(function(e){
          var info = $(".info");
          var form = $(this);
          $.ajax({
               url: "mail.php",
               dataType: "JSON",
               type: "post",
               data: {
                 formName: 'fdfd',
                 formMail: 'fds@fd.fd',
                 formMsg: 'fdfdfd'
               },
               beforeSend: function(){
                   info.hide();
               },
               success: function(obj){
                   if (obj.type=="ok")
                   {
                       info.addClass("ok").removeClass("error").html(obj.text);
                       form.get(0).reset();
                   } else
                   {
                      info.addClass("error").removeClass("ok").html(obj.text);
                   }
               },
               error : function(response){
                    console.log(response);
                   info.addClass("error").removeClass("ok").html("Przepraszamy, ale wystąpił błąd podczas wysyłania wiadomości.")
               },
               complete: function(){
                   info.fadeIn();
                   info.delay(1500).fadeOut();
               }
          });
          e.preventDefault();
      });
  });

});
