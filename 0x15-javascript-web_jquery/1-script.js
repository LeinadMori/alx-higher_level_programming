<!DOCTYPE html>
html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Header Color with jQuery</title>
    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

    <header>
        <h1>This is the header</h1>
    </header>

    <script>
        // Use jQuery to select the <header> element and update its text color
        $('header').css('color', '#FF0000');
    </script>

</body>
</html>
