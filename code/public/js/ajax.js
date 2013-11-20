
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

var deleteUser = function(id) {
	console.log( 'deletingUser #' + id + " name: " + name);
	var myData = {
		delete_user: true,
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
	$('#' + id).remove();
}

var deleteMap = function(id) {
	console.log( 'deleting map #' + id );
	var myData = {
		delete_map: true,
		map_id: id
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
	$('#map' + id).remove();
}

function saveMap (data, id, thumb) {
	console.log( 'saving map...');

	var myData = {
		saving_map: true,
		data: data, 
		id: id,
		thumb: thumb
	}

	request = $.ajax({
		type: "POST",
		url: "tools/update.php",
		data: myData,
	    success: function(data){
	    	console.log('successful save');
	    	id = parseInt(data)
	    	console.log(":"+id+":")
	    },
		error:function(){
	    	console.log('fail save');
	    },
		

	})

	return id;
}

function createMap (data,thumb, setID) {
	console.log( 'creating map...');


	var myData = {
		create_map: true,
		data: data,
		thumb: thumb
	}

	request = $.ajax({
		type: "POST",
		url: "tools/update.php",
		data: myData,
	    success: function(data){
	    	console.log('successful create');
	    	id =  parseInt(data)
	    	setID(id);
	    	console.log("creating map:"+id+":")
	    	console.log("mymapid:"+myMapID)
	    },
		error:function(){
	    	console.log('fail save');
	    },
		

	})
}

function sendMap(map, callback ){
	console.log('sending Map');
    console.dir(map);

    var sendMap =  JSON.stringify( { map: map} ) ;
    
    var report = $.post('tools/update.php', { mapObj: sendMap, send_map: true }, function(data){
        var obj = JSON.parse(data);
        console.log('responce');
        console.dir(data);
        callback(obj);
    });
}


function savePref(id, preferences ){
	console.log( 'saving preferences...');

	var myData = {
		saving_pref: true,
		preferences: preferences, 
		id: id
	}

	request = $.ajax({
		type: "POST",
		url: "tools/update.php",
		data: myData,
	    success: function(data){
	    	console.log('successful save');
	    	//id = parseInt(data)
	    	//console.log(":"+id+":")
	    },
		error:function(){
	    	console.log('fail save');
	    },
		

	})

	//return id;
}

