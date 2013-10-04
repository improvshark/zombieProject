
var click1 = 0;	// left click
var click2 = 1;	// right click

var tool = 1; // tool selected from toolbar



// get tile selected from tile browser
$('#myTileBrowser').mousedown(function(evt){

    if( evt.which == 1){
        click1 = tileBrowser.getTile(evt);
    }
    if ( evt.which == 3){
       click2 = tileBrowser.getTile(evt); 
    }
})

// placement of tiles
$('#myCanvas').mousedown(function(evt){

	if (tool == 0 && !evt.ctrlKey ){  // if tool 0 is selected
	    if(evt.which == 1) { 
	        // set location of mouse click to click object
	        click = myMap.getTilePos(evt);  
	        // check if we are on map...if we are change tile
	        if (click != null) { myMap.changeTile(click.x, click.y, click1) }
	    }
	    else if (evt.which == 3 ) {
	        // set location of mouse click to click object
	        click = myMap.getTilePos(evt);  
	        // check if we are on map...if we are change tile
	        if (click != null) { myMap.changeTile(click.x, click.y, click2) }
	    }
		myMap.draw(); // redraw map so we can see changes
	}
	else if (tool == 1 && !evt.ctrlKey ){  // if tool 1 is selected
	    $('#myCanvas').mousemove(function(evt){

            if(evt.which == 1) {
                // set location of mouse click to click object
                click = myMap.getTilePos(evt);  
                // check if we are on map...if we are change tile
                if (click != null) { myMap.changeTile(click.x, click.y, click1) }
            }
            else if (evt.which == 3 ) {
                // set location of mouse click to click object
                click = myMap.getTilePos(evt);  
                // check if we are on map...if we are change tile
                if (click != null) { myMap.changeTile(click.x, click.y, click2) }
            }
        	myMap.draw(); // redraw map so we can see changes
	    });
	}

	

	
});


// starts the drag of the map
$('#myCanvas').mousedown(function(evt){
    console.log('MOUSEBUTTON: ' + evt.which);
    if (evt.ctrlKey == true){
        if (evt.which == 1) {  myMap.dragStart();  }   
    }
});

// releases the drag
$('#myCanvas').mouseup(function(evt){
    if (evt.which == 1) {  myMap.dragEnd(); }   
});


// makes pluss and minus zoom the map
$(window).keypress(function(evt){
    console.log('key: ' + evt.which);
    var change = 5;
    if (evt.which == 43 || evt.which == 61){
        
        myMap.pixelWidth += myMap.width*change;
        myMap.pixelHeight += myMap.height*change;
        myMap.x -= (myMap.width*change)/2;
        myMap.y -= (myMap.height*change)/2;
        myMap.draw();
    }
    else if (evt.which == 45){
        myMap.pixelWidth -= myMap.width*change;
        myMap.pixelHeight -= myMap.height*change;
        myMap.x += (myMap.width*change)/2;
        myMap.y += (myMap.height*change)/2;
        myMap.draw();
    }
});


// this stuff is to hide and show the toolbar and tile Broweser
var showToolbar = false;
var showTileBrowser = false;

if (!showToolbar && !showTileBrowser){
	$('#toolbar').hide();
	$('#tileBrowser').hide();
}
// show toolbar when mouse over
$('#toolbarHandle').mouseover(function() {
	if (!showToolbar) {
	    $('#toolbar').show();
	    $('#toolbar').animate({'left' : 0 }, {duration: 200, queue: false, easing: 'linear'})
	}
});

// hide toolbar on mouse out
$('#toolbarHandle').mouseout(function() {
	if (!showToolbar) {
	    $('#toolbar').animate({'left' :  -200}, {duration: 200, queue: false, easing: 'linear'})
	    $('#toolbar').hide();
	}
});


// show tileBrowser when mouse over
$('#tileBrowserHandle').mouseover(function() {
	if (!showTileBrowser) {
	    $('#tileBrowser').show();
	    $('#tileBrowser').animate({'right' : 0 }, {duration: 200, queue: false, easing: 'linear'})
	}
});

// hide tileBrowser on mouse out
$('#tileBrowserHandle').mouseout(function() {
	if (!showTileBrowser) {
	    $('#tileBrowser').animate({'right' :  -500}, {duration: 200, queue: false, easing: 'linear'})
	    $('#tileBrowser').hide();
	}
});