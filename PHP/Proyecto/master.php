<?php

$servername = "localhost";
$username = "alvaro";
$password = "alvaro";
$dbname = "alvaro";

$funcion = $_POST['funcion'];
if ($funcion === 'carrito') {
  carrito($servername, $username, $password, $dbname);
} else if ($funcion === 'cookie') {
  cookie();
} elseif ($funcion === 'pedido') {
  realizarpedido($servername, $username, $password, $dbname);
} elseif ($funcion === 'login') {
  login($servername, $username, $password, $dbname);
}

//--------------------------------------------AÑADIR AL CARRITO------------------------------------------------------
function carrito($servername,$username,$password,$dbname)
{
  $tabla = $_POST['tabla'];
  $producto = $_POST['p'];
  $stock = $_POST['stock'];
  $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
  $idnuevo = "Id" . $tabla;
  $sql = "SELECT * FROM " . $tabla . " where " . $idnuevo . " = '" . $producto . "';";
  $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
  while ($record = mysqli_fetch_assoc($resultset)) {
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

function cookie()
{
  $id = $_POST['cookie'];
  $stock = $_POST['stock'];
  setcookie($id, $stock, time() + (86400 * 30), "/");
}

//============================REALIZAR EL PEDIDO=========================================
function realizarpedido($servername, $username, $password, $dbname)
{
  $usuario = $_POST['usuario'];
  $total = $_COOKIE['total'];
  $pedido = $_POST['pedido'];
  $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
  $sql = "INSERT INTO PEDIDO(cliente,IdComponentes,total) values('" . $usuario . "','" . $pedido . "'," . $total . ");";
  $result = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
  if ($result) {
    echo "success";
  } else {
    echo "error";
  }
}
function actualizarcarrito($servername, $username, $password, $dbname)
{
  $tabla = $_POST['tabla'];
  $producto = $_POST['p'];
  $nuevostock=$_POST['newstock'];
  $idnuevo = "Id" . $tabla;

  $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
  $sql = "UPDATE " . $tabla . " set stock=" . $nuevostock . " where " . $idnuevo . " = '" . $producto . "';";
  $result = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn)); 
  if($result){
    echo'success';
  }
  else{
    echo 'error';
  }
}

//===========================================LOGIN====================================================
function login($servername, $username, $password, $dbname)
{
  $usuario = $_POST['usuario'];
  $pass = $_POST['pass'];
  $booleano = false;
  $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
  $sql = "SELECT * FROM clientes where nick = '" . $usuario . "' and pass = '" . $pass . "';";
  $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
  while ($record = mysqli_fetch_assoc($resultset)) {
    $booleano = true;
    setcookie('user', $usuario, time() + (86400 * 30), "/");
  }
  echo ($booleano);
}
