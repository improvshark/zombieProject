
<!DOCTYPE html>
<html>
    <head>
        <title>ZombieAttack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">
        <script src="public/js/map.js"></script>
    </head>

    <body>
    <!--  adding the navbar to the page and selecting current tab-->
    <?php include("views/navbar.php"); ?>

        <div class="container">
            <canvas id='myCanvas' width='900' height='600' style="border: 1px black solid"></canvas>
            <script type="text/javascript">

          
                myMap = new Map( document.getElementById('myCanvas') );
                myMap.draw();


            


            </script>
        </div>

        <!--  adding the navbar to the page and selecting current tab-->
        <?php include("views/footer.php"); ?>
 
        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
            <!-- selecting current tab-->
        <script type="text/javascript"> 
            $('#navbar-designer').addClass("active");   
        </script>
    </body>
	
</html>















