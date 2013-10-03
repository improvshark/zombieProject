
<!DOCTYPE html>
<html>
    <head>
        <title>ZombieAttack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">

    </head>

    <body>
    <!--  adding the navbar to the page and selecting current tab-->
    <?php include("views/templates/header.php"); ?>

        <div class="container">
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

                } else {
                    // the user is not logged in. you can do whatever you want here.
                    // for demonstration purposes, we simply show the "you are not logged in" view.
                    echo "<h1>dev only page</h1>";
                    echo "
                            <div class='alert alert-dismissable alert-danger '>
                                <button type='button' class='close' data-dismiss='alert'>&times;</button>
                                <strong>Warning! </strong>You do not have privlages to view this page!
                            </div>
                        ";
                }//comment by mario
            ?>
        </div>

        <!--  adding the navbar to the page and selecting current tab-->
        <?php include("views/templates/footer.php"); ?>
 
        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
            <!-- selecting current tab-->
        <script type="text/javascript"> 
            $('#navbar-designer').addClass("active");   
        </script>
    </body>
	
</html>















