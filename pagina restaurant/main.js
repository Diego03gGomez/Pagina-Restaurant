let array_comidas=[
{nombre:"Hamburgesa de tomate y lechufa", imagen: "imagenes/hamburgesa.jpg", categoria:"h"},
{nombre:"Hamburgesa de queso y jamon", imagen: "imagenes/hamburgesa.jpg", categoria:"h"},
{nombre:"Hamburgesa vegana", imagen: "imagenes/hamburgesa.jpg", categoria:"h"},
{nombre:"Hamburgesa de pollo", imagen: "imagenes/hamburgesa.jpg", categoria:"h"},

{nombre:"Pizza de pollo", imagen: "imagenes/pizza.jpg", categoria:"p"},
{nombre:"Pizza Vegetales", imagen:"imagenes/pizza.jpg", categoria:"p"},
{nombre:"Pizza vegetales y Atun", imagen: "imagenes/pizza.jpg", categoria:"p"},


{nombre:"Pepsi", imagen: "imagenes/pepsi.jpg", categoria:"b"},
{nombre:"Naranja", imagen: "imagenes/pepsi.jpg", categoria:"b"},
]






let array_Pizzas = $.grep(array_comidas, function (valor) { 
    return valor.categoria == "p"
});









let array_Bebidas = $.grep(array_comidas, function (valor) { 
    return valor.categoria == "b"
});










let array_Hamburgesas = $.grep(array_comidas, function (valor) { 
    return valor.categoria == "h"
});








$(document).ready(function () {
    
    
$("#HOME").click(function (e) { 
    e.preventDefault();
    $(".home").slideToggle(300);
});

$("#PAGES").click(function (e) { 
    e.preventDefault();
    $(this).find(".pages").slideToggle(300);
    
});


$("#GALLERY").click(function (e) { 
    e.preventDefault();
    $(".gallery").slideToggle(300);
    
});


$("#BLOG").click(function (e) { 
    e.preventDefault();
    $(".blog").slideToggle(300);
    
});


$(".icono_barra").click(function (e) { 
    e.preventDefault();
$(".paginas").slideToggle(400);


    
});


$(".cont_descripcion").find("p").eq(0).addClass("letras_resaltadas");

$(".cont_descripcion").find("p").eq(1).addClass("letras_grises");









$.each(array_Hamburgesas, function (i, H) {
    console.log(H.categoria);


$(".contenedor_comidas").append(`
<div class="card_comida">
<div  class="cont_imagen_comida"  >
<img   src=${H.imagen}   >
</div>

<div class="contenedor_descripcion_comida">
<h1>  ${H.nombre}  </h1>
</div>
</div>`); 



     
});

$.each(array_Pizzas, function (i, P) {
    console.log(P.categoria);


$(".contenedor_comidas2").append(`
<div class="card_comida">
<div  class="cont_imagen_comida"  >
<img   src=${P.imagen}   >
</div>

<div class="contenedor_descripcion_comida">
<h1>  ${P.nombre}  </h1>
</div>
</div>`); 



     
});


$.each(array_Bebidas, function (i, B) {
    console.log(B.categoria);


$(".contenedor_comidas3").append(`
<div class="card_comida">
<div  class="cont_imagen_comida"  >
<img   src=${B.imagen}   >
</div>

<div class="contenedor_descripcion_comida">
<h1>  ${B.nombre}  </h1>
</div>
</div>`); 



     
});

$(".contenedor_comidas2").hide();
$(".contenedor_comidas3").hide();





$(".contendor_opciones").find("input").eq(1).click(function (e) { 
    e.preventDefault();

    $(".contenedor_comidas").fadeOut(30);
    $(".contenedor_comidas3").fadeOut(30);
    $(".contenedor_comidas2").fadeIn();
    
});

$(".contendor_opciones").find("input").eq(2).click(function (e) { 
    e.preventDefault();

    $(".contenedor_comidas").fadeOut(30);
    $(".contenedor_comidas2").fadeOut(30);
    $(".contenedor_comidas3").fadeIn();
    
});



$(".contendor_opciones").find("input").eq(0).click(function (e) { 
    e.preventDefault();

    $(".contenedor_comidas2").fadeOut(30);
    $(".contenedor_comidas3").fadeOut(30);
    $(".contenedor_comidas").fadeIn();
    
});


$('.cont_slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 1200,
 arrows:false,
 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
]

});




$(".card_chef").hover(function () {
        // over
        $(this).addClass("animate__animated  animate__jello ")
        
    }, function () {
        $(this).removeClass("animate__animated  animate__jello ");
        // out
    }
);




$(".texto").hide();







$(".slide").hover(function () {
        // over
$(this).find(".texto").fadeIn();


        
    }, function () {
        // out
        $(this).find(".texto").fadeOut();
    }
);


/* PAGINACION DE PRIMER FONDO*/
















});