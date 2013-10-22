<script src="public/js/ajax.js"></script>
<script src="public/js/admin/admin.js"></script>

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



  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 class="text-danger modal-title">!WARNING</h3>
        </div>
        <div class="modal-body">
        	<p>Are you sure you want to delete this User: </p>
         	<blockquote>
         		<p>id#: <a class="text-danger" id="idToDelete"></a></p>
         		<p>username: <a class="text-danger" id="nameToDelete"></a></p>
 			</blockquote>
         <p> This can not be undone.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" data-dismiss="modal" class="btn btn-danger" id="Destroy" onclick="deleteUser($('#idToDelete').text())">Destroy</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->


  