$('#btn1').on('click', click1);
$('#btn2').on('click', click2);
$('#btn3').on('click', click3);

function click1(){
  $('.blue').addClass('down');
  setTimeout(up, 1000);
}

function click2(){
  $('.white.dot').addClass('down');
  setTimeout(up, 1000);
}

function click3(){
  $('.blue.dot').addClass('down');
  setTimeout(up, 1000);
}

function up(){
  $('.flag').removeClass('down')
}
