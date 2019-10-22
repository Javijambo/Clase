<?php
$c=mysqli_connect("127.0.0.1","alvaro","root") or die ("Imposible
conectar");
mysqli_select_db ($c,"alvaro");
$crear="CREATE TABLE IF NOT EXISTS ";
$crear .="tabla1 ";
$crear .="( ";
$crear .="DNI VARCHAR(10) , ";
$crear .="NOMBRE VARCHAR(20), ";
$crear .="APELLIDOS VARCHAR(30), ";
$crear .="FECHANACIMIENTO DATE, ";
$crear .="opcion ENUM('Repetidor','No Repetidor') ";
$crear .=")";
if(mysqli_query($c,$crear)){
print "Se ha creado la base de datos<br>";
print "La sentencia MySQL podríamos haberla escrito asi:<br>";
print $crear;
}else{
print "Se ha producido un error al crear la tabla";
}
?>