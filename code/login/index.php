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
        <title>Bootstrap 101 Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">
        <style>
            body {
                padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
            }
        </style>
    </head>

    <body>


    <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="index.php" class="navbar-brand">ZombieAttack</a>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <li class="active"> <a href="#">Help</a> </li>
            <li><a href="#">Blog</a></li>
          </ul>
            <ul class="nav navbar-nav navbar-right">

            <?php
                // ... ask if we are logged in here:
                if ($login->isUserLoggedIn() == true) {
                    // the user is logged in. you can do whatever you want here.
                    // for demonstration purposes, we simply show the "you are logged in" view.
                    include("views/logged_in.php");
                } else {
                    // the user is not logged in. you can do whatever you want here.
                    // for demonstration purposes, we simply show the "you are not logged in" view.
                    include("views/not_logged_in_mini.php");
                }
            ?>
            </ul>
        </div>
      </div>
    </div>
    <br>
    <div class="container">
      <?php
        // show negative messages
        if ($login->errors) {
            foreach ($login->errors as $error) {
                echo "
                    <div class='alert alert-dismissable alert-danger '>
                        <button type='button' class='close' data-dismiss='alert'>&times;</button>
                        <strong>Warning! </strong>$error
                     </div>
                ";  
            }
        }

        // show positive messages
        if ($login->messages) {
            foreach ($login->messages as $message) {
            echo "
                    <div class='alert alert-dismissable alert-warning'>
                        <button type='button' class='close' data-dismiss='alert'>&times;</button>
                        <strong>Warning! </strong>$message
                    </div>
                ";
            }
        }
      ?>
    </div>

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








