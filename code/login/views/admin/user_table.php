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
					echo "<tr>";
					echo "<td>" . $row['user_id'] . "</td>";
					echo "<td>" . $row['user_name'] . "</td>";
					echo "<td>" . $row['user_email'] . "</td>";
					echo "<td>" . $row['user_group'] . "</td>";
				}
			?>
			</tbody>
		</table>
	</div>
</div>
