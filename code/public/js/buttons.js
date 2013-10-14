
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

// tools --> playTest
$('#butBar-playTest')[0].onclick = function(){
    console.log('sending report');

    console.dir(myMap.getMap());
    var map =  JSON.stringify( { map: myMap.getMap()} ) ;

    //console.log('seding this json: --->' + map);
    
    var report = $.post('tools/update.php', { mapObj: map, send_map: true }, function(data){

        var obj = JSON.parse(data);
        console.log(data);
        if (obj.success) {
            //var win=window.open(obj.url, '_blank');
            //win.focus();
           
            $('#playTestModal').modal()
            $('#playTestIframe')[0].src = obj.url;
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
        fillSelected  = fillBrowser.getTile(evt);
    }
    $('#fillBtn')[0].onclick = function(evt){
        myMap.terrainTile = fillSelected;
        myMap.fill(fillSelected);
        myMap.draw();
    }

    $('#fillModal').modal()

}
