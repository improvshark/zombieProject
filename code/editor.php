
<!DOCTYPE html>
<html>
    <head>
        <title>ZombieAttack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">

        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
    </head>

    <body>
        <!--  adding the navbar to the page and selecting current tab-->
        <?php include("views/mapEditor/butBar.php"); ?>
        <!--  adding the tile browser-->
        <?php include("views/mapEditor/tileBrowser.php"); ?>
        <!--  adding the toolbar-->
        <?php include("views/mapEditor/toolBar.php"); ?>

        

        

        <div style="width: 100%;" oncontextmenu="return false" class="unselectable">
            <canvas id='myCanvas' width='900' height='650' style="border: 1px black solid; "></canvas>
        </div>

         <!-- including javascript stuffs -->

        <script src="public/js/map.js"></script>
        <script src="public/js/tileBrowser.js"></script>
        <script src="public/js/toolBar.js"></script>
        <script src="public/js/editor.js"></script>
        <script src="public/js/input.js"></script>
        <script src="public/js/buttons.js"></script>


        <div class="container unselectable" >
        <!--  adding the navbar to the page and selecting current tab-->
        <?php include("views/templates/footer.php"); ?>
        <?php include("views/mapEditor/modals.php"); ?>

            <!-- selecting current tab-->
        <script type="text/javascript"> 
            $('#navbar-designer').addClass("active");   
        </script>
    </body>
	
</html>