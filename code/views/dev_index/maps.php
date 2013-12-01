

<div class="row">
	<?php foreach ($maps->getMaps() as $row) { ?>
		<div class="col-sm-6 col-md-3">
			<div class="thumbnail" id="map<?php echo $row['mapID']; ?>">
				<img src="<?php echo $maps->getThumb($row['mapID']); ?>" alt="...">
				<div class="caption">
					<h3><?php echo $row['name']; ?></h3>
					<p><?php echo $row['mapID']; ?>, <?php echo $row['author']; ?></p>
					<form action="editor.php"  method="post" >
						<input type="hidden" value="<?php echo str_replace("\"", "'", $row['data']	); ?>" name="mapData">
						<input type="hidden" value="<?php echo $row['mapID']; ?>" name="mapID" >
						<input type="submit" class="btn btn-default btn-sm" value="edit">
						
					</form>
					<button  class="btn btn-default btn-sm" onclick="playMap(<?php echo str_replace("\"", "'", $row['data']	); ?>);">Play</button>
				</div>
			</div>
		</div>
	<?php } ?>
</div>
