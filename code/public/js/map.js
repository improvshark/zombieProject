function Map(canvas, tiles, height, width ) {

	// canvas object 
	this.canvas = canvas;
	this.context = canvas.getContext('2d');
	// how many tiles there are in map
	this.height = typeof height !== 'undefined' ? height : 10;
	this.width =  typeof width !== 'undefined' ? width: 10;
	// how tall or wide the map is in pixels
	this.pixelHeight = 600;
	this.pixelWidth = 600;
		// position of map 
	this.x = this.canvas.width/2 - this.pixelWidth/2;
	this.y = this.canvas.height/2 - this.pixelHeight/2;

	//the name of the map
	this.title = "";
	// creator user id
	this.author = "";

	this.grid = 0;
	this.gridColor = "black";

	this.tiles = tiles;
	this.tilesLoaded = false;
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
	this.tiles.onload = function() {
		obj.tilesLoaded = true;
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
	//console.log('drawing')
	// clear it out
	this.context.save();
	this.context.width = this.canvas.width;
	this.context.height = this.canvas.height;
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	// draw the tile grid
	var divider = 8;
	var tileSize = 40;
    var sourceWidth = 40;
    var sourceHeight = 40;	        

    if (this.tilesLoaded) {
        for (var j = 0; j < this.height; j++) {
	        for (var i = 0; i < this.width; i++) {

	        	var sourceX = (this.data.bottom[j][i]%divider)
	        	var sourceY = Math.floor(this.data.bottom[j][i]/divider)

	        	// draw grid
	        	if (this.grid > 0) {
	        		this.context.beginPath();
	        		this.context.rect(
	        			this.x+((this.pixelWidth/this.width) *i), this.y+((this.pixelHeight/this.height) *j),
	        	 		this.pixelWidth/this.width, this.pixelHeight/this.height
	        		);
	        		this.context.lineWidth = this.grid;
	 				this.context.strokeStyle = this.gridColor;
	 				this.context.stroke();
	        	}
	        	// draw tile
	        	this.context.drawImage(
	        		this.tiles, 
	        		(sourceX*tileSize), (sourceY*tileSize), 
	        		sourceWidth, sourceHeight,
	        		this.x+((this.pixelWidth/this.width) *i)+(this.grid/2), this.y+((this.pixelHeight/this.height) *j)+(this.grid/2),
	        		(this.pixelWidth/this.width)-this.grid, (this.pixelHeight/this.height)-this.grid
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
		var tileY = Math.floor((mousePos.y - this.y)/ Math.floor(this.pixelWidth / this.width));
		//console.log('tile x:' + tileX + ' y:' + tileY);
		return {x: tileX, y: tileY};
	}
	else{
		console.log('no tile');
		return null

	}
};
// this function will change the selected tile and redraw
Map.prototype.changeTile = function(x, y, tile){
	this.data.bottom[y][x] = tile;
};

Map.prototype.drag = function(evt, mapObj){

	console.log('object: =' + mapObj+ 'evt :' + evt);

	var mousePos = {x: evt.clientX, y: evt.clientY};
	mapObj.update();

	console.log('dragstart:' + mapObj.dragPoint.x)
	if (mapObj.dragging == false) {
		console.log('setting dragstart to:' + mousePos.x)
		mapObj.dragPoint = {x: (mousePos.x - mapObj.x), y: (mousePos.y - mapObj.y)};
		mapObj.dragging = true;
	}
	
	console.log('mouse x:' + mousePos.x + " y:" + mousePos.y);
	console.log('map x:' + mapObj.x + ' y:' + mapObj.y);
	console.log('drag start:' + mapObj.dragPoint.x);

	mapObj.x  = mousePos.x - (mapObj.dragPoint.x );
	mapObj.y  = mousePos.y - (mapObj.dragPoint.y );

	console.log('map moved to x:' + mapObj.x + ' y:' + mapObj.y);
	//this.y = mousePos.y + (mousePos.y - this.y);
	myMap.draw();

};


Map.prototype.dragStart = function(evt){
	if (this.dragging == false){
		this.canvas.addEventListener('mousemove', this.drag, true);
		
	}
}

Map.prototype.dragEnd = function(evt){
	if (this.dragging == true){
		this.dragging = false;
		this.canvas.removeEventListener('mousemove', this.drag, false);
	}
}
