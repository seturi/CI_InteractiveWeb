$('#even-btn').on('click', isEven);
$('#odd-btn').on('click', isOdd);

function isEven(){
  $('.card').each(function(){
    var num = $(this).text();
    if (num % 2 == 0){
      $(this).addClass('selected');
    }else{
      $(this).removeClass('selected');
    }
  });
}

function isOdd(){
  $('.card').each(function(){
    var num = $(this).text();
    if (num % 2 == 0){
      $(this).removeClass('selected');
    }else{
      $(this).addClass('selected');
    }
  });
}
