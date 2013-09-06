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
        if ($login->isUserLoggedIn() == true and $login->isAdmin() ) { 
        require_once("classes/Admin.php");
        $admin = new Admin();
    ?>
            <div class="container"> 

                <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
                    <div class="well sidebar-nav">
                        <ul class="nav">
                            <li>Users</li>
                            <li class="active"><a href="#">UserGroups</a></li>
                            <li><a href="#">Users</a></li>
                            <li><a href="#">Link</a></li>
                            <li>Sidebar</li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                            <li>Sidebar</li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                        </ul>
                    </div>
                </div>

                <!--  adding the navbar to the page-->
                <?php include("views/admin/user_table.php"); ?>

                <div class="col-xs-12 col-sm-9">
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
                
            </div>

    <?php
        } else {
            // print an error and redirect to main page after couple of seconds
            echo "
                    <div class='alert alert-dismissable alert-danger '>
                        <button type='button' class='close' data-dismiss='alert'>&times;</button>
                        <strong>Warning! </strong>You do not have privlages to view this page!
                    </div>
                ";
        }
    ?>


        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>

    </body>
</html>





