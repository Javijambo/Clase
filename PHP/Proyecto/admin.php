<!DOCTYPE html>
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
    </style>
</head>
<header>
    <h1 class="banner display-3 font-weight-bold card-title  text-center">Pagina Componentes</h1>
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
            <button class="btn btn-outline-light ml-3" type="button" onclick="cerarsesion();">Cerrar Sesión</button>
        </div>
    </nav>
    <div class="container justify-content-center " id="contenido">
        <div id="form" class="form-group">
        <button id="cargar" class="btn btn-primary mt-4 mb-4" type="button" onclick="refrescar();">Empezar de nuevo</button>
        <br>    
        <label for="tabla">Seleccionar Componente</label>
            <select class="form-control mb-4" id="tabla">
                <option value="torre">Torres</option>
                <option value="mb">Placa Base</option>
                <option value="cpu">Procesador</option>
                <option value="gpu">Grafica</option>               
                <option value="ram">Ram</option>
                <option value="psu">Fuente de Alimentacion</option>
            </select>
        </div>
        <button id="cargar" class="btn btn-primary w-10 mt-4 mb-4" type="button" onclick="cargarids();">Cargar ID</button>
            <button id = "cargar2" class = "btn btn-primary w-10 mt-4 mb-4" type = "button" > Mostrar Datos </button>
    
        </div>
</body>

</html>