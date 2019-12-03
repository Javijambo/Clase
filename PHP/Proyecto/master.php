<?php

$funcion = $_POST['funcion'];
if($funcion==='carrito'){
  carrito();
}
else if($funcion==='cookie'){
  cookie();
}
elseif($funcion==='pedido'){
  realizarpedido();
}
elseif($funcion==='login'){
  login();
}
function carrito()
{
  $servername = "localhost";
  $username = "alvaro";
  $password = "alvaro";
  $dbname = "alvaro";
  $tabla = $_POST['tabla'];
  $producto = $_POST['p'];
  $stock = $_POST['stock'];
  $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
  //++++++++++++++++++++++++++++++++++++++++++++++++TorreS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  $idnuevo = "Id" . $tabla;
  $sql = "SELECT * FROM " . $tabla . " where " . $idnuevo . " = '" . $producto . "';";
  $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
  $todo = '';
  while ($record = mysqli_fetch_assoc($resultset)) {
    $id = $record['IdTorre'];
    $img = $record['Imagen'];
    $marca = $record['Marca'];
    $modelo = $record['Modelo'];
    $precio = $record['Precio'];
    echo (' <tr>
    <th scope="row"> <img src="img/' . $img . '" width="20%" ></th>
      <td>' . $marca . '</td>
      <td>' . $modelo . '</td>
      <td>' . $precio . '€</td>
      <td>' . $stock . '</td>
    </tr>
    ');
  }
}

function cookie(){
  $id = $_POST['cookie'];
  $stock = $_POST['stock'];
  setcookie($id, $stock, time() + (86400 * 30), "/");
}


function realizarpedido(){
  $servername = "localhost";
  $username = "alvaro";
  $password = "alvaro";
  $dbname = "alvaro";
  $tabla = $_POST['tabla'];
  $producto = $_POST['p'];
  $nuevostock=$_POST['newstock'];
  $usuario=$_POST['usuario'];
  $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
  //++++++++++++++++++++++++++++++++++++++++++++++++TorreS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  $idnuevo="Id".$tabla;
  $sql = "UPDATE ".$tabla." set stock=".$nuevostock." where ".$idnuevo." = '".$producto."';";
  mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
  echo($sql);
  
  
  $sql2="INSERT INTO PEDIDO() values(".$usuario.");";
}


function login(){
  $servername = "localhost";
  $username = "alvaro";
  $password = "alvaro";
  $dbname = "alvaro";
  $usuario = $_POST['usuario'];
  $pass = $_POST['pass'];
  $booleano=false;
  $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
  //++++++++++++++++++++++++++++++++++++++++++++++++TorreS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  $sql = "SELECT * FROM clientes where nick = '" . $usuario . "' and pass = '" . $pass . "';";
  $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
  while ($record = mysqli_fetch_assoc($resultset)) {
    $booleano=true;
    setcookie('user', $usuario, time() + (86400 * 30), "/");
  }
  echo($booleano);
}
?>