 function TileBrowser(canvas, image, height, width){
 	Map.apply(this, arguments); // important
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

