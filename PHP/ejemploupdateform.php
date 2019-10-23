<!DOCTYPE html>
<html>

<head>
    <title></title>
    <link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div class="maindiv">
        <div class="divA">
            <div class="title">
                <h2>Update Data Using PHP</h2>
            </div>
            <div class="divB">
                <div class="divD">
                    <p>Click On Menu</p>
                    <?php
                    $connection = mysql_connect("localhost", "alvaro", "root", "tabla1");
                    $db = mysql_select_db("tabla1", $connection);
                    if (isset($_GET['submit'])) {
                        $dni = $_GET['dni'];
                        $name = $_GET['nombre'];
                        $apellido = $_GET['apellidos'];
                        $fecha = $_GET['fechanacimiento'];
                        $opt = $_GET['opcion'];
                        $query = mysql_query("update tabla1 set nombre='$name', apellidos='$apellido', fechanacimiento='$fecha', opcion='$opt' where employee_dni='$dni'", $connection);
                    }
                    $query = mysql_query("select * from tabla1", $connection);
                    while ($row = mysql_fetch_array($query)) {
                        echo "<b><a href='updatephp.php?update={$row['dni']}'>{$row['Nombre']}</a></b>";
                        echo "<br />";
                        
                    }
                    ?>
                </div><?php
                        if (isset($_GET['update'])) {
                            $update = $_GET['update'];
                            $query1 = mysql_query("select * from tabla1 where dni=$update", $connection);
                            while ($row1 = mysql_fetch_array($query1)) {
                                echo "<form class='form' method='get'>";
                                echo "<h2>Update Form</h2>";
                                echo "<hr/>";
                                echo "<input class='input' type='hdniden' name='ddni' value='{$row1['dni']}' />";
                                echo "<br />";
                                echo "<label>" . "Name:" . "</label>" . "<br />";
                                echo "<input class='input' type='text' name='nombre' value='{$row1['nombre']}' />";
                                echo "<br />";
                                echo "<label>" . "Email:" . "</label>" . "<br />";
                                echo "<input class='input' type='text' name='demail' value='{$row1['apellidos']}' />";
                                echo "<br />";
                                echo "<label>" . "Mobile:" . "</label>" . "<br />";
                                echo "<input class='input' type='text' name='dmobile' value='{$row1['fechanacimiento']}' />";
                                echo "<br />";
                                echo "<label>" . "Address:" . "</label>" . "<br />";
                                echo "<textarea rows='15' cols='15' name='daddress'>{$row1['opcion']}";
                                echo "</textarea>";
                                echo "<br />";
                                echo "<input class='submit' type='submit' name='submit' value='update' />";
                                echo "</form>";
                            }
                        }
                        if (isset($_GET['submit'])) {
                            echo '<div class="form" dni="form3"><br><br><br><br><br><br>
<Span>Data Updated Successfuly......!!</span></div>';
                        }
                        ?>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
    </div><?php
            mysql_close($connection);
            ?>
</body>

</html>