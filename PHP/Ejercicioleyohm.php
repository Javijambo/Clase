<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action="Ejercicioleyohm.php" method="post">
        <p>Intensidad: <input type="text" name="i"> </p>
        <p>Resistencia: <input type="text" name="r"> </p>
        <p>Voltaje: <input type="text" name="v"> </p>
        <p><button type="submit" name="submit2">Enviar</button></p>
    </form>
    <?php
    if (isset($_POST["submit2"])) {
        $V = $_POST["v"];
        $R = $_POST["r"];
        $I = $_POST["i"];

        if (empty($V)) {
            echo "V equivale a :", $I * $R;
        } else if (empty($R)) {
            echo "R equivale a :", $V / $I;
        } else if (empty($I)) {
            echo "I equivale a :", $V / $R;
        }
    }
    ?>
</body>

</html>