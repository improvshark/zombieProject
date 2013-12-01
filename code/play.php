<!DOCTYPE html>
<html>
    <head>
        <title>ZombieAttack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">
        <script src="public/js/ajax.js"></script>
        <script src="public/js/mapBrowser/mapBrowser.js"></script>
    </head>

    <body>
    <!--  adding the navbar to the page and selecting current tab-->
    <?php include("views/templates/header.php"); ?>

    <div class="container"> 

        <?php
        // ... ask if we are logged in here:
        if ($login->isUserLoggedIn() == true ) { 
            require_once("classes/Maps.php");
            $maps = new Maps();
        ?>
                

        <?php include("views/play/maps.php"); ?>


        <?php
            } else {
                include("login.php");
            }
        ?>
    </div>

        <!--  adding the navbar to the page and selecting current tab-->
        <?php include("views/templates/footer.php"); ?>
        <?php include("views/admin/modals.php"); ?>

        <script src="public/js/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
            <!-- selecting current tab-->
        <script type="text/javascript"> 
            $('#navbar-maps').addClass("active");   
        </script>

    </body>
</html>





