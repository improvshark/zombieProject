<style>
    #miniMap {
        position: absolute;
        background: #262626;
        left: -500px;

    }
    #miniMapHandle{
        position: absolute;
        left: 0px;
        float: right;
        top: 496px;
        width: 50px;
        height: 150px;

    }
</style>
<div id='miniMapHandle'>
    <div id="miniMap" oncontextmenu="return false" >
            <canvas id='myMiniMap' width='200' height='200'></canvas>       
    </div>
</div>
