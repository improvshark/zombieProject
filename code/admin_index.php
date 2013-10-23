<!DOCTYPE html>
<html>
    <head>
        <title>ZombieAttack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="public/css/bootstrap2.css" rel="stylesheet" media="screen">
        <script src="public/js/ajax.js"></script>
        <script src="public/js/admin/admin.js"></script>
    </head>

    <body>
    <!--  adding the navbar to the page and selecting current tab-->
    <?php include("views/templates/header.php"); ?>

    <div class="container"> 

        <?php
        // ... ask if we are logged in here:
        if ($login->isUserLoggedIn() == true and $login->isAdmin()  ) { 
            require_once("classes/Admin.php");
            require_once("classes/Maps.php");
            $admin = new Admin();
            $maps = new Maps();
        ?>
                


            <div class="row col-md-12 ">
                <ul id="myTab" class="nav nav-tabs ">
                    <li class="active"><a class="glyphicon glyphicon-user" href="#users" data-toggle="tab"> Users</a></li>
                    <li class=""><a class="glyphicon glyphicon-picture" href="#profile" data-toggle="tab"> Maps</a></li>
                </ul>

                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="users">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <?php include("views/admin/user_table.php"); ?>
                                

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <?php include("views/admin/mapBrowser.php"); ?>
                            </div>
                        </div>
                    </div>
         
                </div>
            </div>

            <div class="row col-md-12">
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
        <?php
            } else {
                // print an error and redirect to main page after couple of seconds
                echo "<h1>Admin only page</h1>";
                echo "
                        <div class='alert alert-dismissable alert-danger '>
                            <button type='button' class='close' data-dismiss='alert'>&times;</button>
                            <strong>Warning! </strong>You do not have privlages to view this page!
                        </div>
                    ";
            }
        ?>
    </div>

        <!--  adding the navbar to the page and selecting current tab-->
        <?php include("views/templates/footer.php"); ?>
        <?php include("views/admin/modals.php"); ?>

        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
            <!-- selecting current tab-->
        <script type="text/javascript"> 
            $('#navbar-admin').addClass("active");   
        </script>

    </body>
</html>





