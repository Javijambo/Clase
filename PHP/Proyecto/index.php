<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>3GAG</title>
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

    b {
      font-size: 24px;
    }

    .barra {
      font-size: 38px;
      position: -webkit-sticky;
      /* Safari */
      position: sticky;
      top: 0;
      z-index: 2;
    }

    .btn1 {
      font-size: 38px;
    }

    .a {}
  </style>
</head>
<header>
  <h1 class="banner display-3 font-weight-bold card-title  text-center">Pagina Componentes</h1>
</header>

<body>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script>

window.localStorage.setItem("numerodeorden", 0);

function comprar(t,i,m,mo,stock) {
  numeroregistro = localStorage.getItem("numerodeorden");
  var pedido = prompt("Cuantas unidades del producto: " + m +" "+mo+" desea añadir al carrito?" );
  if (pedido<=stock) {
    numeroregistro++;
    window.localStorage.setItem("numerodeorden", numeroregistro);
      pedido = "Order." + numeroregistro;
      var valor = t + "|" + i;
      window.localStorage.setItem(pedido, valor);
      alert("Cesta:\n" + "Cantidad: unidad/es.\n" + "Producto: \n" + m +" "+mo+".\n \nPulse sobre Carro para acceder a su lista de compra.Gracias");
  }
  else{
    alert("El stock que tenemos de este producto es "+stock+"\n Por favor pida un numero de unidades dentro del disponible");
  }
}
window.localStorage.setItem("numerodeorden", 0);
function openNav() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
      numeroregistro = localStorage.getItem("numerodeorden");  
      document.getElementById("myNav").style.width = "100%";
    } else {
        document.getElementById("myNav").style.width = "18%";
    }
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

</script>
  <!-- MENU IZQUIERDO! -->
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
  <nav class="navbar navbar-expand-lg displaynavbar-light bg-dark barra">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <span class="nav-link" onclick="openNav()">Menú &#9776;</span>
        </li>

        <li class="nav-item active">
          <a class="nav-link a" href="index.php">Inicio<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link a" id="comp" href="pieza.php">Componentes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link a" href="registro.php">Registro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link a" href="login.php">Login</a>
        </li>
      </ul>
      <button class="btn btn-outline-light btn1" type="button" >Carro</button>
    </div>
  </nav>
  <div class="row justify-content-center" id="contenido">
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "alvaro";
    $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
    //++++++++++++++++++++++++++++++++++++++++++++++++TorreS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    $sql = "SELECT IdTorre,Imagen,Marca,Modelo,Precio FROM Torre;";
    $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
    $todo = '';
    while ($record = mysqli_fetch_assoc($resultset)) {
      $tabla = "'Torre'";
      $id = "'".$record['IdTorre']."'";
      $img = $record['Imagen'];
      $marca = $record['Marca'];
      $modelo = $record['Modelo'];
      $precio = $record['Precio'];
      $stock= $record['Stock'];
      $todo .= '
            <div class="card mt-4 mb-4 mr-4 pl-2" >
            <div class="row no-gutters">
              <div class="col-md-4 mt-2">
                <img src="img/' . $img . '" class="card-img">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text align-baseline"> Stock:<input class="form-control" type="text" placeholder="'.$stock.'" readonly><b >' . $precio . ' €</b> <button type="button" class="btn btn-info align-baseline mb-3 ml-4" onclick="comprar(' . $tabla . ',' . $id . ',\''.$marca.'\',\''.$modelo.'\',6);" > Añadir al Carro </button> </p>
                  </div>
              </div>
            </div>
          </div>
          ';
    }
    $sql = "SELECT IdCPU,Imagen,Marca,Modelo,Precio FROM CPU;";
    $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
    while ($record = mysqli_fetch_assoc($resultset)) {
      $tabla = "'CPU'";
      $id = $record['IdCPU'];
      $img = $record['Imagen'];
      $marca = $record['Marca'];
      $modelo = $record['Modelo'];
      $precio = $record['Precio'];
      $todo .= '
            <div class="card mb-3 mr-4" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4 mt-2">
                <img src="img/' . $img . '" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><b>' . $precio . ' €</b><button type="button"class="btn btn-info align-baseline mb-3 ml-4" onclick="comprar(' . $tabla . ',' . $id . ',\''.$marca.'\',\''.$modelo.'\');"> Añadir al Carro</button> </p>
                </div>
              </div>
            </div>
          </div>';
    }
    $sql = "SELECT IdMB,Imagen,Marca,Modelo,Precio FROM MB;";
    $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
    while ($record = mysqli_fetch_assoc($resultset)) {
      $tabla = "'PSU'";
      $id = $record['IdMB'];
      $img = $record['Imagen'];
      $marca = $record['Marca'];
      $modelo = $record['Modelo'];
      $precio = $record['Precio'];
      $todo .= '
            <div class="card mb-3 mr-4 pl-2" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4 mt-2">
                <img src="img/' . $img . '" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><b>' . $precio . ' €</b><button type="button" class="btn btn-info align-baseline mb-3 ml-4" onclick="comprar(' . $tabla . ',' . $id . ',\''.$marca.'\',\''.$modelo.'\');">  Añadir al Carro</button></p>
                </div>
              </div>
            </div>
          </div>';
    }
    $sql = "SELECT IdGPU,Imagen,Marca,Modelo,Precio FROM GPU;";
    $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
    while ($record = mysqli_fetch_assoc($resultset)) {
      $img = $record['Imagen'];
      $marca = $record['Marca'];
      $modelo = $record['Modelo'];
      $precio = $record['Precio'];
      $todo .= '
            <div class="card mb-3 mr-4 pl-2" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4 mt-2">
                <img src="img/' . $img . '" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><b>' . $precio . ' €</b><button type="button" class="btn btn-info align-baseline mb-3 ml-4" onclick="comprar(' . $tabla . ',' . $id . ',\''.$marca.'\',\''.$modelo.'\');">Añadir al Carro</button></p>
                </div>
              </div>
            </div>
          </div>';
    }
    $sql = "SELECT IdRam,Imagen,Marca,Modelo,Precio FROM Ram;";
    $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
    while ($record = mysqli_fetch_assoc($resultset)) {
      $img = $record['Imagen'];
      $marca = $record['Marca'];
      $modelo = $record['Modelo'];
      $precio = $record['Precio'];
      $todo .= '
            <div class="card mb-3 mr-4 pl-2" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4 mt-2">
                <img src="img/' . $img . '" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><b>' . $precio . ' €</b><button type="button" class="btn btn-info align-baseline mb-3 ml-4" onclick="comprar(' . $tabla . ',' . $id . ',\''.$marca.'\',\''.$modelo.'\');"> Añadir al Carro</button></p>
                </div>
              </div>
            </div>
          </div>';
    }
    $sql = "SELECT IdPSU,Imagen,Marca,Modelo,Precio FROM PSU;";
    $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
    while ($record = mysqli_fetch_assoc($resultset)) {
      $img = $record['Imagen'];
      $marca = $record['Marca'];
      $modelo = $record['Modelo'];
      $precio = $record['Precio'];
      $todo .= '
            <div class="card mb-3 mr-4 pl-2" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4 mt-2">
                <img src="img/' . $img . '" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><b>' . $precio . ' €</b> <button type="button"class="btn btn-info align-baseline mb-3 ml-4" onclick="comprar(' . $tabla . ',' . $id . ',\''.$marca.'\',\''.$modelo.'\');"> Añadir al Carro</button></p>
                </div>
              </div>
            </div>
          </div>';
    }
    $sql = "SELECT IdDisco,Imagen,Marca,Modelo,Precio FROM Disco;";
    $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
    while ($record = mysqli_fetch_assoc($resultset)) {
      $img = $record['Imagen'];
      $marca = $record['Marca'];
      $modelo = $record['Modelo'];
      $precio = $record['Precio'];
      $todo .= '
            <div class="card mb-3 mr-4 pl-2" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4 mt-2">
                <img src="img/' . $img . '" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><b>' . $precio . ' €</b> <button type="button" class="btn btn-info align-baseline mb-3 ml-4" onclick="comprar(' . $tabla . ',' . $id . ',\''.$marca.'\',\''.$modelo.'\');"> Añadir al Carro</button></p>
                </div>
              </div>
            </div>
          </div>';
    }
    $todo .= '</div>';
    echo $todo;
    ?>
  </div>
</body>

</html>