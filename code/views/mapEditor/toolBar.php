<style>
    #toolbar {
        position: absolute;
        width: 85px;
        height: 300px;
        background: #000;
        left: -200px;

    }
    #toolbarHandle{
        position: absolute;
        left: 0px;
        float: left;
        top: 15%;
        width: 30px;
        height: 500px;
        text-align: center;

    }
</style>
<div id="toolbarHandle">
    <div id="toolbar" oncontextmenu="return false">
        <canvas id='myToolBar' width='80' height='350'></canvas> 
    </div>

</div>