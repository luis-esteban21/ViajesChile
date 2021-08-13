//Funcion que cambia color con scroll 

$(window).scroll(function(){

    if ($(this).scrollTop() > 400) {
        $("#barra").removeClass("navbar");
       $('#barra').addClass("desplazamiento");
      } else {
    
       $("#barra").removeClass("desplazamiento");
       $('#barra').addClass("navbar");
      }

   });
   
   $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
  })