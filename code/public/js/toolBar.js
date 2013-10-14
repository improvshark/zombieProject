 function ToolBar(canvas, image, height, width){
 	Map.apply(this, arguments); // important
	this.grid = 3;

	// filling the map
	this.data = {bottom: [], middle: [], top: []};
	var count = 0;
    for (var j = 0; j < this.height; j++) {
    	this.data.bottom[j] = [];
        this.data.bottom[j][0] = count;
        count += 8;
    }

}


ToolBar.prototype = new Map(); // inherit map
ToolBar.prototype.constructor = ToolBar; // set correct constructor

