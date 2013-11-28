
<!DOCTYPE html>
<html>
    <head>
        <title>ZombieAttack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">

        <script src="public/js/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
    </head>

    <body oncontextmenu="return false" class="unselectable">

        <?php

        // checking for minimum PHP version
        if (version_compare(PHP_VERSION, '5.3.7', '<')) {
            exit("Sorry, Simple PHP Login does not run on a PHP version smaller than 5.3.7 !");
        } else if (version_compare(PHP_VERSION, '5.5.0', '<')) {
            // if you are using PHP 5.3 or PHP 5.4 you have to include the password_api_compatibility_library.php
            // (this library adds the PHP 5.5 password hashing functions to older versions of PHP)
            require_once("libraries/password_compatibility_library.php");
        }

        // include the configs / constants for the database connection
        require_once("config/config.php");

        // load the login class
        require_once("classes/Login.php");

        // create a login object. when this object is created, it will do all login/logout stuff automatically
        // so this single line handles the entire login process. in consequence, you can simply ...
        $login = new Login();

        if (true/*$login->isUserLoggedIn() == true  and ($login->isDeveloper() or $login->isAdmin())*/)  { 
        ?>
            <!--  adding the navbar to the page and selecting current tab-->
            <?php include("views/mapEditor/butBar.php"); ?>

    		<div style="position: relative; top: 8%;" >
                    <!--  adding the tile browser-->
                <?php include("views/mapEditor/tileBrowser.php"); ?>
                <!--  adding the toolbar-->
                <?php include("views/mapEditor/toolBar.php"); ?>      
                  
                <?php include("views/mapEditor/slider.php"); ?> 

                <?php include("views/mapEditor/miniMap.php"); ?>
            <div>
            <div style="width: 100%;" >
                <canvas id='myCanvas' width='900' height='650' style="border: 1px black solid; "></canvas>
            </div>

             <!-- including javascript stuffs -->
            <script src="public/js/ajax.js"></script>
            <script type="text/javascript">
                // passing the user login data via session to the client
               
                var userData = <?php echo json_encode($_SESSION); ?>;

                <?php if (!empty($_POST['mapData']) ) {?>
                    var mapData =   <?php echo $_POST['mapData'];?>.map ;
                    var myMapID = <?php echo $_POST['mapID'];?>;
                <?php } ?>

            </script>
            <script src="public/js/mapEditor/undomanager.js"></script>
            <script src="public/js/mapEditor/map.js"></script>
            <script src="public/js/mapEditor/tileBrowser.js"></script>
    		<script src="public/js/mapEditor/miniMap.js"></script>
            <script src="public/js/mapEditor/toolBar.js"></script>
            <script src="public/js/mapEditor/editor.js"></script>
            <script src="public/js/mapEditor/sliders.js"></script>
            <script src="public/js/mapEditor/keyboardInput.js"></script>
            <script src="public/js/mapEditor/mouseInput.js"></script>
            <script src="public/js/mapEditor/buttons.js"></script>
            <script src="public/js/mapEditor/preferences.js"></script>

            <div class="container unselectable" >
            <!--  adding the navbar to the page and selecting current tab-->
            <?php include("views/templates/footer.php"); ?>
            <?php include("views/mapEditor/modals.php"); ?>
        <?php
        } else {
            include("login.php");
        }
        ?>
            <!-- selecting current tab-->
        <script type="text/javascript"> 
            $('#navbar-designer').addClass("active");   
        </script>
    </body>
	
</html>