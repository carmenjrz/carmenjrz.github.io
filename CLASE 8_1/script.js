$(window).scroll(function(){

        //Si el elemento es visible
        if ($(".seccion1").visible(true)) {
            //Añade la clase “visible”
            $(".seccion1").addClass("visible");
            } else {
            //Si no es visible quita:
            $(".seccion1").removeClass("visible");
            }

              //Si el elemento es visible
        if ($(".seccion2").visible(true)) {
            //Añade la clase “visible”
            $(".seccion2").addClass("visible");
            } else {
            //Si no es visible quita:
            $(".seccion2").removeClass("visible");
            }

        //Si el elemento es visible
        if ($(".ind1").visible(true)) {
            //Añade la clase “visible”
            $(".ind1").addClass("visible");
            } else {
            //Si no es visible quita:
            $(".ind1").removeClass("visible");
            }

    //Si el elemento es visible
    if ($(".ind2").visible(true)) {
        //Añade la clase “visible”
        $(".ind2").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".ind2").removeClass("visible");
        }

    });
    
    