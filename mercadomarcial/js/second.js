$(document).ready(function(){
    mostrarTablaProductos();
    mostrarTablaCarrito();
    //$(".form-hide").hide();
    $("#agregarAlCarrito").submit(function(e){
        
        e.preventDefault();
        var codigo = $("#codigo").text();
        var nombre = $("#nombre").val();
        var precio = $("#precio").val();
        var cantidad = $("#cantidadAgregar").val();
        var strUrl = $("#imagen").val();
        //var fecha = "CURRENT_TIMESTAMP()";
        $.ajax({
            url:"http://mercadomarcial.store/carrito_compras/carrito_agregarProd.php",
            method:"POST",
            dataType:"json",
            data:{codigoProducto:codigo, nombreProducto:nombre, precioProducto:precio, cantidadProducto:cantidad, imagenProducto:strUrl},
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.responseText + '<br/>' + errorThrown);
            }
        }).done(function(data){
            //alert(data);
            mostrarTablaCarrito();
        });
    });

    $("#btnEditar").click(function(){
        var codigo = $("#codigoFk").text();
        var cantidad = $("#cantidadEditar").val();
        $.ajax({
            url:"http://mercadomarcial.store/carrito_compras/carrito_editarProd.php",
            method:"POST",
            dataType:"json",
            data:{codigoProducto:codigo, cantidadProducto:cantidad},
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.responseText + '<br/>' + errorThrown);
            }
        }).done(function(data){
            //alert(data);
            mostrarTablaCarrito();
        });
      });

    $("#btnRemover").click(function(){
        var codigo = $("#codigoFk").text();
        $.ajax({
            url:"http://mercadomarcial.store/carrito_compras/carrito_removerProd.php",
            method:"POST",
            dataType:"json",
            data:{codigoProducto:codigo},
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.responseText + '<br/>' + errorThrown);
            }
        }).done(function(data){
            //alert(data);
            mostrarTablaCarrito();
        });
    });
});


function mostrarTablaProductos(){
    $.ajax({
        url:"http://mercadomarcial.store/carrito_compras/verProductos.php",
        method:"GET",
        dataType:"json"
    }).done(function(data){
        var adjuntarHtml= "";
        $.each(data, function(index, value){
            adjuntarHtml = "<tr>",
            adjuntarHtml += "<td>" + value.idproducto + "</td><td>" + value.nombre + "</td><td>" + value.precio + "</td>",
            adjuntarHtml += "<td><img class='foto-producto' src='http://mercadomarcial.store/carrito_compras/" + value.imagenchica + "'></td>",
            adjuntarHtml += "<td><i class='fas fa-shopping-cart fa-2x agregar'></i><td>",
            adjuntarHtml += "</tr>";
            $("#tProductos tbody").append(adjuntarHtml);

            var pointer = $(".agregar").css("cursor","pointer");

            $(pointer).click(function(){
                var fila = $(this).parent().parent();
                var codigo = fila.find("td:first-child").text()
                var nombre = fila.find("td:nth-child(2)").text();
                var precio = fila.find("td:nth-child(3)").text();
                var urlImagen = fila.find("td:nth-child(4)").find("img").attr('src');
                var strUrl = urlImagen.substr(43); //Sustrae el url a partir del caracter 32
                $("#codigo").text(codigo).hide();
                $("#nombre").val(nombre);
                $("#precio").val(precio);
                $("#imagen").val(strUrl);
            });

        });
    });
}


function mostrarTablaCarrito(){
    $.ajax({
        url:"http://mercadomarcial.store/carrito_compras/verCarrito_productos.php",
        method:"GET",
        dataType:"json"
    }).done(function(data){
        $("#tProductosCarrito tbody").html("");
        //alert(data);
        var otroHtml = "";
        $.each(data, function(index, value){
            //alert(value.nombre);
            otroHtml = "<tr>",
            otroHtml += "<td>" + value.idcarrito + "</td>",
            otroHtml += "<td><img class='foto-producto' src='http://mercadomarcial.store/carrito_compras/" + value.imagen + "'></td><td>" + value.nombre + "</td><td>" + value.precio + "</td><td>" + value.cantidad + "</td>",
            otroHtml += "<td><i class='fas fa-edit fa-2x editar'></i></td>"
            otroHtml += "</tr>"

            $("#tProductosCarrito tbody").append(otroHtml);
            var pointer = $(".editar").css("cursor","pointer");
            $(pointer).click(function(){
                var fila = $(this).parent().parent();
                var codigo = fila.find("td:first-child").text();
                var cantidad = fila.find("td:nth-child(5)").text();
                $("#codigoFk").text(codigo).hide();
                $("#cantidadEditar").val(cantidad);

            });
        });
    });
}