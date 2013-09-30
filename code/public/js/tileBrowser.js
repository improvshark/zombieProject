 function TileBrowser(canvas, image, height, width){
 	if (arguments.length == 0) return; // don't do anything
 	Map.apply(this, arguments);
	this.grid = 3;

	// filling the map
	this.data = {bottom: [], middle: [], top: []};
	var count = 0;
    for (var j = 0; j < this.height; j++) {
    	this.data.bottom[j] = [];
        for (var i = 0; i < this.width; i++) {
        	
        	this.data.bottom[j][i] = count;
        	count += 1;
        }
    }

}


TileBrowser.prototype = new Map(); // inherit map
TileBrowser.prototype.constructor = TileBrowser; // set correct constructor

