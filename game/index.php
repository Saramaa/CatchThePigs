 <?php $title='Simple game in HTML 5 Canvas'; include(__DIR__ . '/../mall/header.php'); ?>
<body>
<div id='flash'>
	<h1>Simple game in HTML 5 Canvas</h1>
	<div id="game">
		<script src="game.js"></script>
		<audio autoplay loop id="bgMusic"><source src="../sound/farm.ogg"></audio>
		<!--<input type='button' id="toggleSound" value='toggle'/>-->
		<button id="toggleSound" onClick="toggleSound()">Pause background music</button> 
	</div>
	
	<div id="gameOver">
		<h1>
			GAME OVER
		</h1>
		<span>
			Restart?
		</span>
	</div>

</div>
</body>

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>

