<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="istyle.css">
    <title>3GAG</title>
</head>
<header> 
<h1 class="banner display-1 font-weight-bold card-title text-center">3GAG</h1>
</header>
<body class="bg-dark">
    <!-- Menu Izquierdo-->

    <?php
    //funcion para cambiar de categoria
    function categoria($categoria)
    {
        $servername = "localhost";
        $username = "alvaro";
        $password = "alvaro";
        $dbname = "pc";
        $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection fai   led: " . mysqli_connect_error());
        $sql = "SELECT id,titulo, imagen, categoria, usuario, mg FROM memes where categoria='" . $categoria . "';";
        $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
        $todo = '';
        while ($record = mysqli_fetch_assoc($resultset)) {
            $imagen = $record['imagen'];
            $titulo = $record['titulo'];
            $mg = (int) $record['mg'];
            $user = $record['usuario'];
            $id = $record['id'];
            $todo = $todo . '
                <div class="card mt-5 ">
                    <h1 class=" display-4 font-weight-bold card-title text-center">' . $titulo . '</h1>
                    <img class="card-img-top " src="imagenes/' . $imagen . '" alt="Card image cap">
                    <p class="texto card-text mt-3 text-white ">Usuario:' . $user . '
                        Likes:' . $mg . '
                        <button class="btn btn-dark text-white mr-5 float-right mt-2" onclick="mg(' . $id . ',' . $mg . ')">Me gusta</button>
                        <button class="btn btn-dark text-white text-left float-right mr-5 mb-3 mt-2" onclick="nomg(' . $id . ',' . $mg . ')" > No me gusta</button></p>
                </div>';
        }
        echo '<script type="text/javascript">location.reload(true);</script>';
        return $todo;
    }


    //boton dar me gusta
    function mg($id, $mg)
    {
        $mg2 = $mg + 1;
        $servername = "localhost";
        $username = "3gag";
        $password = "3gag";
        $dbname = "3gag";
        $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
        $sql = "Update memes set mg=" . $mg2 . " where id='" . $id . "';";
        echo '<script type="text/javascript">location.reload(true);</script>';
        return mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
    }
    //boton no me gusta
    function nomg($id, $mg)
    {
        $mg2 = $mg - 1;
        $servername = "localhost";
        $username = "3gag";
        $password = "3gag";
        $dbname = "3gag";
        $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
        $sql = "Update memes set mg=" . $mg2 . " where id='" . $id . "';";
        echo '<script type="text/javascript">location.reload(true);</script>';
        return mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
    }
    ?>

    <!-- MENU IZQUIERDO! -->
    <ul>
        <li><a class="active" href="index.php">Inicio</a></li>
        <?php
        if(isset($_COOKIE["login"])){
            echo '<li><a href="subirmeme.php">Subir meme</a></li>
            <li><a href="logout.php">Logout</a></li>';
        }else{
            echo '<li><a href="login.php">Login</a></li>
            <li><a href="registro.php">Registrarse</a></li>';
        }
        ?>
        
        
    </ul>
    <div class="sidenav">
        <a href="#">Spain memes</a>
        <a href="#">Funny memes</a>
        <a href="#">Animals memes</a>
        <a href="#">Anime & Manga </a>
        <a href="#">Comic memes</a>
        <a href="#">Car memes</a>
        <a href="#">Cosplay memes</a>
        <a href="#">Ask 3GAG</a>
        <a href="#">Food & Drinks </a>
        <a href="#">Football memes</a>
    </div>
    <div class="todo bg-dark">
        <?php
        $servername = "localhost";
        $username = "3gag";
        $password = "3gag";
        $dbname = "3gag";
        $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
        $sql = "SELECT id,titulo, imagen, categoria, usuario, mg FROM memes";
        $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
        while ($record = mysqli_fetch_assoc($resultset)) {
            $imagen = $record['imagen'];
            $titulo = $record['titulo'];
            $mg = $record['mg'];
            $user = $record['usuario'];
            $id = $record['id'];
            ?>
            <div class="card mt-5 ">
                <h1 class=" display-4 font-weight-bold card-title text-center"><?php echo $titulo; ?></h1>
                <img class="card-img-top " src='imagenes/<?php echo $imagen; ?>' alt="Card image cap">
                <p class="texto card-text mt-3 text-white ">Usuario: <?php echo $user ?>
                    Likes:<?php echo $mg; ?>
                    <button class="btn btn-dark text-white mr-5 float-right mt-2" onclick="mg(<?php $id; ?>,<?php $mg; ?>)">Me gusta</button>
                    <button class="btn btn-dark text-white text-left float-right mr-5 mb-3 mt-2" onclick="nomg(<?php $id; ?>,<?php $mg; ?>)"> No me gusta</button></p>
            </div>

        <?php } ?>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>



CREATE TABLE Caja
(
  IdCaja INT auto_increment,
  Imagen varchar(30) not null,
  Modelo VARCHAR(20) NOT NULL,
  Marca CHAR NOT NULL,
  PRIMARY KEY (IdCaja),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);  