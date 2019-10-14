<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action="37.php" method="post" >
        De que color es el cielo?:<input type="text" name="texto" id="texto">
        <input type="submit" value="Responder" name="boton" id="boton">
    </form>
    <?php
    if(isset($_POST["boton"])){
    $respuestac = "azul";
    $respuesta = $_POST["texto"];
    if ($respuesta == $respuestac) {
        print ("Respueta Correcta");
    } else {
        print ("Respueta Incorrecta");
    }
}
    ?>
</body>

</html>