 function ToolBar(canvas, image, height, width){
 	Map.apply(this, arguments); // important
	this.grid = 3;

    this.tool = {x: null, y: null};
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

ToolBar.prototype.selectTool = function(x, y){
    this.selectTile(x, y, "#ee5f5b");

    if( (this.tool.x != null && this.tool.y != null))  {

        this.unselectTile(this.tool.x, this.tool.y);
    }

    this.tool.x = x;
    this.tool.y = y;
};