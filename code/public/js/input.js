
var click1 = 0;	// left click
var click2 = 1;	// right click

var tool = 1; // tool selected from toolbar
var tempTool = 1;//Temp tool to hold previous tool for picker


// TODO: move this to  toolbar.js 
var linin = false;//flag to control the line scketching
var whichclick = "right";
var whichclick2 = "right";
var clickStart = {x: 0, y: 0};
var clickEnd = {x: 0, y: 0};
var clickT = {x: 0, y: 0};//click variable for toolbar


// get tile selected from tile browser
$('#myTileBrowser').mousedown(function(evt){
    if(tool == 2)//if after using the eraser you select a new tile then the tool is set to the previous tool
    {
        tool = tempTool;
    }
    var pos = tileBrowser.getTilePos(evt);

    if( evt.which == 1){
        click1 = tileBrowser.getTile(evt);
        tileBrowser.selectRight(pos.x, pos.y);

    }
    if ( evt.which == 3){
       click2 = tileBrowser.getTile(evt); 
       tileBrowser.selectLeft(pos.x, pos.y);
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
		//myMap.draw(); // redraw map so we can see changes
	}//end pencil tool
    //begin pen tool
	else if (tool == 1 && !evt.ctrlKey ){  // if tool 1 is selected
        /*end code to fix mouse move bug*/
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
        /*end code to fix mouse move bug*/
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
        	//myMap.draw(); // redraw map so we can see changes
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
        if(linin == false)
        {                                                
            linin = true;
            clickStart = myMap.getTilePos(evt);
            if(evt.which == 1){
                whichclick = "right";
            }else if (evt.which == 3){
                whichclick = "left";
            }
        }else if (linin == true)
        {
            if(evt.which == 1){
                whichclick2 = "right";
            }else if (evt.which == 3){
                whichclick2 = "left";
            }

            if(whichclick == whichclick2)
            {
                linin = false;
                if(whichclick == "right")
                {
                    drawLine(evt, click1, clickStart);
                }else
                {
                    drawLine(evt, click2, clickStart);
                }
                
            }else
            {  
                clickStart = myMap.getTilePos(evt);
                if(evt.which == 1){
                    whichclick = "right";
                }else if (evt.which == 3){
                    whichclick = "left";
                }
            }

        }

    }else if (tool == 5 && !evt.ctrlKey)//bucket tool
    {
            coord = myMap.getTilePos(evt);
            compTile = myMap.getTile(evt);

            console.log("Tile pos, x: " + coord.x + " y: " + coord.y + ". compTile: " + compTile);

            if(evt.which == 1){
                rTileChanger(coord.x, coord.y, compTile, click1);
            }else if (evt.which == 3){
                rTileChanger(coord.x, coord.y, compTile, click2);
            }
            
            myMap.draw();
    }else if (tool == 4 && !evt.ctrlKey)//peecker (yes peecker)
    {

        if(evt.which == 1){
            click1 = myMap.getTile(evt);
        }else if (evt.which == 3){
            click2 = myMap.getTile(evt);
        }
        
        tool = tempTool;

    }//it was so hard to do this...

});

// TODO: move this to  toolbar.js 
var rTileChanger = function(varX, varY, compTile, chTile){

    if(!myMap.isOverMapXY(varX, varY))
    {
        var currTile = myMap.getxyTile(varX, varY);
        console.log("currTile: " + currTile + "compTile: " + compTile);

        if(currTile != compTile || currTile == chTile)
        {
            return;
        }
        else if(currTile == compTile)
        {
            myMap.changeTile(varX, varY, chTile);

            rTileChanger(varX + 1/*myMap.width*/, varY, compTile, chTile); //go right
            rTileChanger(varX - 1/*myMap.width*/, varY, compTile, chTile); //go left
            rTileChanger(varX, varY - 1/*myMap.height*/, compTile, chTile); //go up
            rTileChanger(varX, varY + 1/*myMap.height*/, compTile, chTile); //go down
        }
    }

};

var drawLine = function(evt, side, clickStart)
{
    clickEnd = myMap.getTilePos(evt);

    console.log('X0: ' + clickStart.x + ' Y0: ' + clickStart.y);
    console.log('X1: ' + clickEnd.x + ' Y1: ' + clickEnd.y);

    var dx;
    var dy;
    var sx;
    var sy;
    var err;
    var e2;

    dx = Math.abs(clickEnd.x - clickStart.x);
    dy = Math.abs(clickEnd.y - clickStart.y);

    if(clickStart.x < clickEnd.x)
    {
        sx = 1;
    }else
    {
        sx = -1;
    }

    if(clickStart.y < clickEnd.y)
    {
        sy = 1;
    }else
    {
        sy = -1;
    }      

    err = dx - dy;


    while(true)
    {
        myMap.changeTile(clickStart.x, clickStart.y, side);
        if(clickStart.x == clickEnd.x && clickStart.y == clickEnd.y) break;
        e2 = 2*err;
        if (e2 > -dy)
        {
            err = err - dy;
            clickStart.x = clickStart.x + sx;
        }
        if (e2 < dx)
        {
            err = err + dx;
            clickStart.y = clickStart.y + sy;
        }
    }
}


// starts the drag of the map
$('#myCanvas').mousedown(function(evt){
    console.log('MOUSEBUTTON: ' + evt.which);
    if (evt.ctrlKey == true){
        evt.preventDefault();
        if (evt.which == 1) {  myMap.dragStart();  }   
    }
});

// releases the drag
$('#myCanvas').mouseup(function(evt){
    evt.preventDefault();
    if (evt.which == 1) {  myMap.dragEnd(); }   
});


// makes pluss and minus zoom the map
$(document).keydown(function(evt){
    console.log('key: ' + evt.which);
    var change = 5
    var changeX = (myMap.width *  change);
    var changeY = (myMap.height * change);
    var move = 30;

    if (evt.which == 107 || evt.which == 187){
        
        myMap.pixelWidth += changeX;
        myMap.pixelHeight += changeY;
        myMap.x -= (myMap.width * change)/2;
        myMap.y -= (myMap.height * change)/2;
    }
    else if (evt.which == 109 || evt.which == 189){
        if (myMap.pixelWidth - changeX > 100 || myMap.pixelHeight- changeY > 100){
            myMap.pixelWidth -= changeX;
            myMap.pixelHeight -= changeY;
            myMap.x += (myMap.width * change)/2;
            myMap.y += (myMap.height * change)/2;
        }  
    }
    else if (evt.which == 37) { evt.preventDefault(); myMap.x -= move } // arrow keys
    else if (evt.which == 38) { evt.preventDefault(); myMap.y -= move }
    else if (evt.which == 39) { evt.preventDefault(); myMap.x += move }
    else if (evt.which == 40) { evt.preventDefault(); myMap.y += move }

    myMap.draw();
});


// this stuff is to hide and show the toolbar and tile Broweser
var toolbarVisable = true;
var tileBrowserVisable = true;

var showToolbar = function (){
    $('#toolbar').show();
    $('#toolbar').animate({'left' : 0 }, {duration: 200, queue: false, easing: 'linear'})
    $('#butBar-toolbox')[0].setAttribute("class", "glyphicon glyphicon-ok"); // add checkmark 
}
var showTileBrowser = function (){
    $('#tileBrowser').show();
    $('#tileBrowser').animate({'right' : 0 }, {duration: 200, queue: false, easing: 'linear'})
    $('#butBar-tileBrowser')[0].setAttribute("class", "glyphicon glyphicon-ok"); // add checkmark 
}
var hideToolbar = function (){
    $('#toolbar').animate({'left' :  -200}, {duration: 200, queue: false, easing: 'linear'})
    $('#toolbar').hide();
    $('#butBar-toolbox')[0].setAttribute("class", ""); // remove checkmark 
}
var hideTileBrowser = function (){
    $('#tileBrowser').animate({'right' :  -500}, {duration: 200, queue: false, easing: 'linear'})
    $('#tileBrowser').hide();
    $('#butBar-tileBrowser')[0].setAttribute("class", ""); // remove checkmark 
}

if (toolbarVisable){ showToolbar() } else { hideToolbar() };
if (tileBrowserVisable) { showTileBrowser() } else { hideTileBrowser };

// show toolbar when mouse over
$('#toolbarHandle').mouseover(function() {
	if (!toolbarVisable) {
	    showToolbar()
	}
});

// hide toolbar on mouse out
$('#toolbarHandle').mouseout(function() {
	if (!toolbarVisable) {
	    hideToolbar()
	}
});
// show tileBrowser when mouse over
$('#tileBrowserHandle').mouseover(function() {
	if (!tileBrowserVisable) {
	    showTileBrowser()
	}
});
// hide tileBrowser on mouse out
$('#tileBrowserHandle').mouseout(function() {
	if (!tileBrowserVisable) {
	    hideTileBrowser();
	}
});


//TOOLBAR FUNCTIONS
//This function changes tool according to the tile selected in the toolbar
$('#myToolBar').mousedown(function(evt){
    var selTool = toolBar.getTile(evt);
    tempTool = tool;
    tool = (selTool/8) ;//+ 1;

})

