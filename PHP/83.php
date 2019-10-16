<?php

$c = mysqli_connect("127.0.0.1", "alvaro", "root") or die("Imposible
conectar");
mysqli_select_db($c, "alvaro");
$crear="
use alvaro;
CREATE TABLE IF NOT EXISTS 
demo4 
( 
Contador TINYINT(8) ZEROFILL auto_increment, 
DNI CHAR(8), 
Nombre CHAR(20), 
Apellido1 char(15),
Nacimiento DATE DEFAULT '1970-12-21', 
Hora TIME DEFAULT '00:00:00', 
Sexo ENUM('M','F') DEFAULT 'M', 
Fumador CHAR(0), 
Idiomas SET('Castellano', 'Francés','Inglés', 'Alemán', 'Búlgaro', 'Chino'),
Indice_primario CHAR(8),
Indice_aux CHAR(8), 
PRIMARY KEY (Contador,DNI));
";

if (mysqli_query($c, $crear)) {
    print "Se ha creado la base de datos<br>";
    print "La sentencia MySQL podríamos haberla escrito asi:<br>";
    print $crear;
} else {
    print "Se ha producido un error al crear la tabla";
}
