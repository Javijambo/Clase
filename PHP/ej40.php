<html>

<head>
    <meta charset="UTF-8">
    <title>Formulario para añadir datos a la tabla demo42</title>
</head>

<body>
    <center>
        <h2>Tabla «demo42»<br>Formulario de altas<h2>
    </center>

    <!-- creamos un formulario en el que recogeremos los valores
     a añadir a la base de datos demo4
     utilizaremos los mismos nombres de variables que en aquel
     - por razones de comodidad- anteponiendoles p_ //-->

    <form name="altas" method="POST" action="ej40.php">
        <table bgcolor="#E9FFFF" align=center border=2>
 
            <td align="right">Escribe tu D.N.I.: </td>
            <td align="left"> <input type="text" name="p_v1" value="" size=8></td>
            <tr>
                <td align="right">Nombre....: </td>
                <td align="left"> <input type="text" name="p_v2" value="" size=20></td>
            <tr>
                <td align="right">Apellidos: </td>
                <td align="left"> <input type="text" name="p_v3" value="" size=15></td>
            <tr>
                <td align="right">Fecha de nacimiento: </td>

                <td align="left"> <select name="p_v5[2]">

                        <?php for ($i = 1; $i < 32; $i++) {
                            echo "<option>$i</option>";
                        }
                        ?>
                    </select> de

                    <select name="p_v5[1]">
                        <?php for ($i = 1; $i < 13; $i++) {
                            echo "<option>$i</option>";
                        }
                        ?>
                    </select>

                    <select name="p_v5[0]">
                        <?php for ($i = 1935; $i < 2029; $i++) {
                            echo "<option>$i</option>";
                        }
                        ?>
            <tr>
                <td align="right">Repetidor.:</td>
                <td align="left"> <input type="radio" name="p_v6" value="Repetidor" checked> Si <input type="radio" name="p_v6" value="No Repetidor"> No </td>
            <tr>
                <td align=center><input type=submit name="enviar" value="Enviar"></td>
                <td align=center><input type=reset value="Borrar"></td>
    </form>
    </table>
    <?php
    if (isset($_POST["enviar"])) {
        $base = "alvaro";
        $tabla = "tabla1";
        $v1 = $_POST['p_v1'];
        $v2 = $_POST['p_v2'];
        $v3 = $_POST['p_v3'];
        foreach ($_POST['p_v5'] as $valor) {
            $nacimiento[] = $valor;
        }
        $v5 = $nacimiento[2] . "-" . $nacimiento[1] . "-" . $nacimiento[0];
        $v6 = $_POST['p_v6'];
        $c = mysqli_connect("localhost", "alvaro", "root");
        #asiganamos la conexión a una base de datos determinada
        mysqli_select_db($c, $base);
        mysqli_query($c, "INSERT $tabla (DNI,NOMBRE,APELLIDOS,FECHANACIMIENTO,opcion) VALUES ('$v1','$v2','$v3','$v5','$v6')");
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
        mysqli_close($c);
    }
    ?>
</body>

</html>