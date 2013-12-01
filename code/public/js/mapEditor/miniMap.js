 function miniMap(canvas, image, height, width){
 	Map.apply(this, arguments); // important
	this.grid = 0;



	// filling the map


}


miniMap.prototype = new Map(); // inherit map
miniMap.prototype.constructor = miniMap; // set correct constructor


miniMap.prototype.update = function(map){

	console.log('updating map!!')

	this.loadMap(map);
	this.x = 2;
	this.y = 2;
	this.pixelHeight = this.canvas.height-4;
	this.pixelWidth = this.canvas.width-4;

	if(this.width > this.height){
		this.pixelHeight = this.pixelWidth/this.width * this.height;
	}
	else if (this.height > this.width){
		this.pixelWidth = this.pixelHeight/this.height * this.width;
	}

	this.draw();
}
