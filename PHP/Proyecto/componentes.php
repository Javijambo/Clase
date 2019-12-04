<?php
$i=0;

$servername = "localhost";
$username = "alvaro";
$password = "alvaro";
$dbname = "alvaro";
$conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
//++++++++++++++++++++++++++++++++++++++++++++++++TorreS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
$sql = "SELECT * FROM Torre;";
$resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
$todo = '';
while ($record = mysqli_fetch_assoc($resultset)) {
  $tabla = "'Torre'";
  $id = $record['IdTorre'];
  $img = $record['Imagen'];
  $marca = $record['Marca'];
  $modelo = $record['Modelo'];
  $precio = $record['Precio'];
  $stock = $record['Stock'];
  if (!isset($_COOKIE[$id])) {
    setcookie($id, $stock, time() + (86400 * 30), "/");
  }
  // Stock:<input class="form-control" type="text" placeholder="'.$stock.'" readonly>
  $todo .= '
          <div class="card mt-4 mb-4 mr-4 pl-2" style="max-width: 600px;">
          <div class="row no-gutters">
            <div class="col-md-4 mt-2">
              <img src="img/' . $img . '" class="card-img">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                <p class="card-text">Unidades en Stock:<input id="' . $id . '" class="form-control form-control-sm" type="text" placeholder="' . $_COOKIE[$id] . '" readonly style="max-width: 80px; text-align:right; float:right;"></p>
                <p class="card-text"><b>' . $precio . ' €</b><button type="button"class="btn btn-info align-baseline mb-3 ml-4" onclick="this.disabled=true;comprar(' . $tabla . ',\'' . $id   . '\',\'' . $marca . '\',\'' . $modelo . '\',' . $precio .');"> Añadir al Carro</button> </p>
                </div>
            </div>
          </div>
        </div>
        ';
}

$sql = "SELECT * FROM CPU;";
$resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
while ($record = mysqli_fetch_assoc($resultset)) {
  $tabla = "'CPU'";
  $id = $record['IdCPU'];
  $img = $record['Imagen'];
  $marca = $record['Marca'];
  $modelo = $record['Modelo'];
  $precio = $record['Precio'];
  $stock = $record['Stock'];
  if (!isset($_COOKIE[$id])) {
    setcookie($id, $stock, time() + (86400 * 30), "/");
  }
  $todo .= '
          <div class="card mt-4 mb-4 mr-4 pl-2" style="max-width: 600px;">
          <div class="row no-gutters">
            <div class="col-md-4 mt-2">
              <img src="img/' . $img . '" class="card-img">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                <p class="card-text">Unidades en Stock:<input id="' . $id . '" class="form-control form-control-sm" type="text" placeholder="' . $_COOKIE[$id] . '" readonly style="max-width: 80px; text-align:right; float:right;"></p>
                <p class="card-text"><b>' . $precio . ' €</b><button type="button"class="btn btn-info align-baseline mb-3 ml-4" onclick="this.disabled=true;comprar(' . $tabla . ',\'' . $id . '\',\'' . $marca . '\',\'' . $modelo . '\',' . $precio .');"> Añadir al Carro</button> </p>
                </div>
            </div>
          </div>
        </div>
        ';
}
$sql = "SELECT * FROM MB;";
$resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
while ($record = mysqli_fetch_assoc($resultset)) {
  $tabla = "'MB'";
  $id = $record['IdMB'];
  $img = $record['Imagen'];
  $marca = $record['Marca'];
  $modelo = $record['Modelo'];
  $precio = $record['Precio'];
  $stock = $record['Stock'];
  
  if (!isset($_COOKIE[$id])) {
    setcookie($id, $stock, time() + (86400 * 30), "/");
  }
  $todo .= '
  <div class="card mt-4 mb-4 mr-4 pl-2" style="max-width: 600px;">
  <div class="row no-gutters">
    <div class="col-md-4 mt-2">
      <img src="img/' . $img . '" class="card-img">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
        <p class="card-text">Unidades en Stock:<input id="' . $id . '" class="form-control form-control-sm" type="text" placeholder="' . $_COOKIE[$id] . '" readonly style="max-width: 80px; text-align:right; float:right;"></p>
        <p class="card-text"><b>' . $precio . ' €</b><button type="button"class="btn btn-info align-baseline mb-3 ml-4" onclick="this.disabled=true;comprar(' . $tabla . ',\'' . $id . '\',\'' . $marca . '\',\'' . $modelo . '\',' . $precio .');"> Añadir al Carro</button> </p>
        </div>
    </div>
  </div>
</div>
';
}
$sql = "SELECT * FROM GPU;";
$resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
while ($record = mysqli_fetch_assoc($resultset)) {
  $tabla = "'GPU'";
  $id = $record['IdGPU'];
  $img = $record['Imagen'];
  $marca = $record['Marca'];
  $modelo = $record['Modelo'];
  $precio = $record['Precio'];
  $stock = $record['Stock'];
  if (!isset($_COOKIE[$id])) { setcookie($id, $stock, time() + (86400 * 30), "/"); }
  $todo .= '
          <div class="card mt-4 mb-4 mr-4 pl-2" style="max-width: 600px;">
          <div class="row no-gutters">
            <div class="col-md-4 mt-2">
              <img src="img/' . $img . '" class="card-img">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                <p class="card-text">Unidades en Stock:<input id="' . $id . '" class="form-control form-control-sm" type="text" placeholder="' . $_COOKIE[$id] . '" readonly style="max-width: 80px; text-align:right; float:right;"></p>
                <p class="card-text"><b>' . $precio . ' €</b><button type="button"class="btn btn-info align-baseline mb-3 ml-4" onclick="this.disabled=true;comprar(' . $tabla . ',\'' . $id . '\',\'' . $marca . '\',\'' . $modelo . '\',' . $precio .');"> Añadir al Carro</button> </p>
                </div>
            </div>
          </div>
        </div>
        ';
}

$sql = "SELECT * FROM Ram;";
$resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
while ($record = mysqli_fetch_assoc($resultset)) {
  $tabla = "'Ram'";
  $id = $record['IdRam'];
  $img = $record['Imagen'];
  $marca = $record['Marca'];
  $modelo = $record['Modelo'];
  $precio = $record['Precio'];
  $stock = $record['Stock'];
  if (!isset($_COOKIE[$id])) {
    setcookie($id, $stock, time() + (86400 * 30), "/");
  }
  $todo .= '
  <div class="card mt-4 mb-4 mr-4 pl-2" style="max-width: 600px;">
  <div class="row no-gutters">
    <div class="col-md-4 mt-2">
      <img src="img/' . $img . '" class="card-img">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
        <p class="card-text">Unidades en Stock:<input id="' . $id . '" class="form-control form-control-sm" type="text" placeholder="' . $_COOKIE[$id] . '" readonly style="max-width: 80px; text-align:right; float:right;"></p>
        <p class="card-text"><b>' . $precio . ' €</b><button type="button"class="btn btn-info align-baseline mb-3 ml-4" onclick="this.disabled=true;comprar(' . $tabla . ',\'' . $id . '\',\'' . $marca . '\',\'' . $modelo . '\',' . $precio .');"> Añadir al Carro</button> </p>
        </div>
    </div>
  </div>
</div>
';
}
$sql = "SELECT * FROM PSU;";
$resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
while ($record = mysqli_fetch_assoc($resultset)) {
  $tabla = "'PSU'";
  $id = $record['IdPSU'];
  $img = $record['Imagen'];
  $marca = $record['Marca'];
  $modelo = $record['Modelo'];
  $precio = $record['Precio'];
  $stock = $record['Stock'];
  if (!isset($_COOKIE[$id])) {
    setcookie($id, $stock, time() + (86400 * 30), "/");
  }
  $todo .= '
  <div class="card mt-4 mb-4 mr-4 pl-2" style="max-width: 600px;">
  <div class="row no-gutters">
    <div class="col-md-4 mt-2">
      <img src="img/' . $img . '" class="card-img">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
        <p class="card-text">Unidades en Stock:<input id="' . $id . '" class="form-control form-control-sm" type="text" placeholder="' . $_COOKIE[$id] . '" readonly style="max-width: 80px; text-align:right; float:right;"></p>
        <p class="card-text"><b>' . $precio . ' €</b><button type="button"class="btn btn-info align-baseline mb-3 ml-4" onclick="this.disabled=true;comprar(' . $tabla . ',\'' . $id . '\',\'' . $marca . '\',\'' . $modelo . '\',' . $precio .');"> Añadir al Carro</button> </p>
        </div>
    </div>
  </div>
</div>
';
}
$sql = "SELECT * FROM Disco;";
$resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
while ($record = mysqli_fetch_assoc($resultset)) {
  $tabla = "'Disco'";
  $id = $record['IdDisco'];
  $img = $record['Imagen'];
  $marca = $record['Marca'];
  $modelo = $record['Modelo'];
  $precio = $record['Precio'];
  $stock = $record['Stock'];
  if (!isset($_COOKIE[$id])) {
    setcookie($id, $stock, time() + (86400 * 30), "/");
  }
  $todo .= '
  <div class="card mt-4 mb-4 mr-4 pl-2" style="max-width: 600px;">
  <div class="row no-gutters">
    <div class="col-md-4 mt-2">
      <img src="img/' . $img . '" class="card-img">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
        <p class="card-text">Unidades en Stock:<input id="' . $id . '" class="form-control form-control-sm" type="text" placeholder="' . $_COOKIE[$id] . '" readonly style="max-width: 80px; text-align:right; float:right;"></p>
        <p class="card-text"><b>' . $precio . ' €</b><button type="button"class="btn btn-info align-baseline mb-3 ml-4" onclick="this.disabled=true;comprar(' . $tabla . ',\'' . $id . '\',\'' . $marca . '\',\'' . $modelo . '\',' . $precio .');"> Añadir al Carro</button> </p>
        </div>
    </div>
  </div>
</div>
';
}
$todo .= '</div>';
$carrito="";
if(isset($_COOKIE['user'])){
  $carrito='
  <button class="btn btn-outline-light ml-3" type="button" onclick="cerarsesion();">Cerrar Sesión</button>
    <button class="btn btn-outline-light ml-3" type="button" onclick=" window.location.href=\'carrito.html\';">Carrito</button>
    ';
}
else{
  $carrito='
      <button class="btn btn-outline-light ml-3" type="button" onclick="window.location.href=\'login.html\';">Login</button>
      <button class="btn btn-outline-light ml-3" type="button" onclick=" window.location.href=\'registro.html\';">Registro</button>
      ';
}
echo('<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PC</title>
  <style>
    .overlay {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 5;
      top: 0;
      left: 0;
      background-color: rgb(0, 0, 0);
      background-color: rgba(0, 0, 0, 0.9);
      overflow-x: hidden;
      transition: 0.5s;
    }

    .overlay-content {
      position: relative;
      top: 10%;
      width: 80%;
      text-align: center;
      margin-top: 30px;
    }

    .overlay a {
      padding: 8px;
      text-decoration: none;
      font-size: 36px;
      color: #818181;
      display: block;
      transition: 0.3s;
    }

    .overlay a:hover,
    .overlay a:focus {
      color: #f1f1f1;
    }

    .overlay .closebtn {
      position: absolute;
      top: 20px;
      right: 45px;
      font-size: 60px;
    }

    @media screen and (max-height: 450px) {
      .overlay a {
        font-size: 20px
      }

      .overlay .closebtn {
        font-size: 40px;
        top: 15px;
        right: 40px;
      }
    }


  </style>
</head>
<header>
  <h1 class="banner display-3 font-weight-bold card-title  text-center">Catálogo</h1>
</header>

<body>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <!-- MENU IZQUIERDO! -->
  <script src="https://code.jquery.com/jquery-latest.min.js"></script>
  <script src="jscript.js"></script>
  <section id="myNav" class="overlay">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> &times;</a>
    <article class="overlay-content">
      <a id="mb" href="#">Placas Base</a>
      <a id="cpu" href="#">CPUes</a>
      <a id="ram" href="#">Ram</a>
      <a id="gpu" href="#">Graficas</a>
      <a id="psu" href="#">Fuentes de<br>Alimentacion</a>
      <a id="ssd" href="#">Discos Duros</a>
      <a id="tower" href="#">Torres</a>
    </article>
  </section>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <a class="nav-link a" href="index.php">Inicio<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link a" id="comp" href="componentes.php">Componentes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link a" href="admin.php">Acceso Administrador</a>
        </li>
        <li class="nav-item">
        <a class="nav-link a" id="comp" href="usuario.html">Zona Usuario</a>
    </li>
      </ul>
      '.$carrito.'
    </div>
  </nav>
  <div class="row justify-content-center container-fluid" id="contenido">
    '.$todo.'
  </div>
</body>

</html>
');
?>