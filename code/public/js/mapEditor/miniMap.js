 function miniMap(canvas, image, height, width){
 	Map.apply(this, arguments); // important
	this.grid = 1;

	// filling the map


}


miniMap.prototype = new Map(); // inherit map
miniMap.prototype.constructor = miniMap; // set correct constructor

