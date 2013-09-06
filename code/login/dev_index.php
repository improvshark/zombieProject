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
        <div class="jumbotron">
            <h1>Are you ready to kill some zombies?</h1>
            <p>Its time to survive. 
            <a  <?php if ($login->isUserLoggedIn() == false) { echo "href='register.php'"; } else { echo "href='register.php?logout'"; } ?> class="btn btn-success btn-lg">Join now</a></p>
        </div>
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




<?php

// ... ask if we are logged in here:
if ($login->isUserLoggedIn() == true and ($login->isDeveloper() or $login->isAdmin()) ) {
    // the user is logged in. you can do whatever you want here.
    // for demonstration purposes, we simply show the "you are logged in" view.
    if ($login->isAdmin()){
        echo "<h1>You are an Admin and a Developer</h1>";
    }
    else {
        echo "<h1>You are a Developer</h1>";
    }
    include("views/logged_in.php");

} else {
    // the user is not logged in. you can do whatever you want here.
    // for demonstration purposes, we simply show the "you are not logged in" view.
    echo "<h1>dev only page</h1>";
}
