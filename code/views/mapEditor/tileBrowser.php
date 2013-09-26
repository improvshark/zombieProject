
<style>
    #tileBrowser {
        position: absolute;
        width: 500px;
        height: 500px;
        background: #262626;
        right: -500px;

    }
    #tileBrowserHandle{
        position: absolute;
        right: 0px;
        float: right;
        top: 15%;
        width: 30px;
        height: 500px;

    }
</style>
<div id='tileBrowserHandle'>
    <div id="tileBrowser" oncontextmenu="return false" >
        <canvas id='myTileBrowser' width='500' height='500'></canvas>
    </div>
</div>
