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
?>
<!DOCTYPE html>
<html>
    <head>
        <title>ZombieAttack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">

    </head>

    <body>
    <!--  adding the navbar to the page-->
    <?php include("views/navbar.php"); ?>



    <div class="container"> 
            
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h2 class="panel-title">Hello World!</h2>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-lg-6 ">
                        <a href="admin_index.php" >admin test</a>
                    </div>
                    <div class="col-lg-6 ">
                        <a href="dev_index.php" >dev test</a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>




        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>

    </body>
</html>








