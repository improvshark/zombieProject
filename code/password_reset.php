
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
        <?php 
        include("views/navbar.php"); 

		// include the PHPMailer library
		require_once("libraries/PHPMailer.php");

		// ask for the different states:
		if ($login->passwordResetLinkIsValid() == true) {
		    // the user just came to our page by the URL provided in the password-reset-mail and all data is valid
		    // so we show the type-your-new-password form
		    include("views/password_reset_new_password.php");

		} elseif ($login->passwordResetWasSuccessful() == true) {
		    // the user has just successfully entered a new password
		    // so we show the index page = the login page
		    include("views/not_logged_in.php");

		} else {
		    // no data from a password-reset-mail has been provided, so we simply show the request-a-password-reset form
		    include("views/password_reset_request.php");
		}


        
        //<!--  adding the navbar to the page and selecting current tab-->
        include("views/footer.php"); 
        ?>

        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
    </body>
</html>







<?php
