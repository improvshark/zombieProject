
<!DOCTYPE html>
<html>
    <head>
        <title>ZombieAttack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">
        <!-- including map class -->
        <script src="public/js/map.js"></script>
    </head>

    <body>
    <!--  adding the navbar to the page and selecting current tab-->
    <?php include("views/mapEditor/toolbar.php"); ?>

        <div class="container" oncontextmenu="return false">
        	<!--create canvas -->
            <canvas id='myCanvas' width='900' height='650' style="border: 1px black solid"></canvas>
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
               
                console.log(map.data.bottom[1][2])


                // load tiles image
                var tiles = new Image()
                tiles.src = 'public/img/tiles.png'

                 // create map object pass canvase and tiles image  
                myMap = new Map( document.getElementById('myCanvas'), tiles);
                myMap.loadMap(map);
                myMap.draw();

                // stuff like this would go in the button.js class
                document.getElementById('toolbar-showGrid').onclick = function(){
                    console.log('grid');
                    if (myMap.grid != 0){
                        // use bootstrap to put a checkmark by it
                        document.getElementById('toolbar-showGrid').setAttribute("class", "");
                        myMap.grid = 0; 
                    } else {
                        // use bootstrap to put a checkmark by it
                        document.getElementById('toolbar-showGrid').setAttribute("class", "glyphicon glyphicon-ok");
                        myMap.grid = .7;  
                    }
                    myMap.draw();
                }

                // stuff like this would go in the mouse class
                document.getElementById('myCanvas').addEventListener('mousedown', function(evt){
                    // if statement ot checkif its the left mouse button
                    if(evt.button == 0) {
                        // set location of mouse click to click object
                        click = myMap.getTilePos(evt);  
                        // check if we are on map...if we are change tile
                        if (click != null) { 
                            // pass is location x and y and the tile number to change it to
                            myMap.changeTile(click.x, click.y, 7)
                        }
                    }
                    else if (evt.button == 2 ) {
                        // set location of mouse click to click object
                        click = myMap.getTilePos(evt);  
                        // check if we are on map...if we are change tile
                        if (click != null) { 
                            myMap.changeTile(click.x, click.y, 1)
                        }
                    }
                    // redraw map so we can see changes
                    myMap.draw();
                }, false);

                
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

                // add listner when spacebar is pressed down
                window.addEventListener('keydown', function(evt){
                    if (evt.keyCode = 32) {   // space bar
                        myMap.dragStart();
                    }   
                }, false);
                // remove listner when space bar is released
                window.addEventListener('keyup', function(evt){
                    if (evt.keyCode = 32) {   // space bar
                        console.log('spacebar relesed');
                        myMap.dragEnd();
                    }   
                }, false);
        

            </script>
        </div>

        <!--  adding the navbar to the page and selecting current tab-->
        <?php include("views/templates/footer.php"); ?>
 
        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
            <!-- selecting current tab-->
        <script type="text/javascript"> 
            $('#navbar-designer').addClass("active");   
        </script>
    </body>
	
</html>















