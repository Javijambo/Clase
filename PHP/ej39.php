<?php
# Creamos conexion
$c = mysqli_connect("localhost", "alvaro", "root");
#Seleccionamos base que vamos a utilizar
$base = "alvaro";
mysqli_select_db($c, "alvaro");
#Creamos Tabla

$tabla = "DAW2";
$crear = "CREATE TABLE $tabla (Nombre VARCHAR (20) NOT NULL,Apellido1 VARCHAR (15) not null, Apellido2 VARCHAR (15) not null, Nacimiento DATE DEFAULT '1970-12-21', 
Sexo Enum('M','F') DEFAULT 'M' not null, Fumador CHAR(0) , Idiomas SET(' Castellano',' Francés','Inglés',' Alemán',' Búlgaro',' Chino'))";
if (mysqli_query($c, $crear)) {
    echo "<h2> Tabla $tabla creada con EXITO </h2><br>";
    echo $crear;
} else {
    echo "<h2> La tabla $tabla NO HA PODIDO CREARSE ";
    # echo mysql_error ($c)."<br>";
    $numerror = mysqli_errno($c);
    if ($numerror == 1050) {
        echo "porque YA EXISTE</h2>";
    }
};
#Asignamos datos a la tabla 
mysqli_query($c, "INSERT $tabla (Nombre,Apellido1,Apellido2, Nacimiento,Sexo,Fumador,Idiomas) VALUES ('David','Saez','Rodriguez','1996-03-20','M',Null,3)");
mysqli_query($c, "INSERT $tabla (Nombre,Apellido1,Apellido2, Nacimiento,Sexo,Fumador,Idiomas) VALUES ('Adrian','Stefanita','Vilcu','1996-06-20','M','',3)");
mysqli_query($c, "INSERT $tabla (Nombre,Apellido1,Apellido2, Nacimiento,Sexo,Fumador,Idiomas) VALUES ('Alvaro','Miguez','Rodriguez','1996-07-25','M','',3)");
mysqli_query($c, "INSERT $tabla (Nombre,Apellido1,Apellido2, Nacimiento,Sexo,Fumador,Idiomas) VALUES ('Ivan','Sanchez','Gonzalez','1996-11-20','M',Null,3)");
if (mysqli_errno($c) == 0) {
    echo "<h2>Registro AÑADIDO</b></H2>";
} else {
    if (mysqli_errno($c) == 1062) {
        echo "<h2>No ha podido añadirse el registro<br>Ya existe un campo con este DNI</h2>";
    } else {
        $numerror = mysqli_errno($c);
        $descrerror = mysqli_error($c);
        echo "Se ha producido un error nº $numerror que corresponde a: $descrerror  <br>";
    }
}
# cerramos la conexion 
mysqli_close($c);