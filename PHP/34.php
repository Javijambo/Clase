<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <?php
    $A = 123;
    $B = 123;
    echo "valor 1="+$A+" valor 2="+$B;
    echo '<br>';
    if($A==$B)
    {
        echo "Los dos valores son iguales";
        echo '<br>';
    }
    else{
        echo '<br>';
        echo 'los valores son distintos';
    }

    if($A===$B)
    {
        echo "Los dos valores son iguales y del mismo tipo";
        echo '<br>';
    }
    else{
        echo 'los valores son distintos';
        echo '<br>';
    }

    
    ?>
</body>

</html>