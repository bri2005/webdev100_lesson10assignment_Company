
function Album (id, band, albumName) {
	this.id = id;
	this.band = band;
	this.albumName = albumName;
}



$(document).ready(function() {

	///2D album array
	var album1 = new Album("album1", "Nirvana", "Nevermind");
	var album2 = new Album("album2", "Arcade Fire", "Funeral");
	var album3 = new Album("album3", "Blur", "Parklife");
	var album4 = new Album("album4", "Beatles", "Abbey Road");
	var album5 = new Album("album5", "White Stripes", "Elephant");
	var album6 = new Album("album6", "David Bowie", "Hunky Dory");
	var album7 = new Album("album7", "Led Zeppelin", "Led Zeppelin II");
	var album8 = new Album("album8", "The Rolling Stones", "Sticky Fingers");

	var albums = [album1, album2, album3,
				  album4, album5, album6,
				  album7, album8];

	
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
	$(".albumCoverImage").click(function(){
    
        var albumId = $(this).attr('id');
       
        //find the album in the album array
        var result = $.grep(albums, function(e){ 
        	return e.id === albumId;
        });

       	var albumName = result[0].albumName;
       	var bandName = result[0].band;

        //get the album from the dictionary

        $("#modalbody").html("<p>You clicked on "+albumName+" by "+bandName+"</p>");
        $("#myModal").modal();
    });

});