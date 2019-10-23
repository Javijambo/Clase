<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Prueba stack WAMP integrado con IDE</title>
    </head>
    <body>
        <?php
            //comentar
            # el codigo
            /*
             * me hace
             * mejor
             * desarrollador
             */            
            error_reporting(E_ALL);
            define("C1","hola mundo");
            const C2="adiós mundo";
            echo "--";
            echo C1;
            echo C2;
            echo "<br/>";
            echo __LINE__;echo "<br/>";
            echo PHP_VERSION;echo "<br/>";
            echo PHP_OS;echo "<br/>";
            $uno=1;
            $Uno=11;
            echo $uno;
            echo $Uno;
            echo "<br/>";
            $uno=23.34;
            $Uno='b';
            echo $uno;
            echo $Uno;
            echo $dos;
            echo "<br/>";
            echo (int) $uno;
            echo (int) $Uno;
            echo "<br/>";
            echo "<br/>";
            echo "Funciones is_: ";
            echo "<br/>";         
            if (is_int($uno)){
                echo "La variable es entera";
            }else{
                echo "La variable no es entera";
            }
            $uno = (int) $uno;
            echo is_int($uno);
            echo "<br/>";
            echo "Funciones de estado: ";
            echo "<br/>";         
            echo isset($uno);  //1
            echo ",";
            echo isset($nacho);  //0
            echo ",";
            echo empty($nacho);  //1
            echo ",";
            unset($uno);  //
            echo ",";
            echo isset($uno);  //0
            echo ",";
            echo var_dump($Uno);
            echo "<br/>";
            echo "Referencias: ";
            echo "<br/>";
            $a = 1234567890;
            $b = &$a;
            echo $a;
            echo "<br/>";            
            echo $b;
            echo "<br/>";
            $a = 4;
            echo $b;
            echo "<br/>";            
            $b = 5;
            echo $a;
            echo "<br/>";
            
            phpinfo();
        ?>
        <p>Continuamos ... </p>
        <?php
            echo "<br/>";
            echo "Números aleatorios: ";
            echo "<br/>";            
            mt_srand(time());
            echo mt_rand(10, 100);
            echo "<br/>";
            echo "<br/>";            
            echo "Salida PHP: ";
            echo "<br/>";            
            echo "a","B","c",'D';
            echo "<br/>";            
            echo print "a"."B";
            echo "<br/>";            
            printf("Con varios %% datos como %s y %d","CCC",12.34);
            echo "<br/>";            
            $v = sprintf("Con varios datos como %s y %f","CCC",12.34);
            $p = ["a",1.1];
            $v = vsprintf("Con varios datos como %s y %f",$p);
            echo "<br/>";
            echo "Comillas PHP: ";
            echo "$v \n".'$v \n';        
            echo "Fin";

echo "<br/>";
echo "Funciones: ";            
$t = "Nacho";

function doble($valor){
    $dentro = true;
    echo $dentro;  //1
    echo "<br/>";
    $valor++;
    return 2*$valor;
}

function dobleReferencia(&$valor){
    $valor++;
    return 2*$valor;
}

function negrita($texto){
    echo "<strong>$texto<strong>$t";
}

echo "<br/>";
echo doble(4);
echo $dentro;
echo "<br/>";
negrita("Nacho");
echo "<br/>";        
//echo dobleReferencia(4);  //
$v = 4;
echo dobleReferencia($v);
echo "<br/>";
echo $v;
echo "<br/>";
echo doble($v);
echo "<br/>";
echo $v;
global $vg;

        ?>
    </body>
</html>
