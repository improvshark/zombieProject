 function TileBrowser(canvas, image){
 	if (arguments.length == 0) return; // don't do anything
 	Map.apply(this, arguments);

	this.image = image;
	this.height = 8;
	this.width = 8;
	this.grid = 3;
	this.pixelHeight = this.canvas.height;
	this.pixelWidth = this.canvas.width;
	this.x =0;
	this.y =0;

	// filling the map
	this.data = {bottom: [], middle: [], top: []};
	var count = 0;
    for (var j = 0; j < this.height; j++) {
    	this.data.bottom[j] = [];
        for (var i = 0; i < this.width; i++) {
        	
        	this.data.bottom[j][i] = count;
        	count += 1;
        }
    }

}


TileBrowser.prototype = new Map(); // inherit map
TileBrowser.prototype.constructor = TileBrowser; // set correct constructor


TileBrowser.prototype.getTile = function(evt){
	tilePos = this.getTilePos(evt)

	var count = 0;
	for (var i = 0; i < this.width; i++) {
		for (var j = 0; j < this.height; j++) {

			if (tilePos.x == j && tilePos.y == i) {
				console.log('msg: '+ count)
				return count;
			};
			count += 1;			
		};
	};
}
