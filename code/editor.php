
<!DOCTYPE html>
<html>
    <head>
        <title>ZombieAttack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">

        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
        
        <!-- including map class -->
        <script src="public/js/map.js"></script>
        <script src="public/js/tileBrowser.js"></script>
    </head>

    <body>
        <!--  adding the navbar to the page and selecting current tab-->
        <?php include("views/mapEditor/butBar.php"); ?>
        <!--  adding the tile browser-->
        <?php include("views/mapEditor/tileBrowser.php"); ?>

        <div style="width: 100%;" oncontextmenu="return false" class="unselectable">
            <canvas id='myCanvas' width='900' height='650' style="border: 1px black solid; "></canvas>
        </div>

        <div class="container unselectable" >
        	<!--create canvas -->
            
            <script type="text/javascript">


            // just a sample object
                var map = {
                    title: "test map map",
                    author: "dosmun",
                    width: 15,
                    height: 15,
                    x: 50,
                    y: 20,
                    data: {
                        bottom: [
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22, 0, 8,16,22,22,22,22,22,22,22,22,22,22,22],
                        [22, 1, 9, 8,16,22,22,22,22,22,22,22,22,22,22],
                        [22, 1, 9, 9,17,22,22,22,22,22,22,22,22,22,22],
                        [22, 2, 0, 9, 8,16,22,22,22,22,22,22,22,22,22],
                        [22,22, 1, 9, 9, 8, 8,16,22,22,22,22,22,22,22],
                        [22,22, 2, 4, 9, 9, 9, 8,16,22,22,22,22,22,22],
                        [22,22,22, 2,10, 4, 9, 9, 8,16,22,22,22,22,22],
                        [22,22,22,22,22, 2, 4, 9, 9,17,22,22,22,22,22],
                        [22,22,22,22,22,22, 2, 4, 9,17,22,22,22,22,22],
                        [22,22,22,22,22,22,22, 2,10,18,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22]
                        ],
                        middle:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
                        top:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
                    },
                    events: [],
                    env: "normal"
                };


                // load tiles image
                var tiles = new Image()
                tiles.src = 'public/img/tiles.png';

                tileBrowser = new TileBrowser( $('#myTileBrowser')[0], tiles, 6, 8);
                tileBrowser.pixelWidth = $('#myTileBrowser')[0].width;
                tileBrowser.pixelHeight = $('#myTileBrowser')[0].height;
                tileBrowser.draw();

                var click1 = 0;
                var click2 = 1;

                $('#myTileBrowser').mousedown(function(evt){

                    if( evt.which == 1){
                        click1 = tileBrowser.getTile(evt);
                    }
                    if ( evt.which == 3){
                       click2 = tileBrowser.getTile(evt); 
                    }
                })


                // load tiles image
                var tiles2 = new Image()
                tiles2.src = 'public/img/tiles.png';

                 // create map object pass canvase and tiles image  
                myMap = new Map( document.getElementById('myCanvas'), tiles2);
                myMap.loadMap(map);
                myMap.draw();

                tileBrowser.draw();




                // important makes pixel ratio
                var resize=function(){
                    document.getElementById('myCanvas').width =window.innerWidth;
                    document.getElementById('myCanvas').height =window.innerHeight-110;
                    myMap.x = (window.innerWidth/2)-(myMap.pixelWidth/2);
                    myMap.draw();

                };

                window.onresize = resize;
                resize();


                // stuff like this would go in the button.js class
                document.getElementById('butBar-showGrid').onclick = function(){
                    console.log('grid');
                    if (myMap.grid != 0){
                        // use bootstrap to put a checkmark by it
                        document.getElementById('butBar-showGrid').setAttribute("class", "");
                        myMap.grid = 0; 
                    } else {
                        // use bootstrap to put a checkmark by it
                        document.getElementById('butBar-showGrid').setAttribute("class", "glyphicon glyphicon-ok");
                        myMap.grid = .7;  
                    }
                    myMap.draw();
                }

                // stuff like this would go in the mouse class
                $('#myCanvas').mousedown(function(evt){
                    $('#myCanvas').mousemove(function(evt){

                        // if statement ot checkif its the left mouse button
                        if (evt.ctrlKey == false){
                            if(evt.which == 1) {
                                // set location of mouse click to click object
                                click = myMap.getTilePos(evt);  
                                // check if we are on map...if we are change tile
                                if (click != null) { 
                                    // pass is location x and y and the tile number to change it to
                                    myMap.changeTile(click.x, click.y, click1)
                                }
                            }
                            else if (evt.which == 3 ) {
                                // set location of mouse click to click object
                                click = myMap.getTilePos(evt);  
                                // check if we are on map...if we are change tile
                                if (click != null) { 
                                    myMap.changeTile(click.x, click.y, click2)
                                }
                            }
                            // redraw map so we can see changes
                            myMap.draw();
                        }

                    });
                });

                
                /// testing draging map only works with spacebar held down

                function getMousePos(canvas, evt) {
                    var rect = canvas.getBoundingClientRect();
                    return {
                        x: evt.clientX - rect.left,
                        y: evt.clientY - rect.top
                    };
                }

                var move = function(evt) {
                   myMap.drag(evt);
                }

                var spacebar = false;
                // add listner when spacebar is pressed down

                $('#myCanvas').mousedown(function(evt){
                    console.log('MOUSEBUTTON: ' + evt.which);
                    if (evt.ctrlKey == true){
                        if (evt.which == 1) {  myMap.dragStart();  }   
                    }
                });


                $('#myCanvas').mouseup(function(evt){
                    if (evt.which == 1) {  myMap.dragEnd(); }   
                });
                // add listner when spacebar is pressed down

                $(window).keypress(function(evt){
                    console.log('key: ' + evt.which);
                    var change = 5;
                    if (evt.which == 43 || evt.which == 61){
                        
                        myMap.pixelWidth += myMap.width*change;
                        myMap.pixelHeight += myMap.height*change;
                        myMap.x -= change/2;
                        myMap.y -= change/2;
                        myMap.draw();
                    }
                    else if (evt.which == 45){
                        myMap.pixelWidth -= myMap.width*change;
                        myMap.pixelHeight -= myMap.height*change;
                        myMap.x += change/2;
                        myMap.y += change/2;
                        myMap.draw();
                    }
                });


            </script>

        </div>

        </div>

        <!--  adding the navbar to the page and selecting current tab-->
        <?php include("views/templates/footer.php"); ?>

        <!--  adding the toolbar-->
        <?php include("views/mapEditor/toolBar.php"); ?>

        <script src="public/js/slider.js"></script>

            <!-- selecting current tab-->
        <script type="text/javascript"> 
            $('#navbar-designer').addClass("active");   
        </script>
    </body>
	
</html>