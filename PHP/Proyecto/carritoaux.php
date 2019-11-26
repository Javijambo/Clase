<?php

$servername = "localhost";
$username = "alvaro";
$password = "alvaro";
$dbname = "alvaro";
$tabla = $_POST['tabla'];
$producto = $_POST['p'];
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
    $stock = $record['Stock'];
    // Stock:<input class="form-control" type="text" placeholder="'.$stock.'" readonly>
    echo ('
          <div class="card mt-4 mb-4 mr-4 pl-2" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 mt-2">
              <img src="img/' . $img . '" class="card-img">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                <p class="card-text">Unidades en Stock:<input id="' . $id . '" class="form-control input-sm" type="text" placeholder="' . $_COOKIE[$id] . '" readonly style="max-width: 80px; text-align:right; float:right;"></p>
                <p class="card-text"><b>' . $precio . ' €</b><button type="button"class="btn btn-info align-baseline mb-3 ml-4" onclick="comprar(' . $tabla . ',\'' . $id . '\',\'' . $marca . '\',\'' . $modelo . '\',' . $stock . ');"> Añadir al Carro</button> </p>
                </div>
            </div>
          </div>
        </div>
        ');
}
