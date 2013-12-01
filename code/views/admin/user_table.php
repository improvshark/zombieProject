<div class="active">
		<table class="table table-striped table-hover">
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
					<tr id="<?php echo $row['user_id']; ?>">
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
					<td>
						<span onclick="displayUserModal(<?php echo $row['user_id']; ?>, '<?php echo $row['user_name']; ?>')" class="btn-sm  btn-default glyphicon glyphicon-remove"> </span>
					</td>

					 <?php
				}
			?>
			</tbody>
		</table>
</div>


  