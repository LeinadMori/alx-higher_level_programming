<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Click to Apply Class</title>
	<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
	<style>
	.red {
		color: red; /* Change these styles as desired */
		background-color: lightpink;
	}
	</style>
	</head>
	<body>
	<div id="red_header">Click Me!</div>
	<header>This is the header</header>
	<script>
	$(document).ready(function() {
		$("#red_header").click(function() {
			$("header").addClass("red");
		})

	});
  </script>
</body>
</html>
