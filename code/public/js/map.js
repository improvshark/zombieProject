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


	//TODO !!!!!!!!!!!!!!!!!!!!! SET TITLE AND AUTHOR HERE
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

	//default map terrain (ie. grass, sand, etc...)
	this.terrainTile = 22; //default to 22 which is grass.

	// filling the array of arrays
	this.data = {bottom: [], middle: [], top: []};
    for (var j = 0; j < this.height; j++) {
    	this.data.bottom[j] = [];
        for (var i = 0; i < this.width; i++) {  	
        	this.data.bottom[j][i] = this.terrainTile;
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

//default terrain functions
Map.prototype.setDefaultTerrain = function(terrain)
{
	if(terrain > 0 && terrain < 38)
	{
		this.terrainTile = terrain;
	}	

}

//return default terrain
Map.prototype.getDefaultTile = function()
{
	return this.terrainTile;
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
	this.pixelWidth = this.width*40;
	this.pixelHeight = this.height*40;
};

Map.prototype.drawTile = function(x, y){

	var divider = 8; // number of tiles in a row
	var sourceX = (this.data.bottom[y][x]%divider) 
	var sourceY = Math.floor(this.data.bottom[y][x]/divider)
	var tileSize = 40;
	var destX = this.x+((this.pixelWidth/this.width) *x);
	var destY = this.y+((this.pixelHeight/this.height) *y);
	var destWidth = this.pixelWidth/this.width
	var destHeight=  this.pixelHeight/this.height;
	if ( this.isInCanvas({x: destX, y: destY, height: destHeight, width: destWidth}) ) {
		if (this.grid > 0) {
			this.context.beginPath(); // telling the canvas that we are starting a draw of something
			this.context.rect(
				destX, destY, // x and y position of the rectangle
				destWidth ,destHeight  // the height and width of the rectangle
			);
			this.context.lineWidth = this.grid; // the thickness of the rectangle
			this.context.strokeStyle = this.gridColor; // the color of the rectangle
			this.context.stroke(); // draw the rectangle
		}

		this.context.drawImage(
			this.image, // the image we are croping to get our tile
			(sourceX*tileSize), (sourceY*tileSize), // the x and y location we will crop in relation to the tile image
			tileSize, tileSize,	// the height and width of our crop in relation to the tile image
			destX+(this.grid/2), destY+(this.grid/2), // the x and y location we will be placing the cropped image on the canvas
			destWidth-this.grid, destHeight-this.grid // the final height and width of our tile that will be drawn on the canvas
		);
	}

}

// this function will draw it to the screen
Map.prototype.draw = function() {
	// setting canvas demensions
	this.context.width = this.canvas.width;
	this.context.height = this.canvas.height;
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clearing out the canvas       

    if (this.imageLoaded) {
    	// cycle through the tiles one at a time to crop them from the tile image.
        for (var j = 0; j < this.height; j++) {
	        for (var i = 0; i < this.width; i++) {	        	
	        	this.drawTile(i, j);
	        }    
        }
	}
};

Map.prototype.centerMap = function(){
	var x = this.canvas.width / 2;
    var y = this.canvas.height / 2;

    this.x = x - this.pixelWidth / 2;
    this.y = y - this.pixelHeight / 2;
}

Map.prototype.shrinkHeight = function(height){
	console.log('my height: ' + this.height + " shrinking to: "+ height);
	var diff = this.height - height;
    this.data.bottom.splice(height, diff);
	this.pixelHeight -= (this.pixelHeight/ this.height) * (this.height - height);
	this.height = height;
}

Map.prototype.growHeight = function(height){
	console.log('my height: ' + this.height + " growing to: "+ height);
	for (var i = this.height; i < height; i++) {
		this.data.bottom[i] = []; // make new array
		for (var j = 0; j < this.width; j++) {
			this.data.bottom[i][j] = this.terrainTile;
		};
	};
	this.pixelHeight += (this.pixelHeight/ this.height) * (height - this.height);
	this.height = height;
}

Map.prototype.shrinkWidth = function(width){
	console.log('my width: ' + this.width + " shrinking to: "+ width);
	var diff =  this.width - width;
	for (var i = 0; i < this.height; i++) {
    	this.data.bottom[i].splice(width, diff);
	};
	this.pixelWidth -= (this.pixelWidth/ this.width) * diff;
	this.width = width;
}

Map.prototype.growWidth = function(width){
	console.log('my width: ' + this.width + " growing to: "+ width);
	for (var i = 0; i < this.height; i++) {
		for (var j = this.width; j < width; j++) {
			this.data.bottom[i][j] = this.terrainTile;  
		};
	};
	this.pixelWidth += (this.pixelWidth/ this.width) * (width - this.width);
	this.width = width;
}

Map.prototype.resize = function(width, height){
	console.log('current: x:' + this.width + " y:" + this.height)
	console.log("going to x:" + width + " y:" + height);
	console.log(this.data.bottom);

	width = parseInt(width);
	height = parseInt(height);

	if (height > this.height){ this.growHeight(height); }
	else if (height < this.height ) { this.shrinkHeight(height); }

	if (width > this.width){ this.growWidth(width); }
	else if (width < this.width ) { this.shrinkWidth(width); }
	console.log(this.data.bottom);
	this.centerMap();
	this.draw();
}

Map.prototype.fill = function(tile){
    for (var j = 0; j < this.height; j++) {
    	this.data.bottom[j] = [];
        for (var i = 0; i < this.width; i++) {  	
        	this.data.bottom[j][i] = tile;
        }
    }
}

Map.prototype.getMap = function(){
	return {
		title: this.title,
		author: this.author,
		width: this.width,
		height: this.height,
		x: 0,
		y: 0,
		data: this.data,
		env: this.env,
	}
};

Map.prototype.getThumb = function(){
	

	var imgData = this.context.getImageData(this.x, this.y, this.pixelWidth, this.pixelHeight); // get image from current canvas
	
	// create a temp canvas to work with
	var tempCanvas = document.createElement("canvas"),
        tCtx = tempCanvas.getContext("2d");
    tempCanvas.setAttribute('id',tempCanvas);
	tempCanvas.width = this.pixelWidth;
    tempCanvas.height = this.pixelHeight;
    tCtx.putImageData(imgData,0,0);


	var thumb = tempCanvas.toDataURL();
	console.dir(thumb);
	return thumb;
}

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

Map.prototype.isInCanvas = function(obj) {
	if ( (obj.x < this.canvas.width && obj.x > 0 - obj.width) 
		&& (obj.y < this.canvas.height && obj.y > 0 - obj.height)){ 
		return true;
	} else {
		return false;
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

Map.prototype.getxyTile = function(x, y){
	return this.data.bottom[y][x];
};


// this function will change the selected tile and redraw
Map.prototype.changeTile = function(x, y, tile){
	this.data.bottom[y][x] = tile;
	this.drawTile(x, y);
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
