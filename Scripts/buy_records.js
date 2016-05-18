

$(document).ready(function() {

	//fade the gallery in
	$(".albumCoverImage").fadeIn(1000);

	//colorize the album on mouse over
	$(".albumCoverImage").mouseover( function() {
		$(this).css("-webkit-filter","grayscale(0%)");
		$(this).css("cursor", "pointer");
	});

	//greyscale the album on mouse exit
	$(".albumCoverImage").mouseleave( function() {
		$(this).css("-webkit-filter","grayscale(100%)");
		$(this).css( 'cursor', 'default' );
	});

	//when someone clicks an album, show the description
	//TO DO!!
});