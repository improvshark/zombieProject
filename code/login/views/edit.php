
<div class="container">
    <div class="jumbotron">
        <h2>
            Hey, <?php echo $_SESSION['user_name']; ?>. You are logged in and can edit your credentials here!
        </h2>
    </div>
</div>

<div class="container">
    <!-- edit form for username / this form uses HTML5 attributes, like "required" and type="email" -->
    <div class="col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading"><h4>Username</h4></div>     
            <div class="panel-body">
                <form method="post" action="edit.php" name="user_edit_form_name" >
                <label for="edit_input_username">New Username</label>
                <input id="edit_input_username" class="login_input form-control form-group" type="text" name="user_name" placeholder="<?php echo $_SESSION['user_name']; ?>" pattern="[a-zA-Z0-9]{2,64}" required />
                <input type="submit"  class="form-group" name="user_edit_submit_name" value="Change username" />
                </form>
            </div>
        </div>
    </div>


        <!-- edit form for user email / this form uses HTML5 attributes, like "required" and type="email" -->
    <div class="col-md-4 ">
        <div class="panel panel-info">
            <div class="panel-heading"><h4>Email</h4></div>
            <div class="panel-body">
                <form method="post" action="edit.php" name="user_edit_form_email">
                    <label for="edit_input_email">New email</label><br/>
                    <input id="edit_input_email" class="login_input form-control form-group" type="email" name="user_email" placeholder="<?php echo $_SESSION['user_email']; ?>" required />
                    <input type="submit" class="form-group"  name="user_edit_submit_email" value="Change email" />
                </form>
            </div>
        </div>

    </div>


    <!-- edit form for user's password / this form uses the HTML5 attribute "required" -->
    <div class="col-md-4 ">
        <div class="panel panel-info">
            <div class="panel-heading"><h4>Password</h4></div>
            <div class="panel-body">
                <form method="post" action="edit.php" name="user_edit_form_password">
                    <label for="edit_input_password_old">Your OLD Password</label>
                    <input id="edit_input_password_old" class="login_input form-control form-group" type="password" name="user_password_old" autocomplete="off" />
                    <label for="edit_input_password_new">Your NEW Password</label>
                    <input id="edit_input_password_new" class="login_input form-control form-group" type="password" name="user_password_new" autocomplete="off" />
                    <label for="edit_input_password_repeat">Repeat NEW password</label>
                    <input id="edit_input_password_repeat" class="login_input form-control form-group" type="password" name="user_password_repeat" autocomplete="off" />
                    <input type="submit"  name="user_edit_submit_password" class="form-group" value="Change password" />
                </form>
            </div>
        </div>
    </div>

    <!-- backlink -->
    <a href="index.php">Back to Index Page</a>
</div>
