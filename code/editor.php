
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
                    x: 4,
                    y: 4,
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
                // create map object pass canvase and tiles
                console.log(map.data.bottom[1][2])


                // load tiles image
                var tiles = new Image()
                tiles.src = 'public/img/tiles.png'

                myMap = new Map( document.getElementById('myCanvas'), tiles , 10, 10, map.width, map.height);
                myMap.draw();

                document.getElementById('myCanvas').addEventListener('mousedown', function(evt){
                    // if statement ot checkif its the left mouse button
                    if(evt.button == 0) {
                        click = myMap.getMousePos(evt);  
                        if (click != null) { 
                            myMap.changeTile(click.x, click.y, 7)
                        }
                    }
                    else if (evt.button == 2 ) {
                        click = myMap.getMousePos(evt);  
                        if (click != null) { 
                            myMap.changeTile(click.x, click.y, 1)
                        }
                    }
                    

                }, false);

                document.getElementById('myCanvas').on

            


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















