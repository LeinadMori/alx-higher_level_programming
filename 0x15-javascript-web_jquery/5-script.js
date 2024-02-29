$(document).ready(function() {
	$("#add_item").click(function() {
		// Create a new li element with the text "Item"
        	var newListItem = $("<li>").text("Item");
		// Append the new li element to the UL with class "my_list"
		// $("ul.my_list").append(newListItem);
	});
});
