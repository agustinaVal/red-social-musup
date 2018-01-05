$(document).ready(function(){
	$('.carousel').carousel({
		dist:-50,
		padding: 100
	});
  $('.modal').modal();
  for (var i = 0; i < 6; i++) {
    perfiles = data.perfil[i];
    $('.img' + (i+1)).append('<img class="circle" data-type="restaurant" src="assets/img/perfiles/' + perfiles + '">');
  };
  
  $('#ingresar').click(function(){
    var user = $('#usuario').val();
    var clave = $('#clave').val();
    $('.btnSignIn').hide();
    $('#listHeader').append('<li class="agus"><a href="bio.html"><img src="assets/img/agus.jpg" alt="" class="circle"></a></li><li><a href="bio.html">' + user + '</a></li>');
    $('.brand-logo').before('<a href="#" data-activates="slide-out" class="btnUser"><i class="material-icons">menu</i></a>');
    $('#slide-out').show();
    $(".btnUser").sideNav();
  });
  $('#send').click(function(){
        var inputWrite = $('#inputWrite').val();
        $('#printMessage').append('<div class="message">' + inputWrite + '</div>');
        $('#inputWrite').val('');
  });
});

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#pause");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
};

function vidFade() {
  vid.classList.add("stopfade");
};

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "<i class='fa fa-pause'></i>Pausar <img src='assets/img/play.gif'>";
  } else {
    vid.pause();
    pauseButton.innerHTML = "<i class='fa fa-play'></i>Reproducir";
  }
});

var vid = document.getElementById("bgvid");
	vid.volume = 0.08;
var vid = document.getElementById("bgvid");
	vid.currentTime = 11;

