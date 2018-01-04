$(document).ready(function(){
	$('.carousel').carousel({
		indicators:true,
		dist:-50,
		padding: 100
	});
    $('.modal').modal();

});

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#pause");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

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
    pauseButton.innerHTML = "<i class='fa fa-pause'></i>Pausar";
  } else {
    vid.pause();
    pauseButton.innerHTML = "<i class='fa fa-play'></i>Reproducir";
  }
})

var vid = document.getElementById("bgvid");
	vid.volume = 0.05;
var vid = document.getElementById("bgvid");
	vid.currentTime = 11;

