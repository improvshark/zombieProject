function Map(canvas, tiles, x, y, height, width, array) {

	this.canvas = canvas;
	this.context = canvas.getContext('2d');

	console.log('just map obj with:' +canvas);
	this.height = height;
	this.width =  width;
	this.x = x;
	this.y = y;
	this.grid = false;
	this.tiles = tiles;
	if (array) {
		this.array = array;
	} else{
		this.array = ['bottom', 'middle', 'top'];
		this.array.bottom = [],[];
	    for (var j = 0; j < this.height; j++) {
	        for (var i = 0; i < this.width; i++) {
	        	this.array.bottom[i] = 0;
	        }
	    }
	}
	console.log(this.array.bottom)

	// there has to be a better way :(
	var obj = this
	this.update = function () {
		obj = this;
	}
	
	this.draw = function() {
		this.tiles.onload = function() {
			console.log('width: ' + tiles.width + ' height: ' + tiles.height)
			        // draw cropped image
	        var sourceX = 0;
	        var sourceY = 3;
	        var sourceWidth = 40;
	        var sourceHeight = 40;
	        var tileSize = 40;
	        for (var j = 0; j < obj.height; j++) {
		        for (var i = 0; i < obj.width; i++) {
		        	obj.context.drawImage(tiles, (obj.array.bottom[i]*tileSize), (sourceY*tileSize), sourceWidth, sourceHeight, obj.x+(tileSize*i), obj.y+(tileSize*j), tileSize, tileSize);
		        }
	        }

	        
		}
		
	}




}