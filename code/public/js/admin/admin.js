	// activate the modal dialog
	var displayUserModal = function(user_id, user_name) {
		console.log( 'display delete user dialog for #' + user_id + " name: " + user_name);
		$('#deleteUserModal').modal()
		$('#idToDelete').text(user_id);
		$('#nameToDelete').text(user_name);
	}

	var deleteMapModal = function(user_id, user_name, author) {
		console.log( 'display delete map dialog for #' + user_id + " name: " + user_name);
		$('#deleteMapModal').modal()
		$('#mapIdToDelete').text(user_id);
		$('#mapAuthor').text(author);
		$('#mapNameToDelete').text(user_name);
	}

