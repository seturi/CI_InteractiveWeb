$('#send').on('click', sendText);

function sendText(){
  var input = $ ('textarea').val();

  if (input !='')  {
    $('.chatbox').append('<div class="my-bubble bubble">' + input + '</div>');
    $('textarea').val('');
  }
}
