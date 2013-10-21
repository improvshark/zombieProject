
function changeUser(group, id) {
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

function saveMap (data) {
	console.log( 'saving map...');

	var myData = {
		saving_map: true,
		data: data
	}

	request = $.ajax({
		type: "POST",
		url: "tools/update.php",
		data: myData,
	    success: function(){
	    	console.log('successful save');
	    },
		error:function(){
	    	console.log('fail save');
	    },
		

	})
}