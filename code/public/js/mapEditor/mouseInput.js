var click1 = {
    tile: 0,
    layer: "bottom"
}; // left click
var click2 = {
    tile: 1,
    layer: "bottom"
}; // right click

var tool = 1; // tool selected from toolbar
var tempTool = 1; //Temp tool to hold previous tool for picker


// TODO: move this to  toolbar.js 
var linin = false; //flag to control the line scketching
var whichclick = "right";
var whichclick2 = "right";
var clickStart = {
    x: 0,
    y: 0
};
var clickEnd = {
    x: 0,
    y: 0
};
var clickT = {
    x: 0,
    y: 0
}; //click variable for toolbar

var thickness = 6;


var unselectLeft = function() {
    tileBrowser.unselectLeft();
    middleBrowser.unselectLeft();
    upperBrowser.unselectLeft();
}
var unselectRight = function() {
    tileBrowser.unselectRight();
    middleBrowser.unselectRight();
    upperBrowser.unselectRight();
}


var tools = {}

tools.pencil = function(evt) {
    if (evt.which == 1) {
        click = myMap.getTilePos(evt);
        if (click != null) {
            rBigChanger(click, click1.tile, thickness, click1.layer)
        }
    } else if (evt.which == 3) {
        click = myMap.getTilePos(evt);
        if (click != null) {
            rBigChanger(click, click2.tile, thickness, click2.layer)
        }
    }
}

tools.brush = function(evt) {
    $('#myCanvas').mousemove(function(evt) {

        if (evt.which == 1) {
            // set location of mouse click to click object
            click = myMap.getTilePos(evt);
            // check if we are on map...if we are change tile
            if (click != null) {
                rBigChanger(click, click1.tile, thickness, click1.layer)
            }
        } else if (evt.which == 3) {
            // set location of mouse click to click object
            click = myMap.getTilePos(evt);
            // check if we are on map...if we are change tile
            if (click != null) {
                rBigChanger(click, click2.tile, thickness, click2.layer)
            }
        }
        //myMap.draw(); // redraw map so we can see changes
    });
}

tools.eraser = function(evt) {
    var defaultTile = myMap.getDefaultTile();

    click = myMap.getTilePos(evt);

    if (click != null) {
        rBigChanger(click, defaultTile, thickness, "bottom");
        rBigChanger(click, -1, thickness, "middle");
        rBigChanger(click, -1, thickness, "upper");
    }

    $('#myCanvas').on('mousemove',function(evt) {
        
        console.log('eraser is happening!');
        click = myMap.getTilePos(evt);
        if (click != null) {
            rBigChanger(click, defaultTile, thickness, "bottom");
            rBigChanger(click, -1, thickness, "middle");
            rBigChanger(click, -1, thickness, "upper");
        }
    });
    // remove the handling of the event
    $('#myCanvas').on('mouseup', function(evt) {
       $('#myCanvas').off('mousemove'); 
       $('#myCanvas').off('mouseup'); 
    });



}

tools.lineTool = function(evt) {
    console.log('linin: ' + linin);
    if (linin == false) {
        linin = true;
        clickStart = myMap.getTilePos(evt);
        if (evt.which == 1) {
            whichclick = "right";
        } else if (evt.which == 3) {
            whichclick = "left";
        }
    } else if (linin == true) {
        if (evt.which == 1) {
            whichclick2 = "right";
        } else if (evt.which == 3) {
            whichclick2 = "left";
        }

        if (whichclick == whichclick2) {
            linin = false;
            if (whichclick == "right") {
                drawLine(evt, click1.tile, clickStart);
            } else {
                drawLine(evt, click2.tile, clickStart);
            }

        } else {
            clickStart = myMap.getTilePos(evt);
            if (evt.which == 1) {
                whichclick = "right";
            } else if (evt.which == 3) {
                whichclick = "left";
            }
        }

    }
}

tools.selector = function(evt) {
    if (evt.which == 1) {
        click1.tile = myMap.getTile(evt);
    } else if (evt.which == 3) {
        click2.tile = myMap.getTile(evt);
    }

    tool = tempTool;
}

tools.bucket = function(evt) {
    coord = myMap.getTilePos(evt);
    compTile = myMap.getTile(evt);

    console.log("Tile pos, x: " + coord.x + " y: " + coord.y + ". compTile: " + compTile);

    if (evt.which == 1) {
        rTileChanger(coord.x, coord.y, compTile, click1.tile);
    } else if (evt.which == 3) {
        rTileChanger(coord.x, coord.y, compTile, click2.tile);
    }

    myMap.draw();
}
// mini map movement
$('#myMiniMap').mousedown(function(evt) {
    var click = myMiniMap.getTilePos(evt);

    var numPixWidth = click.x * myMap.pixelWidth/myMap.width;
    var numPixHeight = click.y * myMap.pixelHeight/myMap.height;
    var midX = myMap.canvas.width/2;
    var midY = myMap.canvas.height/2;

    myMap.x = midX - numPixWidth;
    myMap.y = midY - numPixHeight;



    $('#myMiniMap').on('mousemove',function(evt) {
        var click = myMiniMap.getTilePos(evt);
        var numPixWidth = click.x * myMap.pixelWidth/myMap.width;
        var numPixHeight = click.y * myMap.pixelHeight/myMap.height;
        var midX = myMap.canvas.width/2;
        var midY = myMap.canvas.height/2;
        myMap.x = midX - numPixWidth;
        myMap.y = midY - numPixHeight;
        myMap.draw();

    });
    // remove the handling of the event
    $('#myMiniMap').on('mouseup', function(evt) {
       $('#myMiniMap').off('mousemove'); 
       $('#myMiniMap').off('mouseup'); 
    });

    myMap.draw();
});

// placement of tiles
$('#myCanvas').mousedown(function(evt) {
    thickness = $('#sliderBar').val();;
    if (!evt.ctrlKey) {
        switch (tool) {
            case 0: //pencil
                tools.pencil(evt);
                break;
            case 1: // brush
                tools.pencil(evt);
                tools.brush(evt);
                break;
            case 2: // eraser
                tools.eraser(evt);
                break;
            case 3: // line
                tools.lineTool(evt);
                break;
            case 4: // selector
                tools.selector(evt);
                break;
            case 5: // bucket
                tools.bucket(evt);
                break;
        }
    } else if (evt.ctrlKey) { // start dragging of the map
        evt.preventDefault();
        if (evt.which == 1) {
            myMap.dragStart();
        }

        // releases the drag
        $('#myCanvas').mouseup(function(evt) {
            console.log('releases drag');
            evt.preventDefault();
            if (evt.which == 1) {
                myMap.dragEnd();
            }
        });
    }
});

// get tile selected from tile browser
$('#myTileBrowser').mousedown(function(evt) {
    var pos = tileBrowser.getTilePos(evt);

    if (evt.which == 1) {
        click1.tile = tileBrowser.getTile(evt);
        click1.layer = "bottom";
        unselectRight();
        tileBrowser.selectRight(pos.x, pos.y);

    }
    if (evt.which == 3) {
        click2.layer = "bottom";
        click2.tile = tileBrowser.getTile(evt);
        unselectLeft();
        tileBrowser.selectLeft(pos.x, pos.y);
    }
})

// get tile selected from middle tile browser
$('#myMiddleTileBrowser').mousedown(function(evt) {
    var pos = middleBrowser.getTilePos(evt);

    if (evt.which == 1) {
        click1.layer = "middle";
        click1.tile = middleBrowser.getTile(evt);
        unselectRight();
        middleBrowser.selectRight(pos.x, pos.y);

    }
    if (evt.which == 3) {
        click2.layer = "middle";
        click2.tile = middleBrowser.getTile(evt);
        unselectLeft();
        middleBrowser.selectLeft(pos.x, pos.y);
    }
})

// get tile selected from middle tile browser
$('#myUpperTileBrowser').mousedown(function(evt) {
    var pos = upperBrowser.getTilePos(evt);

    if (evt.which == 1) {
        click1.layer = "upper";
        click1.tile = upperBrowser.getTile(evt);
        unselectRight();
        upperBrowser.selectRight(pos.x, pos.y);

    }
    if (evt.which == 3) {
        click2.layer = "upper";
        click2.tile = upperBrowser.getTile(evt);
        unselectLeft();
        upperBrowser.selectLeft(pos.x, pos.y);
    }
})

$('#myToolBar').mousedown(function(evt) {
    var selTool = toolBar.getTile(evt);
    tempTool = tool;
    tool = (selTool / 8); //+ 1;

    var pos = toolBar.getTilePos(evt);
    toolBar.selectTool(pos.x, pos.y);

})


// TODO: move this to  toolbar.js 
var rTileChanger = function(varX, varY, compTile, chTile, layer) {

    if (myMap.boundsCheck(varX, varY)) {
        var currTile = myMap.getxyTile(varX, varY);
        console.log("currTile: " + currTile + "compTile: " + compTile);

        if (currTile != compTile || currTile == chTile) {
            return;
        } else if (currTile == compTile) {
            myMap.changeTile(varX, varY, chTile, layer);

            rTileChanger(varX + 1 /*myMap.width*/ , varY, compTile, chTile, layer); //go right
            rTileChanger(varX - 1 /*myMap.width*/ , varY, compTile, chTile, layer); //go left
            rTileChanger(varX, varY - 1 /*myMap.height*/ , compTile, chTile, layer); //go up
            rTileChanger(varX, varY + 1 /*myMap.height*/ , compTile, chTile.layer); //go down
        }
    }

};

var rBigChanger = function(click, chTile, timesThickness, layer) {

    if (myMap.boundsCheck(click.x, click.y)) {

        if (timesThickness == 0) {
            return;
        } else {
            myMap.changeTile(click.x, click.y, chTile, layer);

            rBigChanger({
                x: click.x + 1,
                y: click.y
            }, chTile, timesThickness - 1, layer); //go right
            rBigChanger({
                x: click.x - 1,
                y: click.y
            }, chTile, timesThickness - 1, layer); //go left
            rBigChanger({
                x: click.x,
                y: click.y - 1
            }, chTile, timesThickness - 1, layer); //go up
            rBigChanger({
                x: click.x,
                y: click.y + 1
            }, chTile, timesThickness - 1, layer); //go down
        }
    }

};

var drawLine = function(evt, side, clickStart) {
    clickEnd = myMap.getTilePos(evt);

    console.log('X0: ' + clickStart.x + ' Y0: ' + clickStart.y);
    console.log('X1: ' + clickEnd.x + ' Y1: ' + clickEnd.y);

    var dx;
    var dy;
    var sx;
    var sy;
    var err;
    var e2;

    dx = Math.abs(clickEnd.x - clickStart.x);
    dy = Math.abs(clickEnd.y - clickStart.y);

    if (clickStart.x < clickEnd.x) {
        sx = 1;
    } else {
        sx = -1;
    }

    if (clickStart.y < clickEnd.y) {
        sy = 1;
    } else {
        sy = -1;
    }

    err = dx - dy;


    while (true) {
        //myMap.changeTile(clickStart.x, clickStart.y, side);
        rBigChanger({
            x: clickStart.x,
            y: clickStart.y
        }, side, thickness);
        if (clickStart.x == clickEnd.x && clickStart.y == clickEnd.y) break;
        e2 = 2 * err;
        if (e2 > -dy) {
            err = err - dy;
            clickStart.x = clickStart.x + sx;
        }
        if (e2 < dx) {
            err = err + dx;
            clickStart.y = clickStart.y + sy;
        }
    }
}