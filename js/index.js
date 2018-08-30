$(function(){
	$(".smile").click(function(){
		$('.smile_ex').toggle();
		$('.song_ex').hide();			
	})
	$(".song").click(function(){
		$('.song_ex').toggle();
		$('.smile_ex').hide();				
	})
	$('.close').click(function(){
		$('.smile_ex').hide();
		$('.song_ex').hide();
	})
	
	
	
	
	
})