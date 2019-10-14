
<?php
	$operando1 = $_GET['operando1'];
	$operando2 = $_GET['operando2'];

		$solucion = $operando1 + $operando2;
		$solucion2 = $operando1 - $operando2;
		$solucion3 = $operando1 * $operando2;
        $solucion4 = $operando1 / $operando2;
        
    echo "La suma es: ".$solucion;
    echo "La resta es: ".$solucion2;
    echo "La multiplicacion es: ".$solucion3;
    echo "La division es: ".$solucion4;
?>