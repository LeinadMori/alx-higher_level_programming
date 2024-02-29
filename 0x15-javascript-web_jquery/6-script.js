<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Click to Update Header</title>
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>
  <div id="update_header">Click to Update Header</div>
  <header>This is the original header</header>

  <script>
    $(document).ready(function() {
      $("#update_header").click(function() {
        // Update the text of the header to "New Header!!!"
        $("header").text("New Header!!!");
      });
    });
  </script>
</body>
</html>
