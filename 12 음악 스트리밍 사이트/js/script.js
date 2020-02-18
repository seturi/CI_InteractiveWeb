function scrollHandler() {
  var bottom = $(window).height() + $(window).scrollTop();
  $('.playlist').each(function(){
    var mid = $(this).outerHeight()/2 + $(this).position().top;
    if(bottom >= mid){
      $(this).animate({opacity: '1'}, 1000);
    }
    if( bottom == $(document).height()){
      	$('.to-top-btn').fadeIn(1500);
      } else{
      	$('.to-top-btn').fadeOut(1500);
      }
  });
}

scrollHandler();
$(window).on('scroll', scrollHandler);
$('.to-top-btn').on('click',function(){
    $('html, body').animate({scrollTop : 0}, 1000);
    $('.to-top-btn').fadeOut(1000);
})
