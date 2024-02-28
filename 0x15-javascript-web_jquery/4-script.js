<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toggle Header Class</title>
  <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
  <style>
    .red {
      color: red;
      background-color: lightpink;
    }
    .green {
      color: green;
      background-color: lightgreen;
    }
  </style>
</head>
<body>
  <div id="toggle_header">Toggle Header Color</div>
  <header class="red">This is the header</header>
  <script>
    $(document).ready(function() {
      $("#toggle_header").click(function() {
        var currentClass = $("header").attr("class");
        var newClass = (currentClass === "red") ? "green" : "red";
        $("header").removeClass(currentClass).addClass(newClass);
      });
    });
  </script>
</body>
</html>
