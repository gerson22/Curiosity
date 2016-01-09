/*
* GEWIRO PLUGINS es un plugin creado para uso para el desarrollador y
* facilitar la realizacion de ciertas tareas básicas en el desarrollo de plataformas web
* herramienta de fácil uso y apresurar el desarrollo de los CRUD
* ALL RESERVED ...
*/
(function(){
    /*-------------------------
      //----Creamos una función que simplifique la llamada a AJAX
    --------------------------*/
    function ajaxCall(route,method,dataAll,dataTypes,asyncr){
        return $.ajax({
                   url: route,
                   type: method,
                   data: dataAll,
                   dataType: dataTypes,
                   async: asyncr
                });
    }

    /*------------------------
       //-----Creamos la funcion crud que se encargara de realizar un crud generico
    --------------------------*/
    jQuery.fn.crud=function(options){
        /*----------------------
            Variable fails que se representa un array para guardar errores
        ----------------------*/
        var fails=[];

        /*--------------------------------
            //-----Creamos datos por default en caso de que el usuario no halla mandado nada
        ---------------------------------*/
        defaults = {
            route:'',
            method:'POST',
            typeData:'HTML',
            asyncr:true,
            datos:[]
        }
        var options = $.extend({},defaults,options);
        ajaxCall(options.route,options.method,options.datos,options.typeData,options.asyncr).done(function(response){
            return response;
        }).fail(function(error,statusText,status){
            fails.push(error);
            fails.push(statusText);
            fails.push(status);
            return fails;
        });
    }

    jQuery.fn.createInput=function(options){
         defaults = {
             tipp:'text',
             class:'form-control',
             placeholder:'...',
             name:'inputForm',
             id:'inputForm'
         }

         var options = $.extend({},defaults,options);

        return $('<input/>').addClass(options.class).attr({
            'type':options.tipp,
            'placeholder':options.placeholder,
            'name':options.name,
            'id':options.id
        });
    }

    jQuery.fn.alerta=function(options){
        defaults = {
            alertType:'danger',
            txtMessages :
        }
    }

});
