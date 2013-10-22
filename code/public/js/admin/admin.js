	// activate the modal dialog
	var displayUserModal = function(user_id, user_name) {
		console.log( 'display delete dialog for #' + user_id + " name: " + user_name);
		$('#myModal').modal()
		$('#idToDelete').text(user_id);
		$('#nameToDelete').text(user_name);
	}

