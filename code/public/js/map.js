function Map(canvas, tiles, x, y, height, width, bottom) {

	// canvas object 
	this.canvas = canvas;
	this.context = canvas.getContext('2d');
	// how many tiles there are in map
	this.height = height;
	this.width =  width;
	// position of map 
	this.x = x;
	this.y = y;
	// how tall or wide the map is in pixels
	this.pixelHeight = 400;
	this.pixelWidth = 400;

	this.grid = false;
	this.tiles = tiles;

	if (bottom) {
		this.map = {bottom: bottom, middle: [], top: []};
	} else{
		// filling the array of arrays
		this.map = {bottom: [], middle: [], top: []};
	    for (var j = 0; j < this.height; j++) {
	    	this.map.bottom[j] = [];
	        for (var i = 0; i < this.width; i++) {
	        	
	        	this.map.bottom[j][i] = 22;
	        }
	    }
	}


	// there has to be a better way :(
	var obj = this // this is a global object so that the draw function can see our variables
	// updater function for global object
	this.update = function () {
		obj = this;
	}
	

	// this function will draw it to the screen
	this.draw = function() {
		this.tiles.onload = function() {
			obj.update(); // make user we have updated stuff to work with
			var divider = 8;
			var tileSize = 40;
	        var sourceWidth = 40;
	        var sourceHeight = 40;	        

	        for (var j = 0; j < obj.height; j++) {
		        for (var i = 0; i < obj.width; i++) {

		        	var sourceX = (obj.map.bottom[j][i]%divider)
		        	var sourceY = Math.floor(obj.map.bottom[j][i]/divider)

		        	obj.context.drawImage(
		        		obj.tiles, 
		        		(sourceX*tileSize), (sourceY*tileSize), 
		        		sourceWidth, sourceHeight,
		        		obj.x+((obj.pixelWidth/obj.width) *i), obj.y+((obj.pixelHeight/obj.height) *j),
		        		obj.pixelWidth/obj.width, obj.pixelHeight/obj.height
		        	);
		        }
	        }
		}
	}

}