  <!--delete user Modal -->
  <div class="modal fade" id="deleteUserModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 class="text-danger modal-title">!WARNING</h3>
        </div>
        <div class="modal-body">
        	<p>Are you sure you want to delete this User: </p>
         	<blockquote>
         		<p>id#: <a class="text-danger" id="idToDelete"></a></p>
         		<p>username: <a class="text-danger" id="nameToDelete"></a></p>
 			</blockquote>
         <p> This can not be undone.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" data-dismiss="modal" class="btn btn-danger" id="Destroy" onclick="deleteUser($('#idToDelete').text())">Destroy</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->


    <!-- delete map Modal -->
  <div class="modal fade" id="deleteMapModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 class="text-danger modal-title">!WARNING</h3>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete this Map: </p>
          <blockquote>
            <p>id#: <a class="text-danger" id="mapIdToDelete"></a></p>
            <p>Author: <a class="text-danger" id="mapAuthor"></a></p> 
            <p>mapName: <a class="text-danger" id="mapNameToDelete"></a></p>
      </blockquote>
         <p> This can not be undone.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" data-dismiss="modal" class="btn btn-danger" id="Destroy" onclick="deleteMap($('#mapIdToDelete').text())">Destroy</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->