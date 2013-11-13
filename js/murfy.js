(function ($) {
    
$(document).ready(function(){
	// Expandable blocks should be 40px by default when page is loaded
	$('.expandable-block').css({
		height: 40,
		overflow: "hidden",
	});
	

	$('.expandable-block').hover(
		function(){
			$(this).animate({
				height: 180,
			}, 500).children().not('h2').css({backgroundColor: "#c5e3ca"});
		},
		function(){
			$(this).animate({ 
				height: 40,
				overflow: "hidden"
			}, 500).children('.block-content').css({backgroundColor: "#ffffff"});
	});
});	



/*
	$('.expandable-block').hover(
		function(){
			$(this).css({
				height: 150,
				cursor: "pointer",
				backgroundColor: "#7faaa1"
			}, "slow");
		},
		function(){
			$(this).css({ 
				height: 40,
				cursor: "default",
				backgroundColor: "#ffffff"
			}, "slow");
	});
*/



	
})(jQuery);