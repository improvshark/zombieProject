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

//TOOLBAR FUNCTIONS
//This function changes tool according to the tile selected in the toolbar
$('#myToolBar').mousedown(function(evt){
    var selTool = toolBar.getTile(evt);
    tempTool = tool;
    tool = (selTool/8) ;//+ 1;

    var pos = toolBar.getTilePos(evt);
    toolBar.selectTool(pos.x, pos.y);

})

$(document).keydown(function(evt){
    /*p=80 b=66 e=69 l=76 s=83 f=70*/
    
    if (evt.which == 80){
        tool = 0;
        toolBar.selectTool(0,0);
    }    
    else if (evt.which == 66){
        tool = 1;
        toolBar.selectTool(0,1);
    }
    else if (evt.which == 69){
        tool = 2;
        toolBar.selectTool(0,2);
    }
    else if (evt.which == 76){
        tool = 3;
        toolBar.selectTool(0,3);
    }
    else if (evt.which == 83){
        tool = 4;
        toolBar.selectTool(0,4);
    }
    else if (evt.which == 70){
        tool = 5;
        toolBar.selectTool(0,5);
    }    
})