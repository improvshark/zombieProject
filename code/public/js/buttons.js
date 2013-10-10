
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

// playTest
$('#butBar-playTest')[0].onclick = function(){
    console.log('sending report');
    var map2 = myMap.getMap() ;
    var report = $.post('tools/update.php', { mapObj: { map: map2}, send_map: true }, function(data){

        var obj = JSON.parse(data);
        console.log(obj.url);
        if (obj.success) {
            var win=window.open(obj.url, '_blank');
            win.focus();
        } 

    });

    
}

// Example Response:

// {
//   "success": true,
//   "url": "http://zombie-attack.aws.af.cm/simulate.html?id=78fcda8a717151e1a2e116b21c0114f3",
//   "report": "<div class='success'>Congrats. Your map JSON is valid</div>"
// }