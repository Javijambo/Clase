<?php

$servername = "localhost";
$username = "alvaro";
$password = "alvaro";
$dbname = "alvaro";
$tabla = $_POST['tabla'];
$producto = $_POST['p'];
$stock=$_POST['stock'];
$conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
//++++++++++++++++++++++++++++++++++++++++++++++++TorreS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
$idnuevo="Id".$tabla;
$sql = "SELECT * FROM ".$tabla." where ".$idnuevo." = '".$producto."';";
$resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
$todo = '';
while ($record = mysqli_fetch_assoc($resultset)) {
    $id = $record['IdTorre'];
    $img = $record['Imagen'];
    $marca = $record['Marca'];
    $modelo = $record['Modelo'];
    $precio = $record['Precio'];
    echo (' <tr>
    <th scope="row"> <img src="img/'.$img.'" width="20%" ></th>
      <td>'.$marca.'</td>
      <td>'.$modelo.'</td>
      <td>'.$precio.'€</td>
      <td>'.$stock.'</td>
    </tr>
    ');
}
