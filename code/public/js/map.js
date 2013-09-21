function Map(newCanvas) {

	var canvas = newCanvas;
	var context = canvas.getContext('2d');

	console.log('just map object with:' +canvas);
	this.height = 10;
	this.width = 10;
	this.x = 10;
	console.log(this.x);
	this.y = 10;
	this.grid = false
	



	this.sources = {
		darthVader: 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg'
	};


	function loadImages(sources, callback) {
		var images = {};
		var loadedImages = 0;
		var numImages = 0;
		// get num of sources
		for(var src in sources) {
		  numImages++;
		}
		for(var src in sources) {
		  images[src] = new Image();
		  images[src].onload = function() {
		    if(++loadedImages >= numImages) {
		      callback(images);
		    }
		  };
		  images[src].src = sources[src];
		}
	}

	this.draw = function() {
		console.log('drawing');
		console.log('woot ->' +this.x);
		loadImages(this.sources, function(images, ) {
			for (var i = 0; i < this.height; i++) {
			    for (var j = 0; j < this.width; j++) {
			        context.drawImage(images.darthVader, this.x + (40 * i), this.y + (40 * j), 40, 40);
			    }
			}
			context.drawImage(images.darthVader, this.x, 10 , 400, 400);
			console.log(this.x);
		});
	}
}