	<li class="dropdown">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown"><?php echo $_SESSION['user_name']; ?><b class="caret"></b></a>
		<ul class="dropdown-menu">
			
			<li><a class="glyphicon glyphicon-user"  href="edit.php"> Profile</a></li>
			<li><a class="glyphicon glyphicon-off" href="index.php?logout"> Logout</a></li>
		</ul>
	</li>
	<li > 
		<!--Welcome <?php echo $_SESSION['user_name']; ?>. -->
    	<?php //echo $login->user_gravatar_image_url; ?>
    	<?php echo $login->user_gravatar_image_tag; ?>
    </li>






