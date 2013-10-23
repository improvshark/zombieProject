<?php

    // checking for minimum PHP version
    if (version_compare(PHP_VERSION, '5.3.7', '<')) {
        exit("Sorry, Simple PHP Login does not run on a PHP version smaller than 5.3.7 !");
    } else if (version_compare(PHP_VERSION, '5.5.0', '<')) {
        // if you are using PHP 5.3 or PHP 5.4 you have to include the password_api_compatibility_library.php
        // (this library adds the PHP 5.5 password hashing functions to older versions of PHP)
        require_once("../libraries/password_compatibility_library.php");
    }

    // include the configs / constants for the database connection
    require_once("../config/config.php");
    // load the login class
    require_once("../classes/Login.php");
    // Load the admin class
    require_once("../classes/Admin.php");
    require_once("../classes/Maps.php");

    $login = new Login();
    $mapsObj = new Maps();

    $url = "http://zombie-attack.aws.af.cm/uploadMap/" . TOKEN;
    // make sure the user has admin
    if ($login->isUserLoggedIn() == true and $login->isAdmin() ) {
        $admin2 = new Admin();

        if (!empty($_POST['update_usergroup']) ){
            $admin2->editUserGroup();
        }

        if (!empty($_POST['delete_user']) ){
            $admin2->deleteUser();
        }

        if (!empty($_POST['delete_map']) ){
            $mapsObj->deleteMap($_POST['map_id']);
        }




        // alerts
      
            // show negative messages
            if ($admin2->errors) {
                foreach ($admin2->errors as $error) {
                      echo "<div class='row col-sm-9'>";
                    echo "
                        <div class='alert alert-dismissable alert-danger '>
                            <button type='button' class='close' data-dismiss='alert'>&times;</button>
                            <strong>Warning! </strong>$error
                         </div>
                    "; 
                    echo "</div>"; 
                }
            }

            // show positive messages
            if ($admin2->messages) {
                foreach ($admin2->messages as $message) {
                    echo "<div class='row col-sm-9'>";
                    echo "
                        <div class='alert alert-dismissable alert-info'>
                            <button type='button' class='close' data-dismiss='alert'>&times;</button>
                            $message
                        </div>
                    ";
                    echo "</div>";
                }
            }
        
    }
    



    // TODO : put loging protectino so one can only delete his own maps, except for admins !!!!!!!!!

    if (!empty($_POST['send_map']) ) {

        //$map = json_encode($_POST['mapObj']);
        $map = $_POST['mapObj'];
        //open connection
        $ch = curl_init($url);
        // set some settings 
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
        curl_setopt($ch, CURLOPT_POSTFIELDS, $map);                                                                  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($map))                                                                       
        );                                                                                                                   
        // send it off
        $result =  curl_exec($ch);

        // give back result
        echo $result ;
    }
    else if (!empty($_POST['create_map']) ) {
        echo $mapsObj->createMap($_POST['data']); 
    }
    else if (!empty($_POST['saving_map']) ) {
        echo "post: " . (int)$_POST['id'];
        echo $mapsObj->saveMap($_POST['data'], (int )$_POST['id']);
    }


?>