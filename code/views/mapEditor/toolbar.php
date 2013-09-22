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

<div class="navbar  navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <!-- <a href="index.php" class="navbar-brand">ZombieAttack</a> -->
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
            <ul class="nav navbar-nav">

                <li id="toolbar-file" class="dropdown">
                    <a href="" class="" data-toggle="dropdown"> File </a>
                    <ul class="dropdown-menu">
                        <li><a id="toolbar-new" class="" href="#">New</a></li>
                        <li><a id="toolbar-open" class="" href="#">Open</a></li>
                        <li><a id="toolbar-save" class="" href="#">Save</a></li>
                        <li><a id="toolbar-download" class="" href="#">Download</a></li>
                        <li><a id="toolbar-close" class="" href="index.php"> Close</a></li>
                        <li><a id="toolbar-exit" class="" href="index.php"> Exit</a></li>
                    </ul>
                </li>

                <li id="toolbar-edit" class="dropdown">
                    <a href="" class="" data-toggle="dropdown"> Edit </a>
                    <ul class="dropdown-menu">
                        <li><a id="toolbar-undo" class="" href="#">Undo</a></li>
                        <li><a id="toolbar-redo" class="" href="#">Redo</a></li>
                        <li><a id="toolbar-cut" class="" href="#">Cut</a></li>
                        <li><a id="toolbar-copy" class="" href="#">Copy</a></li>
                        <li><a id="toolbar-paste" class="" href="#">Paste</a></li>
                        <li><a id="toolbar-Select All" class="" href="#">Select All</a></li>
                        <li><a id="toolbar-delete" class="" href="#">Delete</a></li>
                        <li><a id="toolbar-preferences" class="" href="#">Preferences</a></li>
                    </ul>
                </li>

                <li id="toolbar-view" class="dropdown">
                    <a href="" class="" data-toggle="dropdown"> View </a>
                    <ul class="dropdown-menu">
                        <li><a id="toolbar-zoom" class="" href="#">Zoom</a></li>
                        <li><a id="toolbar-showGrid" class="" href="#">Show Grid</a></li>
                    </ul>
                </li>

                <li id="toolbar-tools" class="dropdown">
                    <a href="" class="" data-toggle="dropdown"> Tools </a>
                    <ul class="dropdown-menu">
                        <li><a id="toolbar-fill" class="" href="#">Fill</a></li>
                        <li><a id="toolbar-playTest" class="" href="#">Play Test</a></li>
                    </ul>
                </li>
                <li id="toolbar-windows" class="dropdown">
                    <a href="" class="" data-toggle="dropdown"> Windows </a>
                    <ul class="dropdown-menu">
                        <li><a id="toolbar-toolbox" class="" href="#">Toolbox</a></li>
                        <li><a id="toolbar-palette" class="" href="#">Palette</a></li>
                        <li><a id="toolbar-miniMap" class="" href="#">Mini map</a></li>
                        <li><a id="toolbar-events" class="" href="#">Events</a></li>
                    </ul>
                </li>

            </ul>
            <ul class="nav navbar-nav navbar-right">

            <?php
                // ... ask if we are logged in here:
                if ($login->isUserLoggedIn() == true) {
                    // the user is logged in. you can do whatever you want here.
                    // for demonstration purposes, we simply show the "you are logged in" view.
                    include("views/templates/logged_in.php");
                } else {
                    // the user is not logged in. you can do whatever you want here.
                    // for demonstration purposes, we simply show the "you are not logged in" view.
                    include("views/templates/not_logged_in.php");
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


