// this stuff is to hide and show the toolbar and tile Broweser
var toolbarVisable = true;
var tileBrowserVisable = true;
var sliderVisable = true;

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

var hideSlider = function (){
    $('#slider').animate({'left' :  -300}, {duration: 200, queue: false, easing: 'linear'})
    $('#slider').hide();
    $('#butBar-slider')[0].setAttribute("class", ""); // remove checkmark 
}

var showSlider = function (){
    $('#slider').show();
    $('#slider').animate({'left' : 6 }, {duration: 200, queue: false, easing: 'linear'})
    $('#butBar-slider')[0].setAttribute("class", "glyphicon glyphicon-ok"); // add checkmark 
}



if (toolbarVisable){ showToolbar() } else { hideToolbar() };
if (tileBrowserVisable) { showTileBrowser() } else { hideTileBrowser() };
if (sliderVisable) { showSlider(); } else { hideSlider() };

// show toolbar when mouse over
$('#sliderHandle').mouseover(function() {
    if (!sliderVisable) {
        showSlider();
    }
});

// hide toolbar on mouse out
$('#sliderHandle').mouseout(function() {
    if (!sliderVisable) {
        hideSlider();
    }
});
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
