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
            evt.peventDefault();
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
        case myPref.pencilKey.charCodeAt(0): // pencil
            tool = 0;
            toolBar.selectTool(0, 0);
            break;
        case myPref.brushKey.charCodeAt(0): // brush
            tool = 1;
            toolBar.selectTool(0, 1);
            break;
        case myPref.eraserKey.charCodeAt(0): // eraser
            tool = 2;
            toolBar.selectTool(0, 2);
            break;
        case myPref.lineKey.charCodeAt(0): // line
            tool = 3;
            toolBar.selectTool(0, 3);
            break;
        case myPref.selectKey.charCodeAt(0): // selector
            tool = 4;
            toolBar.selectTool(0, 4);
            break;
        case myPref.fillKey.charCodeAt(0): // fill
            tool = 5;
            toolBar.selectTool(0, 5);
            break;


        default:
            // do nothing!!!
            break;
    };
    myMap.draw();
});