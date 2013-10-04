
<style>
    #tileBrowser {
        position: absolute;
        width: 500px;
        height: 350px;
        background: #262626;
        right: -500px;

    }
    #tileBrowserHandle{
        position: absolute;
        right: 0px;
        float: right;
        top: 15%;
        width: 50px;
        height: 350px;

    }
</style>
<div id='tileBrowserHandle'>
    <div id="tileBrowser" oncontextmenu="return false" >
        <canvas id='myTileBrowser' width='500' height='350'></canvas>
    </div>
</div>
