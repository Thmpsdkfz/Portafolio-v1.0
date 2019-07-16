$(document).ready(function(){
    $.ajax({
        url:"http://mercadomarcial.store/mercadoproductos.php",
        method:"POST",
        dataType:"json"
    }).done(function(data){
        //alert(data);
        $.each(data,function(index,value){
            //alert(value.nombre);
            //$("#cardfotos").append("<div class='card' style='width: 18rem;'><img class='card-img-top' src='http://http://mercadomarcial.store/mercadomarcial/fotos/"+value.imagen+ "'><div class='card-body'><p class='card-text'>" +value.nombres+ "</p></div></div>");
            $("#cardfotos").append("<div class='card col-sm-6 col-md-4 col-lg-3' style='width: 18rem;'><img class='card-img-top' src='http://mercadomarcial.store/fotos/" + value.imagen + "'alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + value.nombre + "</h5><p class='card-text'>" + value.descripcion + "</p><a href='#' class='btn btn-primary'>Comprar</a></div></div>");
            
        });       
    });
});