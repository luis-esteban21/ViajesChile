//Funcion que cambia color con scroll 

$(window).scroll(function(){

    if ($(this).scrollTop() > 400) {
        $("#barra").removeClass("navbar");
       $('#barra').addClass("bg-interno");
      } else {
    
       $("#barra").removeClass("bg-interno");
       $('#barra').addClass("navbar");
      }

   });