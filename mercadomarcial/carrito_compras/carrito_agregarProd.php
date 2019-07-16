<?php
$server = "localhost";
$username = "u547413638_user";
$password = "boggiebomb";
$database = "u547413638_mmdb2";

header('Access-Control-Allow-Origin: *');

$cn = mysqli_connect($server, $username, $password, $database) or die("No se ha pododido establecer conexión");
//conectar a la base de datos

$cod = $_POST["codigoProducto"];
$nom = $_POST["nombreProducto"];
$pre = $_POST["precioProducto"];
$can = $_POST["cantidadProducto"];
$img = $_POST["imagenProducto"];

$rs = mysqli_query($cn,"insert into productoscarrito (idproductocarrito, nombre, precio, cantidad, imagen) values(".$cod.",'".$nom."',".$pre.",".$can.",'".$img."')");

echo mysqli_insert_id($cn);

mysqli_close($cn);
?>
