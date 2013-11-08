<style>
    #tileBrowser {
        position: absolute;
        width: 500px;
        background: #262626;
        right: -500px;

    }
    #tileBrowserHandle{
        position: absolute;
        right: 0px;
        float: right;
        top: 15%;
        width: 50px;
        height: 500px;

    }
</style>
<div id='tileBrowserHandle'>
    <div id="tileBrowser" oncontextmenu="return false" >

        <ul class="nav nav-tabs">
            <li class="active"><a href="#bottom" data-toggle="tab" >Bottom</a></li>
            <li><a href="#middle" data-toggle="tab">middle</a></li>
            <li><a href="#upper" data-toggle="tab">upper</a></li>
        </ul>
        <div id="myTabContent" class="tab-content" oncontextmenu="return false">

            <div class="tab-pane fade active in" id="bottom">
                <canvas id='myTileBrowser' width='500' height='350'></canvas>
            </div>

            <div class="tab-pane fade" id="middle">
                <canvas id='myMiddleTileBrowser' width='500' height='500'></canvas>
            </div>

            <div class="tab-pane fade" id="upper">
                <canvas id='myUpperTileBrowser' width='500' height='50'></canvas>
            </div>

        </div>
        
    </div>
</div>
