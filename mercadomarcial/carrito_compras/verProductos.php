<?php
$server = "localhost";
$username = "u547413638_user";
$password = "boggiebomb";
$database = "u547413638_mmdb2";

header('Access-Control-Allow-Origin: *');

$cn = mysqli_connect($server, $username, $password, $database) or die("No se ha pododido establecer conexión");

//conectar a la base de datos
$rs = mysqli_query($cn,"select * from productos order by idproducto");

while($row = mysqli_fetch_assoc($rs)){
    $res[] = array_map("utf8_encode",$row);
    //cada fila consultada se coloca dentro de un arreglo
}

echo json_encode($res);//devuelve el arreglo en formato json
mysqli_close($cn);

?>