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
$sql = "UPDATE ".$tabla." set stock=".$stock." where id".$tabla." = '".$producto."';";
$resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
echo($sql);

