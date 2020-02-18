function scrollHandler() {
  var top =  $(window).scrollTop();
  var about = $('.header').height() - $('.navbar').height();
  var contact = about + $('.about').height();
  if(about <= top){
    $('#about-btn').css('color', '#4A4A4A');
    $('#contact-btn').css('color', '#4A4A4A');
    if(contact <= top){
      $('.contact .vertical-center').animate({'opacity': '1', 'top': '0px'}, 800);
    } else{
    	$('.about .vertical-center').animate({'opacity': '1','top': '0px'}, 800);
        $('.bar').each(function(){
          $(this).find('.inner-bar').animate({'width': $(this).find('.percentage').text()}, 800)
        })
    }
  }
  else{
    $('#about-btn').css('color', 'white');
    $('#contact-btn').css('color', 'white');
    $('.header .vertical-center').animate({'opacity': '1','top': '0px'}, 800);
  }
}
var about = $('.navbar').height() + $('.header').height();
var contact = about + $('.about').height();
scrollHandler();

$(window).on('scroll', scrollHandler);
$('#about-btn').on('click', function(){
  $('html, body').animate({scrollTop: about}, 800)
});
$('#contact-btn').on('click', function(){
  $('html, body').animate({scrollTop: contact}, 800)
});