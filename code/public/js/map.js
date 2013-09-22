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
	this.tilesLoaded = false;

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
	//make sure image is loaded
	this.tiles.onload = function() {
		obj.tilesLoaded = true;
		obj.draw();
	}


	// this function will draw it to the screen
	this.draw = function() {
		console.log('drawing')
		// clear it out
		this.context.save();
    	this.context.clearRect(0, 0, canvas.width, canvas.height);
		// draw the tile grid
		var divider = 8;
		var tileSize = 40;
        var sourceWidth = 40;
        var sourceHeight = 40;	        

        if (this.tilesLoaded) {
	        for (var j = 0; j < this.height; j++) {
		        for (var i = 0; i < this.width; i++) {

		        	var sourceX = (this.map.bottom[j][i]%divider)
		        	var sourceY = Math.floor(this.map.bottom[j][i]/divider)

		        	this.context.drawImage(
		        		this.tiles, 
		        		(sourceX*tileSize), (sourceY*tileSize), 
		        		sourceWidth, sourceHeight,
		        		this.x+((this.pixelWidth/this.width) *i), this.y+((this.pixelHeight/this.height) *j),
		        		this.pixelWidth/this.width, this.pixelHeight/this.height
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

		// make sure click is on map
		if ( (mouseX < this.x || mouseX > this.x + this.pixelWidth) || (mouseY < this.y || mouseY > this.y + this.pixelHeight)){
			console.log('no tile');
			return null
		}
		else{
			// return tile location
			var tileX = Math.floor((mouseX - this.x)/ Math.floor(this.pixelWidth / this.width));
			var tileY = Math.floor((mouseY - this.y)/ Math.floor(this.pixelWidth / this.width));
			console.log('tile x:' + tileX + ' y:' + tileY);

			return {x: tileX, y: tileY};
		}
	};
	// this function will change the selected tile and redraw
	this.changeTile = function(x, y, tile){
		this.map.bottom[y][x] = tile;
		this.draw();
	};

	this.dragStart = function(evt){

	};

	this.dragEnd = function(evt){

	};

}