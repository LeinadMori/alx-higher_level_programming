<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Header Color on Click</title>
    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

    <div id="red_header">Click me to change header color</div>

    <header>
        <h1>This is the header</h1>
    </header>

    <script>
        // Use jQuery to handle click event on DIV#red_header
        $('#red_header').click(function() {
            // Update the text color of the <header> element to red (#FF0000)
            $('header').css('color', '#FF0000');
        });
    </script>

</body>
</html>
