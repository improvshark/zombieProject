$(document).keydown(function(evt) {
    console.log('key: ' + evt.which);
    var change = 5
    var changeX = (myMap.width * change);
    var changeY = (myMap.height * change);
    var move = 30;



    switch (evt.which) {
        case 107: // +
        case 187: // num+    
            console.log('wooot!')
            myMap.pixelWidth += changeX;
            myMap.pixelHeight += changeY;
            myMap.x -= (myMap.width * change) / 2;
            myMap.y -= (myMap.height * change) / 2
            break;
        case 109: // -
        case 189: // num-
            if (myMap.pixelWidth - changeX > 100 || myMap.pixelHeight - changeY > 100) {
                myMap.pixelWidth -= changeX;
                myMap.pixelHeight -= changeY;
                myMap.x += (myMap.width * change) / 2;
                myMap.y += (myMap.height * change) / 2;
            }
            break;
        case 37: // left
            evt.preventDefault();
            myMap.x -= move
            break;
        case 38: // up
            evt.preventDefault();
            myMap.y -= move
            break;
        case 39: // right
            evt.preventDefault();
            myMap.x += move
            break;
        case 40: // down
            evt.preventDefault();
            myMap.y += move
            break;
        case 90: // z
            if (evt.ctrlKey) {
                myMap.undoManager.undo();
            };
            break;
        case 82: // r
            if (evt.ctrlKey) {
                evt.preventDefault();
                myMap.undoManager.redo();
            };
            break;
        case 80: // p
            tool = 0;
            toolBar.selectTool(0, 0);
            break;
        case 66: // b
            tool = 1;
            toolBar.selectTool(0, 1);
            break;
        case 69: // e
            tool = 2;
            toolBar.selectTool(0, 2);
            break;
        case 76: // l
            tool = 3;
            toolBar.selectTool(0, 3);
            break;
        case 83: // s
            tool = 4;
            toolBar.selectTool(0, 4);
            break;
        case 70: // f
            tool = 5;
            toolBar.selectTool(0, 5);
            break;


        default:
            // do nothing!!!
            break;
    };
    myMap.draw();
});