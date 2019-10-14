<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action="color.php" method="post">
        <input type="color" name="color" id="color">
        <input type="submit" name="boton">
    </form>
    <?php
    if (isset($_POST["boton"])) {
        $_SESSION["c"] = $_POST["color"];
    }
    ?>
</body>

</html>