<!-- this is the Simple sexy PHP Login Script. You can find it on http://www.php-login.net ! It's free and open source. -->

	<li class="dropdown">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown"><?php echo $_SESSION['user_name']; ?><b class="caret"></b></a>
		<ul class="dropdown-menu">
			<li><a href="edit.php">Edit Profile</a></li>
			<li><a href="index.php?logout">Logout</a></li>
		</ul>
	</li>
	<li > 
		<!--Welcome <?php echo $_SESSION['user_name']; ?>. -->
    	<?php //echo $login->user_gravatar_image_url; ?>
    	<?php echo $login->user_gravatar_image_tag; ?>
    </li>



<!-- this is the Simple sexy PHP Login Script. You can find it on http://www.php-login.net ! It's free and open source. -->