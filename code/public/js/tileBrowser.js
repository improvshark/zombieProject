 function TileBrowser(canvas, image, height, width){
 	Map.apply(this, arguments); // important
	this.grid = 1;

	// filling the map
	this.data = [];
	var count = 0;
    for (var j = 0; j < this.height; j++) {
    	this.data[j] = [];
        for (var i = 0; i < this.width; i++) {
        	var obj = {};
            obj.tile = count;
            this.data[j][i] = obj;
        	count += 1;
        }
    }

}


TileBrowser.prototype = new Map(); // inherit map
TileBrowser.prototype.constructor = TileBrowser; // set correct constructor

