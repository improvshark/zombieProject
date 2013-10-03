function Map(canvas, tiles, x, y, height, width, bottom) {

	this.canvas = canvas;
	this.context = canvas.getContext('2d');

	console.log('just map obj with:' +canvas);
	this.height = height;
	this.width =  width;
	this.x = x;
	this.y = y;
	this.grid = false;
	this.tiles = tiles;

	if (bottom) {
		this.map = {bottom: bottom, middle: [], top: []};
	} else{
		//this.map = ['bottom', 'middle', 'top'];
		this.map = {bottom: [], middle: [], top: []};
	    for (var j = 0; j < this.height; j++) {
	    	this.map.bottom[j] = [];
	        for (var i = 0; i < this.width; i++) {
	        	
	        	this.map.bottom[j][i] = 22;
	        }
	    }
	}
	console.log(this.map.bottom)

	// there has to be a better way :(
	var obj = this
	this.update = function () {
		obj = this;
	}
	
	this.draw = function() {
		this.tiles.onload = function() {
			var devider = 8;
	        var sourceWidth = 40;
	        var sourceHeight = 40;
	        var tileSize = 40;
	        for (var j = 0; j < obj.height; j++) {
		        for (var i = 0; i < obj.width; i++) {

		        	var sourceX = (obj.map.bottom[j][i]%devider)
		        	var sourceY = Math.floor(obj.map.bottom[j][i]/devider)

		        	obj.context.drawImage(obj.tiles, (sourceX*tileSize), (sourceY*tileSize), sourceWidth, sourceHeight, obj.x+(tileSize*i), obj.y+(tileSize*j), tileSize, tileSize);
		        }
	        }

	        
		}
		
	}




}