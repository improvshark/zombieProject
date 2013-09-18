<!-- this is the Simple sexy PHP Login Script. You can find it on http://www.php-login.net ! It's free and open source. -->

<!-- errors & messages -->



<style type="text/css">
  body {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .form-signin {
    max-width: 300px;
    padding: 19px 29px 29px;
    margin: 0 auto 20px;
    -webkit-border-radius: 5px;
       -moz-border-radius: 5px;
            border-radius: 5px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
       -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
            box-shadow: 0 1px 2px rgba(0,0,0,.05);
  }
  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }
  .form-signin input[type="text"],
  .form-signin input[type="password"] {
    font-size: 16px;
    height: auto;
    margin-bottom: 15px;
    padding: 7px 9px;
  }

</style>

<!-- login form box -->
<div class="container ">
    <form method="post" class="form-signin well" action="index.php" name="loginform">
        <h2 class="form-signin-heading">Please sign in</h2>
        <input id="login_input_username" class="login_input input-block-level" placeholder="Email address" type="text" name="user_name" required /><br/><br/>
        <input id="login_input_password" class="login_input input-block-level" placeholder="Password" type="password" name="user_password" autocomplete="off" required /><br/><br/>
        <input type="checkbox" id="login_input_rememberme" name="user_rememberme" value="1" /> Keep me logged in (for 2 weeks)<br/><br/>
        <input type="submit" class="btn btn-large btn-primary" name="login" value="Sign in" /><br/><br/>
        <a href="register.php">New account /</a>
        <a href="password_reset.php">forgot password</a>
    </form>


</div>



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