<html>

	<head>
	
		<title>P5.js Example</title>
		
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
		<script>
			function setup(){
				createCanvas(500, 500);
				background(64);
			}
			
			function draw(){
				fill(255);
				ellipse(mouseX, mouseY, 20, 20);
			}
		</script>
	</head>
	<body>
	
	</body>
</html>