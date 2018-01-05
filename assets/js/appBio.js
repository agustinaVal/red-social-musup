$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('#send').click(function(){
        var inputWrite = $('#inputWrite').val();
        $('#printMessage').append('<div class="message">' + inputWrite + '</div>');
        $('#inputWrite').val('');
  });

});

