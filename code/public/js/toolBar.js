 function ToolBar(canvas, image, height, width){
 	Map.apply(this, arguments); // important
	this.grid = 3;

	// filling the map
	this.data = [];
	var count = 0;
    for (var j = 0; j < this.height; j++) {
    	var obj = {};
    	obj.tile = count;
    	this.data[j] = [];
        this.data[j][0] = obj;
        count += 8;
    }

}


ToolBar.prototype = new Map(); // inherit map
ToolBar.prototype.constructor = ToolBar; // set correct constructor

