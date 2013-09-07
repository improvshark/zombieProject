
<script type="text/javascript">
	var changeUser = function(group, name) {
		console.log( 'change ' + name + 's acount to group ' + group );

		$("#"+name).submit(function(event){
	    // abort any pending request
	    if (request) {
	        request.abort();
	    }
	    // setup some local variables
	    var $form = $(this);
	    // let's select and cache all the fields
	    var $inputs = $form.find("input, select, button, textarea");
	    // serialize the data in the form
	    var serializedData = $form.serialize();

	    // let's disable the inputs for the duration of the ajax request
	    $inputs.prop("disabled", true);


		request = $.ajax({
			type: "POST",
			url: "update.php",
			data: serializedData,
	        success: function(){
            	alert("success");
            	$("#result").html('Submitted successfully');
        		},
        	error:function(){
            	alert("failure");
            	$("#result").html('There is error while submit');
    		}

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
					 	<form id="<?php echo $row['user_name']; ?>">
						 	<select class="btn-sm btn-info" onchange="changeUser(this.options[this.selectedIndex].value, '<?php echo $row['user_name']; ?>')">
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
