function playMap(map){
    sendMap(map.map, function(data){
            if (data.success) {
            var win=window.open(data.url, '_blank');
            win.focus();
            //$('#playTestModal').modal()
            //$('#playTestIframe')[0].src = data.url;
            //$('#playTestIframe').focus();
        } 

    });  
}