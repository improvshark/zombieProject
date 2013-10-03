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
                        [22, 0, 8,16,22,22,22,22,22,22,22,22,22,22,22],
                        [22, 1, 9, 8,16,22,22,22,22,22,22,22,22,22,22],
                        [22, 1, 9, 9,17,22,22,22,22,22,22,22,22,22,22],
                        [22, 2, 0, 9, 8,16,22,22,22,22,22,22,22,22,22],
                        [22,22, 1, 9, 9, 8, 8,16,22,22,22,22,22,22,22],
                        [22,22, 2, 4, 9, 9, 9, 8,16,22,22,22,22,22,22],
                        [22,22,22, 2,10, 4, 9, 9, 8,16,22,22,22,22,22],
                        [22,22,22,22,22, 2, 4, 9, 9,17,22,22,22,22,22],
                        [22,22,22,22,22,22, 2, 4, 9,17,22,22,22,22,22],
                        [22,22,22,22,22,22,22, 2,10,18,22,22,22,22,22],
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

                tileBrowser = new TileBrowser( $('#myTileBrowser')[0], tiles, 6, 8);
                tileBrowser.pixelWidth = $('#myTileBrowser')[0].width;
                tileBrowser.pixelHeight = $('#myTileBrowser')[0].height;
                tileBrowser.draw();

                var click1 = 0;
                var click2 = 1;



                // load tiles image
                var tiles2 = new Image()
                tiles2.src = 'public/img/tiles.png';

                 // create map object pass canvase and tiles image  
                myMap = new Map( document.getElementById('myCanvas'), tiles2);
                myMap.loadMap(map);
                myMap.draw();

                tileBrowser.draw();




                // important makes pixel ratio
                var resize=function(){
                    document.getElementById('myCanvas').width =window.innerWidth;
                    document.getElementById('myCanvas').height =window.innerHeight-110;
                    myMap.x = (window.innerWidth/2)-(myMap.pixelWidth/2);
                    myMap.draw();

                };

                window.onresize = resize;
                resize();
