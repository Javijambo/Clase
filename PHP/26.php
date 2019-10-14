<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

    <form method="post" action="26.php">
        <input type="text" name="numero" id="numero">
        <input type="submit" name="enviar" value="enviar">
    </form>
        <?php
        if(isset($_POST["enviar"]))
        {
        $num = $_POST["numero"];

        $array[0]="division exacta";
        $array[1]="uno";
        $array[2]="dos";
        $array[3]="tres";
        $array[4]="cuatro";
        $array[5]="cinco";
        $array[6]="seis";
        $array[7]="siete";
        $array[8]="ocho";
        $array[9]="nueve";
        $array[10]="diez";
        $array[11]="once";

        $resto= $num%12;
        echo $array[$resto];
        }
        
        ?>
</body>

</html>