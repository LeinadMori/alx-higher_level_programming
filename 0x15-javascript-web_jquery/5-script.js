<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Click to Add Item</title>
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>
  <div id="add_item">Click to Add Item</div>
  <ul class="my_list">
    <!-- Existing list items go here -->
  </ul>

  <script>
    $(document).ready(function() {
      $("#add_item").click(function() {
        // Create a new li element with the text "Item"
        var newListItem = $("<li>").text("Item");

        // Append the new li element to the UL with class "my_list"
        $("ul.my_list").append(newListItem);
      });
    });
  </script>
</body>
</html>
