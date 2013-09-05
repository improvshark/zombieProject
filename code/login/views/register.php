<!-- this is the Simple sexy PHP Login Script. You can find it on http://www.php-login.net ! It's free and open source. -->

<!-- errors & messages -->
<div class="container">
    <?php
    // show negative messages
    if ($registration->errors) {
        foreach ($registration->errors as $error) {
            echo "
                <div class='alert alert-dismissable alert-danger '>
                <button type='button' class='close' data-dismiss='alert'>&times;</button>
                <strong>Warning! </strong>$error
                </div>
            ";      
        }
    }

    // show positive messages
    if ($registration->messages) {
        foreach ($registration->messages as $message) {
            echo "
                <div class='alert alert-dismissable alert-info'>
                <button type='button' class='close' data-dismiss='alert'>&times;</button>
                $message
                </div>
            ";
        }
    }
    ?>   
</div>

<?php if (!$registration->registration_successful && !$registration->verification_successful) { ?>

<!-- register form -->
<div class="row">
<div class="col-lg-7">
    <div class="well">
        <form method="post" action="register.php" name="registerform" class="bs-example form-horizontal">
            <fieldset>
                <legend>Register</legend>
                <div class="form-group">
                    <label for="login_input_username" class="col-lg-2 control-label">UserName</label>
                    <div class="col-lg-10">
                        <input type="text" pattern="[a-zA-Z0-9]{2,64}" class="login_input form-control" id="login_input_username" placeholder="UserName" name="user_name" required/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="login_input_email" class="col-lg-2 control-label">Email</label>
                    <div class="col-lg-10">
                        <input type="email" class="login_input form-control" id="login_input_email" placeholder="Email" name="user_email" required/>
                        <span class="help-block">
                            Password (min. 6 characters! 
                            Please note: using a long sentence as a password is much much safer then something like "!c00lPa$$w0rd"). 
                            Have a look on <a href="security.stackoverflow.com">this interesting security.stackoverflow.com thread</a>
                        </span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="login_input_password_new" class="col-lg-2 control-label">Password</label>
                    <div class="col-lg-10">
                        <input type="password" class="login_input form-control" id="login_input_password_new" placeholder="Password" name="user_password_new" pattern=".{6,}" required autocomplete="off"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="login_input_password_repeat" class="col-lg-2 control-label"></label>
                    <div class="col-lg-10">
                        <input type="password" class="login_input form-control" id="login_input_password_repeat" placeholder="Repeat Password" name="user_password_repeat" pattern=".{6,}" required autocomplete="off"/>
                    </div>
                </div>


                <div class="form-group">
                    <div class="col-lg-2 "></div>
                    <div class="col-lg-10">
                        <!-- generate and display a captcha and write the captcha string into session -->
                        <img src="tools/showCaptcha.php" /><br/>
                        <label>Please enter those characters</label><br/>
                        <input type="text" class="form-control" placeholder="Captcha" name="captcha" required/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-lg-10 col-lg-offset-2">
                      <button class="btn btn-default">Cancel</button> 
                      <button type="submit"  name="register" class="btn btn-primary">Sign Up</button> 
                    </div>
                </div>
        
            </fieldset>
        </form>
    </div>
    <!-- backlink -->
    <a href="index.php">Back to Login Page</a>
    <?php
    echo $_SESSION['captcha'];
    ?>
</div>
</div>



<?php } ?>
