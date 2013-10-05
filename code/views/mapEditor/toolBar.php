<style>
    #toolbar {
        position: absolute;
        width: 100px;
        height: 500px;
        background: #000;
        left: -200px;

    }
    #toolbarHandle{
        position: absolute;
        left: 0px;
        float: left;
        top: 20%;
        width: 30px;
        height: 500px;

    }
</style>
<div id="toolbarHandle">
    <div id="toolbar" oncontextmenu="return false">
        <canvas id='myToolBar' width='100' height='500'></canvas> 
    </div>

</div>