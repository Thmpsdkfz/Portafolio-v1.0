<?php
$server = "localhost";
$username = "u547413638_user";
$password = "boggiebomb";
$database = "u547413638_mmdb2";

header('Access-Control-Allow-Origin: *');

$cn = mysqli_connect($server, $username, $password, $database) or die("No se ha pododido establecer conexión");
//conectar a la base de datos

$cod = $_POST["codigoProducto"];
$can = $_POST["cantidadProducto"];

$rs = mysqli_query($cn,"update productoscarrito set cantidad = ".$can." where idcarrito =".$cod);

echo mysqli_insert_id($cn);

mysqli_close($cn);
?>
