// stuff like this would go in the button.js class
document.getElementById('butBar-showGrid').onclick = function(){
    console.log('grid');
    if (myMap.grid != 0){
        // use bootstrap to put a checkmark by it
        document.getElementById('butBar-showGrid').setAttribute("class", "");
        myMap.grid = 0; 
    } else {
        // use bootstrap to put a checkmark by it
        document.getElementById('butBar-showGrid').setAttribute("class", "glyphicon glyphicon-ok");
        myMap.grid = .7;  
    }
    myMap.draw();
}