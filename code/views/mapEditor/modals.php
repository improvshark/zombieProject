  

  <!-- resize map Modal -->
  <div class="modal fade" id="resizeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 class="text-info modal-title">Resizing Map</h3>
        </div>
        <div class="modal-body">
          <p>Resize map:</p>
          <blockquote>
            <p>width: <input id="resizeWidth" type="number" > </p>
            <p>height: <input id="resizeHeight" type="number" ></p>
          </blockquote>
         <p> This can not be undone.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" data-dismiss="modal" class="btn btn-primary" id="resizeBtn" onclick=" myMap.resize( $('#resizeWidth').val(), $('#resizeHeight').val() )">Resize</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->

    <!-- fill Modal -->
  <div class="modal fade" id="fillModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 class="text-info modal-title">Fill Map</h3>
        </div>
        <div class="modal-body">
          <p>Fill map:</p>
          <div style="width: 100%;" oncontextmenu="return false" class="unselectable">
            <canvas id='myCanvas' width='900' height='650' style="border: 1px black solid; "></canvas>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" data-dismiss="modal" class="btn btn-primary" id="resizeBtn" onclick=" myMap.resize( $('#resizeWidth').val(), $('#resizeHeight').val() )">Resize</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->