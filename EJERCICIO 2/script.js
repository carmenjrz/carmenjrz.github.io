$(window).scroll(function(){


        //Si el elemento es visible
        if ($(".header-contenedor").visible(true)) {
            //Añade la clase “visible”
            $(".header-contenedor").addClass("visible");
            } else {
            //Si no es visible quita:
            $(".header-contenedor").removeClass("visible");
            }
    
        //Si el elemento es visible
        if ($(".neumatico-blando").visible(true)) {
                //Añade la clase “visible”
                $(".neumatico-blando").addClass("visible");
                } else {
                //Si no es visible quita:
                $(".neumatico-blando").removeClass("visible");
                }

        //Si el elemento es visible
        if ($(".neumatico-medio").visible(true)) {
                //Añade la clase “visible”
                $(".neumatico-medio").addClass("visible");
                } else {
                //Si no es visible quita:
                $(".neumatico-medio").removeClass("visible");
                }

         //Si el elemento es visible
         if ($(".neumatico-duro").visible(true)) {
                //Añade la clase “visible”
                $(".neumatico-duro").addClass("visible");
                } else {
                //Si no es visible quita:
                $(".neumatico-duro").removeClass("visible");
                }
        
         //Si el elemento es visible
         if ($(".circuito").visible(true)) {
                //Añade la clase “visible”
                $(".circuito").addClass("visible");
                } else {
                //Si no es visible quita:
                $(".circuito").removeClass("visible");
                }
    });