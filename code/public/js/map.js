function Map(canvas, image, height, width ) {
	if (arguments.length == 0) return; // don't do anything

	// canvas object 
	this.canvas = canvas;
	this.context = this.canvas.getContext('2d');
	// how many tiles there are in map
	this.height = typeof height !== 'undefined' ? height : 10;
	this.width =  typeof width !== 'undefined' ? width: 10;
	// how tall or wide the map is in pixels
	this.pixelHeight = this.height*40;
	this.pixelWidth = this.width*40;
		// position of map 
	this.x = 0;
	this.y = 0;

	//the name of the map
	this.title = "";
	// creator user id
	this.author = "";

	this.grid = 0;
	this.gridColor = "black";

	this.image = image;
	this.imageLoaded = false;
	this.dragging = false;
	this.dragPoint = {x: 0, y: 0};
	// load map function

	// filling the array of arrays
	this.data = {bottom: [], middle: [], top: []};
    for (var j = 0; j < this.height; j++) {
    	this.data.bottom[j] = [];
        for (var i = 0; i < this.width; i++) {
        	
        	this.data.bottom[j][i] = 22;
        }
    }


	// there has to be a better way :(
	var obj = this // this is a global object so that the draw function can see our variables

	//make sure image is loaded
	this.image.onload = function() {
		obj.imageLoaded = true;
		obj.draw();
	}
}

// updater function for global object
Map.prototype.update = function () {
	obj = null;
	obj = this;
}

Map.prototype.loadMap = function(map){
	this.title = map.title;
	this.author = map.author;
	this.width = map.width;
	this.height = map.height;
	this.x = map.x;
	this.y = map.y;
	this.data = map.data;
	this.env = map.env;
};

// this function will draw it to the screen
Map.prototype.draw = function() {
	// setting canvas demensions
	this.context.width = this.canvas.width;
	this.context.height = this.canvas.height;
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clearing out the canvas
	// draw the tile grid
	var divider = 8; // number of tiles in a row
	var tileSize = 40;
    var sourceWidth = 40;
    var sourceHeight = 40;	        

    if (this.imageLoaded) {
    	// cycle through the tiles one at a time to crop them from the tile image.
        for (var j = 0; j < this.height; j++) {
	        for (var i = 0; i < this.width; i++) {

	        	var sourceX = (this.data.bottom[j][i]%divider) 
	        	var sourceY = Math.floor(this.data.bottom[j][i]/divider)

	        	// draw grid
	        	if (this.grid > 0) {
	        		this.context.beginPath(); // telling the canvas that we are starting a draw of something
	        		this.context.rect(
	        			this.x+((this.pixelWidth/this.width) *i), this.y+((this.pixelHeight/this.height) *j), // x and y position of the rectangle
	        	 		this.pixelWidth/this.width, this.pixelHeight/this.height // the height and width of the rectangle
	        		);
	        		this.context.lineWidth = this.grid; // the thickness of the rectangle
	 				this.context.strokeStyle = this.gridColor; // the color of the rectangle
	 				this.context.stroke(); // draw the rectangle
	        	}
	        	// draw tile
	        	this.context.drawImage(
	        		this.image, // the image we are croping to get our tile
	        		(sourceX*tileSize), (sourceY*tileSize), // the x and y location we will crop in relation to the tile image
	        		sourceWidth, sourceHeight,	// the height and width of our crop in relation to the tile image
	        		this.x+((this.pixelWidth/this.width) *i)+(this.grid/2), this.y+((this.pixelHeight/this.height) *j)+(this.grid/2), // the x and y location we will be placing the cropped image on the canvas
	        		(this.pixelWidth/this.width)-this.grid, (this.pixelHeight/this.height)-this.grid // the final height and width of our tile that will be drawn on the canvas
	        	);
	        }
        }
	}

};

Map.prototype.getMap = function(){
	return {
		title: this.title,
		author: this.author,
		width: this.width,
		height: this.height,
		x: this.x,
		y: this.y,
		data: this.data,
		env: this.env,
	}
};

Map.prototype.getMousePos = function (evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};

Map.prototype.isOverMap = function(mousePos) {
	if ( (mousePos.x < this.x || mousePos.x > this.x + this.pixelWidth) || (mousePos.y < this.y || mousePos.y > this.y + this.pixelHeight)){	
		return false;
	} else {
		console.log('over map!')
		return true;
	}
};

// this function will give the x and y of the tile the mouese is over
Map.prototype.getTilePos = function(evt) {
	var mousePos = this.getMousePos(evt);
	//console.log('mouse click x:' + mousePos.x + ' y:' + mousePos.y);

	// make sure click is on map
	if ( this.isOverMap(mousePos) ){
		// return tile location
		var tileX = Math.floor((mousePos.x - this.x)/ Math.floor(this.pixelWidth / this.width));
		var tileY = Math.floor((mousePos.y - this.y)/ Math.floor(this.pixelHeight / this.height));
		//console.log('tile x:' + tileX + ' y:' + tileY);
		return {x: tileX, y: tileY};
	}
	else{
		console.log('no tile');
		return null

	}
};

Map.prototype.getTile = function(evt){
	var tilePos = this.getTilePos(evt)
	console.log('tilepos: x:'+tilePos.x + " y:" +tilePos.y )
	console.log('this: '+ this.data.bottom[tilePos.y][tilePos.x])
	return this.data.bottom[tilePos.y][tilePos.x];
}
// this function will change the selected tile and redraw
Map.prototype.changeTile = function(x, y, tile){
	this.data.bottom[y][x] = tile;
};

Map.prototype.drag = function(evt){

	var mousePos = {x: evt.clientX, y: evt.clientY};


	if (this.dragging == false && this.isOverMap(mousePos)) {
		this.dragPoint = {x: (mousePos.x - this.x), y: (mousePos.y - this.y)};
		this.dragging = true;
	}

	if (this.dragging == true){
		this.x  = mousePos.x - (this.dragPoint.x );
		this.y  = mousePos.y - (this.dragPoint.y );
		this.draw();
	}

};


Map.prototype.dragStart = function(evt){
	if (this.dragging == false){
		var mapObj = this;
		$(this.canvas).mousemove(function(e){ mapObj.drag(e)});
	}
}

Map.prototype.dragEnd = function(evt){
	this.dragging = false;
	$(this.canvas).off('mousemove');
}
