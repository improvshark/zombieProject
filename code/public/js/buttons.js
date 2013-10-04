
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
	console.log('tilebrowser');
    if (!showTileBrowser){
    	console.log(showTileBrowser)
        $('#butBar-tileBrowser')[0].setAttribute("class", "glyphicon glyphicon-ok"); // add checkmark 
        $('#tileBrowser').show();
        $('#tileBrowser').animate({'right' : 0 }, {duration: 200, queue: false, easing: 'linear'});
        showTileBrowser = true;

    } else {
    	console.log(showTileBrowser)
        $('#butBar-tileBrowser')[0].setAttribute("class", ""); // add checkmark 
        $('#tileBrowser').animate({'right' :  -500}, {duration: 200, queue: false, easing: 'linear'});
        $('#tileBrowser').promise().done(function(){ $('#tileBrowser').hide();	}); // hide when done
        showTileBrowser = false;
    }
}

// window --> toolbox
$('#butBar-toolbox')[0].onclick = function(){
    if (!showToolbar){
        $('#butBar-toolbox')[0].setAttribute("class", "glyphicon glyphicon-ok"); // add checkmark 
        $('#toolbar').show();
        $('#toolbar').animate({'left' : 0 }, {duration: 200, queue: false, easing: 'linear'})
        showToolbar = true;

    } else {
        $('#butBar-toolbox')[0].setAttribute("class", ""); // add checkmark 
        $('#toolbar').animate({'left' :  -200}, {duration: 200, queue: false, easing: 'linear'})
        $('#toolbar').promise().done(function(){ $('#toolbar').hide();	}); // hide when done
        showToolbar = false;
    }
}