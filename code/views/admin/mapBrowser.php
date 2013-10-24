<div class="active">
		<table class="table table-striped table-hover">
			<thead>

				<tr>
					<th>mapID</th>
					<th>author</th>
					<th>name</th>
				</tr>
			</thead>
			<tbody>	
			<?php

				foreach ($maps->getMaps() as $row) {
					?>
					<tr id="map<?php echo $row['mapID']; ?>">
					<td> <?php echo $row['mapID']; ?></td>
					<td> <?php echo $row['author']; ?></td>
					<td> <?php echo $row['name']; ?></td>
					<td> <img src="<?php echo $maps->getThumb($row['mapID']); ?>" height="142" width="142"></td>
					
					<td>
						<span onclick="deleteMapModal(<?php echo $row['mapID']; ?>, '<?php echo $row['name']; ?>',
						 '<?php echo $row['author']; ?>')" class="btn-sm  btn-default glyphicon glyphicon-remove"> </span>
					</td>

					 <?php
				}
			?>
			</tbody>
		</table>
</div>


