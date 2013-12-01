function Map(canvas, image, height, width, middle, upper) {
	if (arguments.length == 0) return; // don't do anything

	// canvas object 
	this.canvas = canvas;
	this.context = this.canvas.getContext('2d');
	// how many tiles there are in map
	this.height = typeof height !== 'undefined' ? height : 10;
	this.width = typeof width !== 'undefined' ? width : 10;
	// how tall or wide the map is in pixels
	this.pixelHeight = this.height * 40;
	this.pixelWidth = this.width * 40;
	// position of map 
	this.x = 0;
	this.y = 0;

	this.undoManager = new UndoManager();
	this.events = [];


	//TODO !!!!!!!!!!!!!!!!!!!!! SET TITLE AND AUTHOR HERE
	//the name of the map
	this.title = "";
	// creator user id
	this.author = "";

	this.grid = 0;
	this.gridColor = "black";

	this.images = {
		bottom: image,
		middle: middle,
		upper: upper
	};
	this.imageLoaded = {
		bottom: false,
		middle: false,
		upper: false
	};
	this.dragging = false;
	this.dragPoint = {
		x: 0,
		y: 0
	};


	//default map terrain (ie. grass, sand, etc...)
	this.terrainTile = 22; //default to 22 which is grass.

	// filling the array of arrays
	this.data = [];
	for (var j = 0; j < this.height; j++) {
		this.data[j] = [];
		for (var i = 0; i < this.width; i++) {
			var obj = {};
			obj.tile = this.terrainTile;
			this.data[j][i] = obj;
		}
	}

	// there has to be a better way :(
	var obj = this // this is a global object so that the draw function can see our variables

	//make sure image is loaded
	this.images.bottom.onload = function() {
		obj.imageLoaded.bottom = true;
		obj.draw();
	}

	if (typeof middle != "undefined") {
		this.images.middle = middle;
		this.images.middle.onload = function() {
			obj.imageLoaded.middle = true;
			obj.draw();
		}
	}

	if (typeof upper != "undefined") {
		this.images.upper.onload = function() {
			obj.imageLoaded.upper = true;
			obj.draw();
		}
	}
}

var newTempEvt;

//default terrain functions
Map.prototype.setDefaultTerrain = function(terrain) {
	if (terrain > 0 && terrain < 38) {
		this.terrainTile = terrain;
	}

}

//return default terrain
Map.prototype.getDefaultTile = function() {
	return this.terrainTile;
}

// updater function for global object
Map.prototype.update = function() {
	obj = null;
	obj = this;
}

Map.prototype.loadMap = function(map) {
	this.title = map.title;
	this.author = map.author;
	this.width = map.width;
	this.height = map.height;
	this.env = map.env;
	this.pixelWidth = this.width * 40;
	this.pixelHeight = this.height * 40;

	for (var j = 0; j < this.height; j++) {
		this.data[j] = [];
		for (var i = 0; i < this.width; i++) {
			var obj = {};
			obj.tile = map.data.bottom[j][i];
			obj.middle = map.data.middle[j][i];
			obj.upper = map.data.top[j][i];
			this.data[j][i] = obj;
		}
	}

	console.dir(map);
	console.dir(this.data);

	this.centerMap();
};

Map.prototype.drawTile = function(x, y, color) {

	var grid = this.grid;
	var color = this.gridColor;

	if (typeof this.data[y][x].select != undefined && this.data[y][x].select == true) {

		console.log('drawing selected tile');
		grid = 3;
		color = this.data[y][x].selectColor;
	}

	var divider = 8; // number of tiles in a row
	var tileSize = 40;
	var destX = this.x + ((this.pixelWidth / this.width) * x);
	var destY = this.y + ((this.pixelHeight / this.height) * y);
	var destWidth = this.pixelWidth / this.width - grid;
	var destHeight = this.pixelHeight / this.height - grid;

	if (this.isInCanvas({
		x: destX,
		y: destY,
		height: destHeight,
		width: destWidth
	})) {

		// draw bottom layer
		if (this.imageLoaded.bottom) {
			this.context.drawImage(
				this.images.bottom, // the image we are croping to get our tile
				((this.data[y][x].tile % divider) * tileSize), (Math.floor(this.data[y][x].tile / divider) * tileSize),
				tileSize, tileSize, // the height and width of our crop in relation to the tile image
				destX + (grid / 2), destY + (grid / 2), // the x and y location we will be placing the cropped image on the canvas
				destWidth - grid, destHeight - grid // the final height and width of our tile that will be drawn on the canvas
			);
		}
		// draw middle layer
		if (this.imageLoaded.middle) {
			this.context.drawImage(
				this.images.middle, // the image we are croping to get our tile
				((this.data[y][x].middle % divider) * tileSize), (Math.floor(this.data[y][x].middle / divider) * tileSize), // the x and y location we will crop in relation to the tile image
				tileSize, tileSize, // the height and width of our crop in relation to the tile image
				destX + (grid / 2), destY + (grid / 2), // the x and y location we will be placing the cropped image on the canvas
				destWidth - grid, destHeight - grid // the final height and width of our tile that will be drawn on the canvas
			);
		}

		// draw upper layer
		if (this.imageLoaded.upper) {
			this.context.drawImage(
				this.images.upper, // the image we are croping to get our tile
				((this.data[y][x].upper % divider) * tileSize), (Math.floor(this.data[y][x].upper / divider) * tileSize), // the x and y location we will crop in relation to the tile image
				tileSize, tileSize, // the height and width of our crop in relation to the tile image
				destX + (grid / 2), destY + (grid / 2), // the x and y location we will be placing the cropped image on the canvas
				destWidth - grid, destHeight - grid // the final height and width of our tile that will be drawn on the canvas
			);
		}

		if (grid > 0) {
			this.context.beginPath(); // telling the canvas that we are starting a draw of something
			this.context.rect(
				destX, destY, // x and y position of the rectangle
				destWidth, destHeight // the height and width of the rectangle
			);
			this.context.lineWidth = grid; // the thickness of the rectangle
			this.context.strokeStyle = color; // the color of the rectangle
			this.context.stroke(); // draw the rectangle
		}
	}

}

// this function will draw it to the screen
Map.prototype.draw = function() {
	// setting canvas demensions
	this.context.width = this.canvas.width;
	this.context.height = this.canvas.height;
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clearing out the canvas       


	// cycle through the tiles one at a time to crop them from the tile image.
	for (var j = 0; j < this.height; j++) {
		for (var i = 0; i < this.width; i++) {
			this.drawTile(i, j);
		}
	}

};

Map.prototype.centerMap = function() {
	var x = this.canvas.width / 2;
	var y = this.canvas.height / 2;

	this.x = x - this.pixelWidth / 2;
	this.y = y - this.pixelHeight / 2;
}

Map.prototype.shrinkHeight = function(height) {
	console.log('my height: ' + this.height + " shrinking to: " + height);
	var diff = this.height - height;
	this.data.splice(height, diff);
	this.pixelHeight -= (this.pixelHeight / this.height) * (this.height - height);
	this.height = height;
}

Map.prototype.growHeight = function(height) {
	console.log('my height: ' + this.height + " growing to: " + height);
	for (var i = this.height; i < height; i++) {
		this.data[i] = []; // make new array
		for (var j = 0; j < this.width; j++) {
			this.data[i][j] = {};
			this.data[i][j].tile = this.terrainTile;
		};
	};
	this.pixelHeight += (this.pixelHeight / this.height) * (height - this.height);
	this.height = height;
}

Map.prototype.shrinkWidth = function(width) {
	console.log('my width: ' + this.width + " shrinking to: " + width);
	var diff = this.width - width;
	for (var i = 0; i < this.height; i++) {
		this.data[i].splice(width, diff);
	};
	this.pixelWidth -= (this.pixelWidth / this.width) * diff;
	this.width = width;
}

Map.prototype.growWidth = function(width) {
	console.log('my width: ' + this.width + " growing to: " + width);
	for (var i = 0; i < this.height; i++) {
		for (var j = this.width; j < width; j++) {
			this.data[i][j] = this.terrainTile;
			this.data[i][j] = {};
			this.data[i][j].tile = this.terrainTile;
		};
	};
	this.pixelWidth += (this.pixelWidth / this.width) * (width - this.width);
	this.width = width;
}

//Event adder function
//catches events and changes the mouse. Waits for mouse to send the event.


Map.prototype.resize = function(width, height) {
	console.log('current: x:' + this.width + " y:" + this.height)
	console.log("going to x:" + width + " y:" + height);
	console.log(this.data);

	width = parseInt(width);
	height = parseInt(height);

	if (height > this.height) {
		this.growHeight(height);
	} else if (height < this.height) {
		this.shrinkHeight(height);
	}

	if (width > this.width) {
		this.growWidth(width);
	} else if (width < this.width) {
		this.shrinkWidth(width);
	}
	console.log(this.data);
	this.centerMap();
	this.draw();
}

Map.prototype.fill = function(tile) {

	for (var j = 0; j < this.height; j++) {
		for (var i = 0; i < this.width; i++) {
			this.data[j][i].tile = tile;
		}
	}
}

Map.prototype.getMap = function() {

	var mapData = {
		bottom: [],
		middle: [],
		top: [],
		events: []
	};

	for (var j = 0; j < this.height; j++) {
		mapData.bottom[j] = [];
		mapData.middle[j] = [];
		mapData.top[j] = [];
		for (var i = 0; i < this.width; i++) {
			mapData.bottom[j][i] = this.data[j][i].tile;
			mapData.middle[j][i] = this.data[j][i].middle;
			mapData.top[j][i] = this.data[j][i].upper;

			if (mapData.bottom[j][i] == null) {
				mapData.bottom[j][i] = -1;
			};
			if (mapData.middle[j][i] == null) {
				mapData.middle[j][i] = -1;
			};
			if (mapData.top[j][i] == null) {
				mapData.top[j][i] = -1;
			};
		}
	}

	return {
		title: this.title,
		author: this.author,
		width: this.width,
		height: this.height,
		x: 0,
		y: 0,
		data: mapData,
		env: this.env,
	}
};

Map.prototype.getImage = function() {
	console.log("creating map image");
	temp = {
		height: this.canvas.height,
		width: this.canvas.width,
		x: this.x,
		y: this.y
	};

	this.canvas.width = this.pixelWidth;
	this.canvas.height = this.pixelHeight;
	this.x = 0;
	this.y = 0;

	this.draw();

	var thumb = this.canvas.toDataURL();

	this.canvas.width = temp.width;
	this.canvas.height = temp.height;
	this.x = temp.x;
	this.y = temp.y;

	this.draw();

	console.dir(thumb);
	return thumb;
}

Map.prototype.getMousePos = function(evt) {
	var rect = this.canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
};

Map.prototype.isOverMap = function(mousePos) {
	if ((mousePos.x < this.x || mousePos.x > this.x + this.pixelWidth) || (mousePos.y < this.y || mousePos.y > this.y + this.pixelHeight)) {
		return false;
	} else {
		console.log('over map!')
		return true;
	}
};

// why did you add this function??? its the same as isOverMap?????
Map.prototype.isOverMapXY = function(mousePosX, mousePosY) {
	if ((mousePosX < this.x || mousePosX > this.x + this.pixelWidth) || (mousePosY < this.y || mousePosY > this.y + this.pixelHeight)) {
		return false;
	} else {
		console.log('over map!')
		return true;
	}
};

Map.prototype.boundsCheck = function(x, y) {
	return (x >= 0 && x < this.width) && (y >= 0 && y < this.height)
}

Map.prototype.isInCanvas = function(obj) {
	if ((obj.x < this.canvas.width && obj.x > 0 - obj.width) && (obj.y < this.canvas.height && obj.y > 0 - obj.height)) {
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
	if (this.isOverMap(mousePos)) {
		// return tile location
		var tileX = Math.floor((mousePos.x - this.x) / Math.floor(this.pixelWidth / this.width));
		var tileY = Math.floor((mousePos.y - this.y) / Math.floor(this.pixelHeight / this.height));
		//console.log('tile x:' + tileX + ' y:' + tileY);
		return {
			x: tileX,
			y: tileY
		};
	} else {
		console.log('no tile');
		return null

	}
};

Map.prototype.getTile = function(evt, layer) {
	if (typeof layer == "undefined") {
		layer = "bottom";
	}

	var tilePos = this.getTilePos(evt)
	var tile = null;
	switch (layer) {
		case "bottom":
			tile = this.data[tilePos.y][tilePos.x].tile;
			break;
		case "middle":
			tile = this.data[tilePos.y][tilePos.x].middle;
			break;
		case "upper":
			tile = this.data[tilePos.y][tilePos.x].upper;
			break;
	}
	return tile;
}

Map.prototype.getxyTile = function(x, y, layer) {
	if (typeof layer == "undefined") {
		layer = "bottom";
	}
	var tile = null;
	switch (layer) {
		case "bottom":
			tile = this.data[y][x].tile;
			break;
		case "middle":
			tile = this.data[y][x].middle;
			break;
		case "upper":
			tile = this.data[y][x].upper;
			break;
	}
	return tile;
};

Map.prototype.addEventArr = function(evtObj)
{
	this.events.push(evtObj);

}


// this function will change the selected tile and redraw
Map.prototype.changeTile = function(x, y, tile, layer) {
	console.log('change tile: '+ tile + ' !!!!!!!!!!!!!!');
	if (typeof layer == "undefined") {
		layer = "bottom";
	}
	var beforeChange = null;

	switch (layer) {
		case "bottom":
			beforeChange = this.data[y][x].tile;
			break;
		case "middle":
			beforeChange = this.data[y][x].middle;
			break;
		case "upper":
			beforeChange = this.data[y][x].upper;
			break;
	}

	if (beforeChange != tile) {
		var obj = this;

		this.setTile(x, y, tile, layer)
		this.drawTile(x, y);



		this.undoManager.add({
			undo: function() {
				console.dir(obj);
				obj.setTile(x, y, beforeChange, layer);
				obj.drawTile(x, y);
			},
			redo: function() {
				obj.setTile(x, y, tile, layer);
				obj.drawTile(x, y);
			}
		})
	}
};

Map.prototype.setTile = function(x, y, tile, layer) {
	console.log('setting tile to:' + tile + ' on layer:' + layer);
	switch (layer) {
		case "bottom":
			this.data[y][x].tile = tile;
			break;
		case "middle":
			this.data[y][x].middle = tile;
			break;
		case "upper":
			this.data[y][x].upper = tile;
			break;
	}
}

// this function will change the selected tile and redraw
Map.prototype.selectTile = function(x, y, color) {
	console.log('selecting tile x:' + x + ' y:' + y);

	if (typeof color == undefined) {
		this.data[y][x].selectColor = "black";
	} else {
		this.data[y][x].selectColor = color;
	}

	this.data[y][x].select = true;
	this.draw();
};

Map.prototype.unselectTile = function(x, y) {
	delete this.data[y][x].select;
	delete this.data[y][x].selectColor;
	this.draw();
};

Map.prototype.drag = function(evt) {

	var mousePos = {
		x: evt.clientX,
		y: evt.clientY
	};


	if (this.dragging == false && this.isOverMap(mousePos)) {
		this.dragPoint = {
			x: (mousePos.x - this.x),
			y: (mousePos.y - this.y)
		};
		this.dragging = true;
	}

	if (this.dragging == true) {
		this.x = mousePos.x - (this.dragPoint.x);
		this.y = mousePos.y - (this.dragPoint.y);
		this.draw();
	}

};


Map.prototype.dragStart = function(evt) {
	if (this.dragging == false) {
		var mapObj = this;
		$(this.canvas).mousemove(function(e) {
			mapObj.drag(e)
		});
	}
}

Map.prototype.dragEnd = function(evt) {
	this.dragging = false;
	$(this.canvas).off('mousemove');
}