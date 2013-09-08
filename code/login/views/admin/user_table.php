
<script type="text/javascript">
	var changeUser = function(group, id) {
		console.log( 'change ' + id + '\'s acount to group ' + group );
		var myData = {
			update_usergroup: true,
			user_group: group,
			user_id: id
		}
		request = $.ajax({
			type: "POST",
			url: "tools/update.php",
			data: myData,
	        success: function(){
            	console.log('successful submit');
            },
        	error:function(){
            	console.log('fail submit');
            },
    		

		})
	}
</script>

<div class="row col-sm-9">
	<div id="userTable" class=" collapse in">
		<table class="table table-striped table-bordered table-hover">
			<thead>

				<tr>
					<th>#</th>
					<th>Username</th>
					<th>Email</th>
					<th>UserGroup</th>
				</tr>
			</thead>
			<tbody>	
			<?php
				foreach ($admin->getAllUserData() as $row) {
					?>
					<tr>
					<td> <?php echo $row['user_id']; ?></td>
					<td> <?php echo $row['user_name']; ?></td>
					<td> <?php echo $row['user_email']; ?></td>
					 <td>
					 	<form id="<?php echo $row['user_id']; ?>">
						 	<select class="btn-sm btn-primary" onchange="changeUser(this.options[this.selectedIndex].value, '<?php echo $row['user_id']; ?>')">
								<option <?php if ($row['user_group'] == 'user'){ echo "selected='selected'";}?> >user</option>
								<option <?php if ($row['user_group'] == 'dev'){ echo "selected='selected'";}?>>dev</option>
								<option <?php if ($row['user_group'] == 'admin'){ echo "selected='selected'";}?>>admin</option>
							</select>
						</form>
					</td>

					 <?php
				}
			?>
			</tbody>
		</table>
	</div>
</div>
