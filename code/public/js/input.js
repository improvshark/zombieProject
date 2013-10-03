
$('#myTileBrowser').mousedown(function(evt){

    if( evt.which == 1){
        click1 = tileBrowser.getTile(evt);
    }
    if ( evt.which == 3){
       click2 = tileBrowser.getTile(evt); 
    }
})

// stuff like this would go in the mouse class
$('#myCanvas').mousedown(function(evt){
    $('#myCanvas').mousemove(function(evt){

        // if statement ot checkif its the left mouse button
        if (evt.ctrlKey == false){
            if(evt.which == 1) {
                // set location of mouse click to click object
                click = myMap.getTilePos(evt);  
                // check if we are on map...if we are change tile
                if (click != null) { 
                    // pass is location x and y and the tile number to change it to
                    myMap.changeTile(click.x, click.y, click1)
                }
            }
            else if (evt.which == 3 ) {
                // set location of mouse click to click object
                click = myMap.getTilePos(evt);  
                // check if we are on map...if we are change tile
                if (click != null) { 
                    myMap.changeTile(click.x, click.y, click2)
                }
            }
            // redraw map so we can see changes
            myMap.draw();
        }

    });
});


$('#myCanvas').mousedown(function(evt){
    console.log('MOUSEBUTTON: ' + evt.which);
    if (evt.ctrlKey == true){
        if (evt.which == 1) {  myMap.dragStart();  }   
    }
});


$('#myCanvas').mouseup(function(evt){
    if (evt.which == 1) {  myMap.dragEnd(); }   
});
// add listner when spacebar is pressed down

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