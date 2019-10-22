<?php
# Creamos conexion
$c = mysqli_connect("localhost", "alvaro", "root");
#Seleccionamos base que vamos a utilizar
mysqli_select_db($c, "alvaro");
#Creamos Tabla

$tabla = "DAW2";
$crear = "CREATE TABLE $tabla LIKE tabla1;";
$cambiar="ALTER TABLE tabla2 ADD PRIMARY KEY(DNI)";

?>
