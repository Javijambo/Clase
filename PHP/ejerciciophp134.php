<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ej13</title>
</head>

<body>
    <?php
    define("cchar", "cadena");
    define("cnum", 22);
       echo "(echo)Valor de la constante cadena: ", cchar, "<BR>";
       echo "(echo)Valor de la constante numerica: ", cnum ,"<BR>";
       print "(print)Valor de la constante Cadena: ". cchar ."<BR>";
       print "(print)Valor de la constante Numerica: ". cnum ."<BR>";
       echo "(echo)Ambos balores separados por espacio:",cchar," ",cnum,"<BR>";
       print "(print)Ambos balores separados por espacio:".cchar." ".cnum;
    ?>
</body>

</html>