// just a sample object
var map = {
    title: "test map map",
    author: "dosmun",
    width: 15,
    height: 15,
    x: 4,
    y: 4,
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

// create tileBrowser
tileBrowser = new TileBrowser( $('#myTileBrowser')[0], tiles, 6, 8);
tileBrowser.pixelWidth = $('#myTileBrowser')[0].width;
tileBrowser.pixelHeight = $('#myTileBrowser')[0].height;
tileBrowser.draw();

//load image for ToolBarr
var TBTiles = new Image();
TBTiles.src = 'public/img/tooltiles.png';

//Create Toolbar
toolBar = new ToolBar($('#myToolBar')[0], TBTiles, 6, 1);
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




// load map stuffs
if (typeof mapData !='undefined' ){
    console.log("loading map...")
    console.log(map);
    console.log(mapData);
  $( "#mapName" ).text(mapData.title);
  myMap.loadMap(mapData);
  myMap.draw();
  // also need to set myMapID 
}
else {
  // new map info
  var myMapID = null;
  myMap.author = userData.user_id;
  myMap.title = "Untitled Map"
  $( "#mapName" ).text(myMap.title);
  myMap.draw();
}



// important makes pixel ratio and canvas size correct
var resize=function(){
    $('#myCanvas')[0].width =window.innerWidth;
    $('#myCanvas')[0].height =window.innerHeight-110;
    myMap.centerMap();
    myMap.draw();

};

window.onresize = resize;
resize();


// name box Stuffs
$( "#mapName" ).dblclick(function() {
  $( "#mapNameEdit" ).val( $('#mapName').text() );
  toggleName();
});

$('#mapNameEdit').keypress(function(event) {
      if (event.keyCode == 13) {
          
          toggleName();
          $( "#mapName" ).text($('#mapNameEdit').val());
          myMap.title = $('#mapNameEdit').val();
      }
});

$('#mapNameEdit').blur(function() {
  toggleName();
  $( "#mapName" ).text($('#mapNameEdit').val());
  myMap.title = $('#mapNameEdit').val();
});

var toggleName = function()
{
  if ( $('#mapName').is(":visible")){
    $('#mapName').hide();
    $('#mapNameEditDiv').show();
  } else {
    $('#mapName').show();
    $('#mapNameEditDiv').hide();
  }
}
$('#mapNameEditDiv').hide();


