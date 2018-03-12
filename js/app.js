$(document).foundation();

$(document).ready(function(){
  $('.menu-bg').hide();
  $('.loader').fadeOut(800);
  var rellaxOn;

  $('.ham-icon').on('click', function(){
    $('.hamx').toggleClass('close');
    $('.menu-bg').fadeToggle()
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
      $('.menu-bg').fadeToggle()
	});
  $(function() {
      $(window).scroll( function(){
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          var middle_of_object, bottom_of_object;
          $('.fade-in').each(function(e) {
            middle_of_object = $(this).offset().top + $(this).outerHeight()*0.5;

            if (bottom_of_window > middle_of_object ) {
              $(this).animate({'opacity':'1'},1000);
            }
          });

          $('.about .slide-in-right').each(function() {
            middle_of_object = $(this).offset().top + $(this).outerHeight()*0.5;

            if (bottom_of_window > middle_of_object ) {
              $(this).animate({'opacity':'1', 'right':'0'},1000);
            }
          });

          $('.projects hr').each(function(e) {
            bottom_of_object = $(this).offset().top + $(this).outerHeight() + 200;

            if (bottom_of_window > bottom_of_object) {
              $('.projects h2').animate({'opacity':"1","top":"0"}, 600);
              $('.projects .fade-in').animate({'opacity':"1"}, 600);
              $('.projects > p:first-of-type').animate({'opacity':'1', 'left':'0'}, 1000);
              $('.projects > p:last-of-type').animate({'opacity':'1', 'right':'0'}, 1000)
            }
          });

          $('.projects .slide-in-left:not(.projects > p)').each(function(e){
            bottom_of_object = $(this).offset().top + $(this).outerHeight();

            if (bottom_of_window > bottom_of_object ) {
              $(this).animate({'opacity':'1', 'left':'0'}, 800);
            }
          });

          $('.projects .slide-in-right:not(.projects > p)').each(function(e){
            bottom_of_object = $(this).offset().top + $(this).outerHeight();

            if (bottom_of_window > bottom_of_object ) {
              $(this).animate({'opacity':'1', 'right':'0'}, 800);
            }
          });
      });

  });

});
