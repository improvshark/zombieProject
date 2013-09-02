<!-- this is the Simple sexy PHP Login Script. You can find it on http://www.php-login.net ! It's free and open source. -->

<div>
	Welcome <?php echo $_SESSION['user_name']; ?>. 
    <?php //echo $login->user_gravatar_image_url; ?>
    <?php echo $login->user_gravatar_image_tag; ?>


    <!-- because people were asking: "index.php?logout" is just my simplified form of "index.php?logout=true" -->
	<ul class="dropdown-menu">
		<li><a href="index.php?logout">Logout</a></li>
		<li><a href="edit.php">Profile</a></li>
		<li><a href="#">Something else here</a></li>
		<li class="divider"></li>
		<li><a href="#">Separated link</a></li>
	</ul>
        
    
</div>

<!-- this is the Simple sexy PHP Login Script. You can find it on http://www.php-login.net ! It's free and open source. -->