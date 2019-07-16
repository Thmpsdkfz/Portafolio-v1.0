$(document).ready(function(){
    $('#blog figure').hide();
    $('#lineasventa figure').hide();
    
    $("#arreglo-fotos figure").append("<figcaption>");
    $("#arreglo-fotos figure").mouseenter(function(){
        $(this).find("figcaption").stop().fadeIn("slow");
    });
    $("#arreglo-fotos figure").mouseleave(function(){
		$(this).find("figcaption").stop().fadeOut("slow");
    });
    $("#arreglo-fotos figure").each(function(){
		var ruta = $(this).find("img").attr("alt");
		$(this).find("figcaption").html(ruta);
    });

    var puntero = $("#blog h2").css("cursor","pointer");
    $(puntero).click(function(){
        $("#blog figure").slideToggle("slow");
    });

    $("#lineasventa h2").click(function(){
        $("#lineasventa figure").slideDown("slow");
    });
    $("#lineasventa img").click(function(){
        $("figure").animate({
            left : "220px",
           
        });
    });

    $.ajax({
        url:"http://mercadomarcial.store/mercadoproductos.php",
        method:"POST",
        dataType:"json"
    }).done(function(data){
        //alert(data);
        $.each(data,function(tabla,value){
            //alert(value.marca);
            $("#tproductos tbody").append("<tr><td>" + value.producto_id + "</td><td>" + value.nombre + "</td></tr>");
        });
            $("#tproductos tbody tr").click(function(){
                $("#tproductos tbody tr").css("background-color","transparent");
                $(this).css("background-color","#ffcc00");
                var codigo = $(this).find("td:first-child").text();
                //alert(codigo);
                mostrarCompras(codigo);
            });
            $("body").dblclick(function(){
                $("#tproductos tbody tr").css("background-color","transparent");
            });
        
    });

    function mostrarCompras(codigoCompras){

        $.ajax({
            url:"http://mercadomarcial.store/mercadocompras.php",
            method:"POST",
            dataType:"json",
            data:{varCompras:codigoCompras}
        }).done(function(data){
            //alert(data);
            $("#tcompras tbody").html("");
            $.each(data,function(tabla,value){       
                //alert(value.nombre);
                $("#tcompras tbody").append("<tr><td>" + value.compra_id + "</td><td>" + value.cliente_id_fk + "</td><td>" + value.fecha_compra + "</td></tr>");
            });
            
            
        });
    
    };

});


