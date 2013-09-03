
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
            <li class="active"> <a href="#">Help</a> </li>
            <li><a href="#">Blog</a></li>
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
                    <div class='alert alert-dismissable alert-warning'>
                        <button type='button' class='close' data-dismiss='alert'>&times;</button>
                        <strong>Warning! </strong>$message
                    </div>
                ";
            }
        }
      ?>
    </div>