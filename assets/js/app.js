$(document).ready(function(){
	$('.carousel').carousel({
		indicators:true,
		dist:-50, 
		padding: 100
	});
	autoplay()   
	function autoplay() {
		$('.carousel').carousel('next');
		setTimeout(autoplay, 4500);

	}
});