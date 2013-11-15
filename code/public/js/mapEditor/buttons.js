// fle --> new
$('#butBar-new')[0].onclick = function(){
    self.location=("editor.php");
}
// fle --> open
$('#butBar-open')[0].onclick = function(){
    self.location=("dev_index.php");
}


// fle --> save
$('#butBar-save')[0].onclick = function(){
    var map =  JSON.stringify( { map: myMap.getMap()} ) ;

    if (myMapID == null){
        console.log('setting id to:'+ myMapID)
        createMap(map, myMap.getImage(), function(data){
            myMapID = data;
            console.log('setting id to:'+ myMapID)
        });
        
        
    }
    else {
        saveMap(map, myMapID, myMap.getImage());
    }
}

// edit --> undo
$('#butBar-undo')[0].onclick = function(){
    myMap.undoManager.undo();
}
// edit --> redo
$('#butBar-redo')[0].onclick = function(){
    myMap.undoManager.redo();
}

// view --> grid
$('#butBar-showGrid')[0].onclick = function(){
    console.log('grid');
    if (myMap.grid != 0){
        // use bootstrap to put a checkmark by it
        $('#butBar-showGrid')[0].setAttribute("class", "");
        myMap.grid = 0; 
    } else {
        // use bootstrap to put a checkmark by it
        $('#butBar-showGrid')[0].setAttribute("class", "glyphicon glyphicon-ok");
        myMap.grid = .7;  
    }
    myMap.draw();
}
// view --> center map
$('#butBar-centerMap')[0].onclick = function(){
    myMap.centerMap();
    myMap.draw();
}

// window --> tilebrowser
$('#butBar-tileBrowser')[0].onclick = function(){
    if (!tileBrowserVisable){
    	console.log(showTileBrowser)
        tileBrowserVisable = true;
        showTileBrowser();

    } else {
    	console.log(showTileBrowser)
        tileBrowserVisable = false;
        hideTileBrowser();
    }
}

// window --> toolbox
$('#butBar-toolbox')[0].onclick = function(){
    if (!toolbarVisable){
        toolbarVisable = true;
        showToolbar();

    } else {
        toolbarVisable = false;
        hideToolbar();
    }
}

// window --> slider
$('#butBar-slider')[0].onclick = function(){
    if (!sliderVisable){
        sliderVisable = true;
        showSlider();

    } else {
        sliderVisable = false;
        hideSlider();
    }
}

// tools --> playTest
$('#butBar-playTest')[0].onclick = function(){
    
    sendMap(myMap.getMap(), function(data){
            if (data.success) {
            //var win=window.open(obj.url, '_blank');
            //win.focus();
            $('#playTestModal').modal()
            $('#playTestIframe')[0].src = data.url;
            $('#playTestIframe').focus();
        } 

    });    
}

// Example Response:

// {
//   "success": true,
//   "url": "http://zombie-attack.aws.af.cm/simulate.html?id=78fcda8a717151e1a2e116b21c0114f3",
//   "report": "<div class='success'>Congrats. Your map JSON is valid</div>"
// }

// tools --> resizeMap
$('#butBar-resizeMap')[0].onclick = function(){
    $('#resizeModal').modal()
    $('#resizeWidth').val(myMap.width);
    $('#resizeHeight').val(myMap.height);
}

// tools --> fill
$('#butBar-fill')[0].onclick = function(){
    var fillSelected = 0;
    
    // load tiles image
    var fillTiles = new Image()
    fillTiles.src = 'public/img/tiles.png';

    fillBrowser = new TileBrowser( $('#fillTool')[0], fillTiles, 6, 8);
    fillBrowser.pixelWidth = $('#fillTool')[0].width;
    fillBrowser.pixelHeight = $('#fillTool')[0].height;
    fillBrowser.draw();

    // get tile selected from tile browser
    $('#fillTool')[0].onclick = function(evt){

       var pos = fillBrowser.getTilePos(evt);
        fillBrowser.selectRight(pos.x, pos.y);
        fillSelected  = fillBrowser.getTile(evt);

    }
    $('#fillBtn')[0].onclick = function(evt){
        myMap.terrainTile = fillSelected;
        myMap.fill(fillSelected);
        myMap.draw();
    }



    $('#fillModal').modal()

}

$('#butBar-preferences')[0].onclick = function(){
    $('#preferencesModal').modal();
}
