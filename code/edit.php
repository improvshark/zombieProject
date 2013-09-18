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

        <?php
            // ... ask if we are logged in here:
            if ($login->isUserLoggedIn() == true) {
                // the user is logged in. you can do whatever you want here.
                // for demonstration purposes, we simply show the "you are logged in" view.
                include("views/edit.php");

            } else {
                // the user is not logged in. you can do whatever you want here.
                // for demonstration purposes, we simply show the "you are not logged in" view.
                include("views/not_logged_in.php");
            }
        ?>
        <!--  adding the footer to the page-->
        <?php include("views/footer.php"); ?>

        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>

    </body>
</html>








