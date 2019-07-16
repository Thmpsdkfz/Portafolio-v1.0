<?php
header('Access-Control-Allow-Origin: *');
$cn = mysqli_connect("localhost","u547413638_admin","thmpsdkfz","u547413638_mmdb");
//conectar a la base de datos
$rs = mysqli_query($cn,"select * from productos");

while($row = mysqli_fetch_assoc($rs)){
    $res[] = array_map("utf8_encode",$row);
    //cada fila consultada se coloca dentro de un arreglo
}

echo json_encode($res);//devuelve el arreglo en formato json
mysqli_close($cn);

?>