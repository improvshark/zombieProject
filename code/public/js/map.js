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
	this.pixelHeight = 600;
	this.pixelWidth = 600;

	//the name of the map
	this.title = "";

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
		obj = null;
		obj = this;
	}
	

	// this function will draw it to the screen
	this.draw = function() {
		console.log('drawing map');
		
		this.tiles.onload = function() {
			console.log('old: ' + obj.map.bottom);
			obj.update(); // make user we have updated stuff to work with
			console.log('updated: ' + obj.map.bottom);
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
	};

	this.loadMap = function(map){

	};

	this.getJSON = function(){

	};

	// this function will give the x and y of the tile the mouese is over
	this.getMousePos = function(evt) {
		var bounds = this.canvas.getBoundingClientRect();
		var mouseX = evt.clientX - bounds.left;
		var mouseY = evt.clientY - bounds.top;j

		console.log('mouse click x:' + mouseX + ' y:' + mouseY);

		var tileX = Math.floor(mouseX/ Math.floor(this.pixelWidth / this.width));
		var tileY = Math.floor(mouseY/ Math.floor(this.pixelWidth / this.width));

		console.log('tile x:' + tileX + ' y:' + tileY);

		return {x: tileX, y: tileY}

	};
	// this function will change the selected tile and redraw
	this.changeTile = function(x, y, tile){
		console.log('atemting to change tile x:' + x + ' y:' + x + 'to this:' + tile)
		console.log( 'old tile: ' + this.map.bottom[y][x])
		this.map.bottom[y][x] = tile;
		console.log( 'new tile: ' + this.map.bottom[y][x])
		//this.draw();
		console.log(this.map.bottom);
	};

	this.dragStart = function(evt){

	};

	this.dragEnd = function(evt){

	};

}