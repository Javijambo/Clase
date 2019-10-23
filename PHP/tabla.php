<html>
<body>
<?php 
$username = "alvaro"; 
$password = "root"; 
$database = "alvaro"; 
$mysqli = new mysqli("localhost", $username, $password, $database); 
$query = "SELECT * FROM tabla1 where DNI='".$dni."'";
$dnis="SELECT dni FROM tabla1;";
if(isset($_POST[])) 
 $dni=$_POST['dni'];
 
echo '<table border="1" cellspacing="2" cellpadding="2"> 
      <tr> 
          <td> <font face="Arial">DNI</font> </td> 
          <td> <font face="Arial">Nombre</font> </td> 
          <td> <font face="Arial">Apellidos</font> </td> 
          <td> <font face="Arial">Fecha Nacimiento</font> </td> 
          <td> <font face="Arial">Opcion</font> </td> 
      </tr>';
 
if ($result = $mysqli->query($query)) {
    while ($row = $result->fetch_assoc()) {
        $field1name = $row["DNI"];
        $field2name = $row["NOMBRE"];
        $field3name = $row["APELLIDOS"];
        $field4name = $row["FECHANACIMIENTO"];
        $field5name = $row["opcion"]; 
 
        echo "<tr> 
                  <td> <input type='text' value='".$field1name."'></td> 
                  <td> <input type='text' value='".$field2name."'></td> 
                  <td> <input type='text' value='".$field3name."'></td>  
                  <td> <input type='text' value='".$field4name."'></td> 
                  <td> <input type='text' value='".$field5name."'></td> 
              </tr>";
    }
    $result->free();
    echo"<input type='submit'> ";
} 
?>
</body>
</html>