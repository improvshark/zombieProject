
var click1 = 0;	// left click
var click2 = 1;	// right click

var tool = 1; // tool selected from toolbar
var linin = false;//flag to control the line scketching
var clickStart = {x: 0, y: 0};
var clickEnd = {x: 0, y: 0};
var clickT = {x: 0, y: 0};//click variable for toolbar


// get tile selected from tile browser
$('#myTileBrowser').mousedown(function(evt){
    if(tool == 2)//if after using the eraser you select a new tile then the tool is set to the pencil
    {
        tool = 1;
    }

    if( evt.which == 1){
        click1 = tileBrowser.getTile(evt);
    }
    if ( evt.which == 3){
       click2 = tileBrowser.getTile(evt); 
    }
})

// placement of tiles
$('#myCanvas').mousedown(function(evt){
    //begin pencil tool
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
	}//end pencil tool
    //begin pen tool
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
	}//end pen tool
    //begin delete tool
    else if (tool == 2 && !evt.ctrlKey)
    {
        //This gets the default tile (ie. grass, sand,...) to simulate the erase tool.
        var defaultTile = myMap.getDefaultTile();

        console.log('Terrain: ' + defaultTile);

        $('#myCanvas').mousemove(function(evt){
        if(evt.which == 1){
            click = myMap.getTilePos(evt);  
            if (click != null) { myMap.changeTile(click.x, click.y, defaultTile);}
        }else if (evt.which == 3){
           click = myMap.getTilePos(evt);  
            if (click != null) { myMap.changeTile(click.x, click.y, defaultTile);}
        }
        myMap.draw();

        });
    }//end delete tool
    //begin line tool
    else if (tool == 3 && !evt.ctrlKey)
    {
        console.log('linin: ' + linin);
        if(linin == false){
            linin = true;
            clickStart = myMap.getTilePos(evt);
        }else if (linin == true)
        {
            linin = false;
            clickEnd = myMap.getTilePos(evt);

            var dx;
            var dy;
            var tmpX;
            var tmpY;

                if(clickEnd.x > clickStart.x)
                {
                    console.log('In && --> x1: '+clickStart.x+' y1: '+clickStart.y+' x2: '+clickEnd.x+' y2: '+clickEnd.y);
                    dx = clickEnd.x - clickStart.x;
                    dy = clickEnd.y - clickStart.y;

                }else
                {
                    console.log('In !&& --> x1: '+clickStart.x+' y1: '+clickStart.y+' x2: '+clickEnd.x+' y2: '+clickEnd.y);
                    tmpX = clickEnd.x;
                    clickEnd.x = clickStart.x;
                    clickStart.x = tmpX;

                    dx = clickEnd.x - clickStart.x;

                    tmpY = clickEnd.y;
                    clickEnd.y = clickStart.y;
                    clickStart.y = tmpY;

                     dy = clickEnd.y - clickStart.y;
                }

            
                /*if(clickEnd.y > clickStart.y)
                {
                    
                }else
                {
                    
                }*/

            for(var i = clickStart.x; i<=clickEnd.x; i++)
            {
                clickT.x = i;
                if(dx == 0)
                {
                    dx = 1;//protection for divide by 0
                }
                clickT.y = Math.floor(clickStart.y + (dy)*(i - clickStart.x)/(dx));

                //console.log('x1: '+clickStart.x+' y1: '+clickStart.y+' x2: '+clickEnd.x+' y2: '+clickEnd.y);

                //console.log('Changing tile; x: ' + clickT.x + ' y: ' + clickT.y + ' tile: ' +click1);
                //clickT.x = Math.abs(clickT.x);
                //clickT.y = Math.abs(clickT.y);
                myMap.changeTile(clickT.x, clickT.y, click1);
                myMap.draw();
            }



        }

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


//TOOLBAR FUNCTIONS
//This function changes tool according to the tile selected in the toolbar
$('#myToolBar').mousedown(function(evt){
    var selTool = toolBar.getTile(evt);
    tool = (selTool/8) ;//+ 1;

})

