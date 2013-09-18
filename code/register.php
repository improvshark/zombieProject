<!DOCTYPE html>

<?php

	// checking for minimum PHP version
	if (version_compare(PHP_VERSION, '5.3.7', '<')) {
	    exit("Sorry, Simple PHP Login does not run on a PHP version smaller than 5.3.7 !");
	} else if (version_compare(PHP_VERSION, '5.5.0', '<')) {
	    // if you are using PHP 5.3 or PHP 5.4 you have to include the password_api_compatibility_library.php
	    // (this library adds the PHP 5.5 password hashing functions to older versions of PHP)
	    require_once("libraries/password_compatibility_library.php");
	}

	// include the config
	require_once("config/config.php");

	// include the PHPMailer library
	require_once("libraries/PHPMailer.php");

	//load the registration class
	require_once("classes/Registration.php");

	// create the registration object. when this object is created, it will do all registration stuff automatically
	// so this single line handles the entire registration process.
	$registration = new Registration();
?>

<html>
    <head>
        <title>ZombieAttack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">

    </head>

    <body>
    <!--  adding the navbar to the page-->
    <?php 
    	include("views/navbar.php"); 
		
    ?>





    <div class="container"> 


	<!--  showing the register view (with the registration form, and messages/errors -->
	<?php include("views/register.php"); ?>
        
    </div>




        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>

    </body>
</html>

