  

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
          <div style=";" oncontextmenu="return false" class="unselectable">
            <canvas id='fillTool' width='530' height='300' style="border: 1px black solid; "></canvas>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" data-dismiss="modal" class="btn btn-primary" id="fillBtn" >Fill</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->


      <!-- Preferences Modal -->
  <div class="modal fade" id="preferencesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 class="text-info modal-title">Preferences</h3>
        </div>
        <div class="modal-body">
          <h3>Hotkeys:</h3>
          <div class="row"><label class="col-md-2">Pencil</label><input id="" type="character"></div>  
          <div class="row"><label class="col-md-2">Brush</label><input id="" type="character"></div>
          <div class="row"><label class="col-md-2">Eraser</label><input id="" type="character"></div>
          <div class="row"><label class="col-md-2">Line</label><input id="" type="character"></div>
          <div class="row"><label class="col-md-2">Selector</label><input id="" type="character"></div>
          <div class="row"><label class="col-md-2">Fill</label><input id="" type="character"></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" data-dismiss="modal" class="btn btn-primary" id="" >Save</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->  


    <style type="text/css">
      #playTestModal .modal-dialog {
        /* new custom width */
        width: 660px;
        height: 900px;
        /* must be half of the width, minus scrollbar on the left (30px) */
        margin: 100px auto 100px auto;
      }

    </style>
      <!-- Play Test Modal -->
  <div class="modal fade" id="playTestModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 class="text-info modal-title">Play Test</h3>
        </div>
        <div class="modal-body">
          <div style="" oncontextmenu="return false" >
            <iframe id="playTestIframe" width='606' height='606' style="border: 1px black solid>"</iframe>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->



