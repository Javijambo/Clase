<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>3GAG</title>
</head>
<header>
    <h1 class="banner display-3 font-weight-bold card-title text-center">Pagina Componentes</h1>
</header>

<body>
    <script>
        function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }
    </script>
    <!-- MENU IZQUIERDO! -->
    <section id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <article class="overlay-content"> <a id="index" href="index.php">Inicio</a>
            <a id="comp" href="pieza.php">Componentes</a>
            <a id="registro" href="registro.php">Registro</a>
            <a id="login" href="login.php">Login</a>
            <a id="carrito" href="carrito.php">Ver Carrito</a>
    </section>
    </article>

    <section class="menucategorias">
        <a id="mb" href="#">Placas Base</a>
        <a id="cpu" href="#">Procesadores</a>
        <a id="ram" href="#">Ram</a>
        <a id="gpu" href="#">Graficas</a>
        <a id="psu" href="#">Fuente de Alimentacion</a>
        <a id="ssd" href="#">Discos Duros</a>
        <a id="tower" href="#">Torres</a>
    </section>
    <div class="container-fluid mt-4 ">
        <div class="row justify-content-center" id="contenido">
            <?php
            $servername = "localhost";
            $username = "alvaro";
            $password = "alvaro";
            $dbname = "alvaro";
            $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());

            //++++++++++++++++++++++++++++++++++++++++++++++++CAJAS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
            $sql = "SELECT Imagen,Marca,Modelo,Precio FROM caja;";
            $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
            $todo = '';
            while ($record = mysqli_fetch_assoc($resultset)) {
                $img = $record['Imagen'];
                $marca = $record['Marca'];
                $modelo = $record['Modelo'];
                $precio = $record['Precio'];
                $todo .= '
           
            <div class="card mb-4 mr-4 pl-2"  style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4 mt-2">
                <img src="img/' . $img . '" class="card-img">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title text-center">' . $marca . ' ' . $modelo . '</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><b>' . $precio . ' €</b></p>
                </div>
              </div>
            </div>
          </div>
          ';
            }

            $sql = "SELECT Imagen,Marca,Modelo,Precio FROM Procesador;";
            $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
            while ($record = mysqli_fetch_assoc($resultset)) {
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
                  <p class="card-text"><b>' . $precio . ' €</b></p>
                </div>
              </div>
            </div>
          </div>';
            }
            $sql = "SELECT Imagen,Marca,Modelo,Precio FROM Placa_base;";
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
                  <p class="card-text"><b>' . $precio . ' €</b></p>
                </div>
              </div>
            </div>
          </div>';
            }
            $sql = "SELECT Imagen,Marca,Modelo,Precio FROM Grafica;";
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
                  <p class="card-text"><b>' . $precio . ' €</b></p>
                </div>
              </div>
            </div>
          </div>';
            }
            $sql = "SELECT Imagen,Marca,Modelo,Precio FROM Ram;";
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
                  <p class="card-text"><b>' . $precio . ' €</b></p>
                </div>
              </div>
            </div>
          </div>';
            }
            $sql = "SELECT Imagen,Marca,Modelo,Precio FROM Fuente_de_Alimentacion;";
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
                  <p class="card-text"><b>' . $precio . ' €</b></p>
                </div>
              </div>
            </div>
          </div>';
            }
            $sql = "SELECT Imagen,Marca,Modelo,Precio FROM Disco;";
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
                  <p class="card-text"><b>' . $precio . ' €</b></p>
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