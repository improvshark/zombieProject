 function TileBrowser(canvas, image, height, width){
 	Map.apply(this, arguments); // important
	this.grid = 1;

    this.rightClick = {x: null, y: null};
    this.leftClick = {x: null, y: null};

	// filling the map
	this.data = [];
	var count = 0;
    for (var j = 0; j < this.height; j++) {
    	this.data[j] = [];
        for (var i = 0; i < this.width; i++) {
        	var obj = {};
            obj.tile = count;
            this.data[j][i] = obj;
        	count += 1;
        }
    }

}


TileBrowser.prototype = new Map(); // inherit map
TileBrowser.prototype.constructor = TileBrowser; // set correct constructor

TileBrowser.prototype.selectRight = function(x, y){
    this.selectTile(x, y, "#62c462");

    if( (this.rightClick.x != null && this.rightClick.y != null))  {

        this.unselectTile(this.rightClick.x, this.rightClick.y);
    }

    this.rightClick.x = x;
    this.rightClick.y = y;
};

TileBrowser.prototype.selectLeft = function(x, y){
    this.selectTile(x, y, "#5bc0de");

    if( this.leftClick.x != null && this.leftClick.y != null){
        this.unselectTile(this.leftClick.x, this.leftClick.y);
    }
    
    this.leftClick.x = x;
    this.leftClick.y = y;
};
