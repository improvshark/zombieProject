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
    <?php include("views/navbar.php"); ?>

    <div class="container"> 

        <?php
        // ... ask if we are logged in here:
        if ($login->isUserLoggedIn() == true and $login->isAdmin()  ) { 
            require_once("classes/Admin.php");
            $admin = new Admin();
        ?>
                


            <div class="row col-md-12 ">
                <ul id="myTab" class="nav nav-tabs ">
                    <li class="active"><a class="glyphicon glyphicon-user" href="#users" data-toggle="tab"> Users</a></li>
                    <li class=""><a class="glyphicon glyphicon-picture" href="#profile" data-toggle="tab"> Maps</a></li>
                </ul>

                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="users">
                        <?php include("views/admin/user_table.php"); ?>
                    </div>
                    <div class="tab-pane fade" id="profile">
                        <p>
                            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, 
                            blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, 
                            commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic
                            magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum
                            wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester 
                            stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
                        </p>
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
        <?php include("views/footer.php"); ?>

        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
            <!-- selecting current tab-->
        <script type="text/javascript"> 
            $('#navbar-admin').addClass("active");   
        </script>

    </body>
</html>





