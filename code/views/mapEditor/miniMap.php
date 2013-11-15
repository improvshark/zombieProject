<style>
    #miniMap {
        position: absolute;
        width: 250px;
        background: #00FF00;
        left: -500px;
		height: 150px;

    }
    #miniMapHandle{
        position: absolute;
        left: 0px;
        float: right;
        top: 73%;
        width: 50px;
        height: 150px;

    }
</style>
<div id='miniMapHandle'>
    <div id="miniMap" oncontextmenu="return false" >
            <canvas id='myMiniMap' width='250' height='150'></canvas>       
    </div>
</div>
