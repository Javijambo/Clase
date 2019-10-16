<?php
# asignamos a una variable el nombre de la base de datos
$base = "alvaro";
# esta otra recoge el nombre de la tabla
$tabla = "ejemplo1";
# establecemos la conexión con el servidor
$c = mysqli_connect("127.0.0.1", "alvaro", "root") or die("Imposible
conectar");
# seleccionamos la base de datos
mysqli_select_db($c, $base);
#ejecutamos mysqli_query llamando a la sentencia
# SHOW FIELDS
$resultado = mysqli_query($c, "SHOW FIELDS from $tabla");
# determinamos el número campos de la tabla
$numero = mysqli_num_rows($resultado);
# Presentamos ese valor númerico
print "La tabla tiene $numero campos<br>";
# ejecutamos los bucles que comentamos al margen
while ($v = mysqli_fetch_row($resultado)) {
    foreach ($v as $valor) {
        echo $valor, "<br>";
    }
}
#####################################################################
# REPETIMOS LA CONSULTA ANTERIOR USANDO AHORA LA #
# función mysqli_fecth_array #
#####################################################################
#tenemos que VOLVER a EJECUTAR LA SENTENCIA mysqli
# porque el puntero está AL FINAL de la ultima línea
# de los resultados
$resultado = mysqli_query($c, "SHOW FIELDS from $tabla");
print("<BR> Los resultados con mysqli_fech_array<br>");
while ($v = mysqli_fetch_array($resultado)) {
    foreach ($v as $clave => $valor) {
        print("El indice es: " . $clave . " y el valor es: " . $valor . "<br>");
    }
}
################### la tercera posibilidad comentada
####################################################
$resultado = mysqli_query($c, "SHOW FIELDS from $tabla");
$contador = 0;
while ($v = mysqli_fetch_array($resultado)) {
    foreach ($v as $indice1 => $valor1) {
        if (is_int($indice1)) {
            $numerica[$contador][$indice1] = $valor1;
        } else {
            $asociativa[$contador][$indice1] = $valor1;
        }
    }
    $contador++;
}
/* vamos a leer los array resultantes
 empecemos por el numerico que al tener
 dos indices requiere dos foreach anidados
 el valor del primero será un array
 que extraemos en el segundo */
foreach ($numerica as $i => $valor) {
    foreach ($valor as $j => $contenido) {
        print("numerico[" . $i . "][" . $j . "]=" . $contenido . "<br>");
    }
}
foreach ($asociativa as $i => $valor) {
    foreach ($valor as $j => $contenido) {
        print("asociativo[" . $i . "][" . $j . "]=" . $contenido . "<br>");
    }
}

# liberamos memoria borrando de ella el resultado
mysqli_free_result($resultado);
# cerramos la conexion con el servidor
mysqli_close($c);
