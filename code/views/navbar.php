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

        <style>
            body {
                padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
            }
        </style>

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
            <li class="#" id="navbar-play"> <a href="#">Play</a> </li>
            <li class="" id="navbar-maps"><a href="#">Maps</a></li>

                <?php 
				if ($login->isUserLoggedIn() == true and ($login->isDeveloper() or $login->isAdmin()) ) { ?>
					<li id="navbar-designer" class="dropdown">
						<a href="" class="dropdown-toggle glyphicon glyphicon-pencil" data-toggle="dropdown"> Designer</a>
						<ul class="dropdown-menu">
							<li><a class="glyphicon glyphicon-briefcase" href="editor.php"> Editor</a></li>
							<li><a class="glyphicon glyphicon-picture" href="dev_index.php"> Maps</a></li>
						</ul>
					</li>
			     <?php
				}
				if ($login->isUserLoggedIn() == true and $login->isAdmin() ) { ?>
					<li id="navbar-admin"><a class="glyphicon glyphicon-list-alt" href="admin_index.php"> Admin</a></li>
                <?php
				}
                ?>
          </ul>
            <ul class="nav navbar-nav navbar-right">

            <?php
                // ... ask if we are logged in here:
                if ($login->isUserLoggedIn() == true) {
                    // the user is logged in. you can do whatever you want here.
                    // for demonstration purposes, we simply show the "you are logged in" view.
                    include("logged_in.php");
                } else {
                    // the user is not logged in. you can do whatever you want here.
                    // for demonstration purposes, we simply show the "you are not logged in" view.
                    include("not_logged_in_mini.php");
                }

            ?>
            </ul>

        </div>
      </div>
    </div>

    <!--alert area -->
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
                    <div class='alert alert-dismissable alert-info'>
                        <button type='button' class='close' data-dismiss='alert'>&times;</button>
                        $message
                    </div>
                ";
            }
        }
      ?>
    </div>


