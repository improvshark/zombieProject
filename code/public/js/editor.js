  // just a sample object
                var map = {
                    title: "test map map",
                    author: "dosmun",
                    width: 15,
                    height: 15,
                    x: 50,
                    y: 20,
                    data: {
                        bottom: [
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
                        [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22]
                        ],
                        middle:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
                        top:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
                    },
                    events: [],
                    env: "normal"
                };


                // load tiles image
                var tiles = new Image()
                tiles.src = 'public/img/tiles.png';

                // create tileBrowser
                tileBrowser = new TileBrowser( $('#myTileBrowser')[0], tiles, 6, 8);
                tileBrowser.pixelWidth = $('#myTileBrowser')[0].width;
                tileBrowser.pixelHeight = $('#myTileBrowser')[0].height;
                tileBrowser.draw();

                //load image for ToolBarr
                var TBTiles = new Image();
                TBTiles.src = 'public/img/tooltiles.png';

                //Create Toolbar
                toolBar = new ToolBar($('#myToolBar')[0], TBTiles, 5, 1);
                toolBar.pixelWidth = $('#myToolBar')[0].width;
                toolBar.pixelHeight = $('#myToolBar')[0].height;
                ToolBar.height = 30;
                ToolBar.width = 30;
                toolBar.draw();


                // load tiles image
                var tiles2 = new Image()
                tiles2.src = 'public/img/tiles.png';

                 // create map object pass canvase and tiles image  
                myMap = new Map( document.getElementById('myCanvas'), tiles2);
                myMap.loadMap(map);
                myMap.draw();

                tileBrowser.draw();




                // important makes pixel ratio and canvas size correct
                var resize=function(){
                    document.getElementById('myCanvas').width =window.innerWidth;
                    document.getElementById('myCanvas').height =window.innerHeight-110;
                    myMap.x = (window.innerWidth/2)-(myMap.pixelWidth/2);
                    myMap.draw();

                };
                window.onresize = resize;
                resize();
