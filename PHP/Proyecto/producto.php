<?php 
    $c = intval($_GET['categoria']);
            $servername = "localhost";
        $username = "alvaro";
        $password = "alvaro";
        $dbname = "alvaro";
        $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
       echo  $sql = "SELECT IdCaja,Imagen,Marca,Modelo,Precio FROM ".$c.";";
        $resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
      
        while ($record = mysqli_fetch_assoc($resultset)) {
            $id = $record['IdCaja'];
            $img = $record['Imagen'];
            $marca = $record['Marca'];
            $modelo = $record['Modelo'];
            $precio = $record['Precio'];
            $todo = $todo . '
                <div class="card mt-3 ">
                    <h1 class=" display-3 font-weight-bold card-title text-center">' . $marca .' '.$modelo. '</h1>
                    <img class="card-img-top " src="imag/' . $img . '" alt="Card image cap">
                    <p class="texto card-text mt-3 text-white "> <h2>' .$precio.' € </h2> </p>
                    </div>';
        }
        echo $todo;
        
    ?>
