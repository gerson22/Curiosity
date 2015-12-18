$(document).ready(function() {
 $("tr").off('click');
// Llenar Select de estados
  $.ajax({
    url: '/traerCiudades',
    type: 'POST'
  })
  .done(function(response) {
    $.each(response, function(index, cd) {
      $("#destino").append("<option value='" + cd.id + "'>" + cd.nombre + "</option>")
      // $("#estado").append("<option value='" + est.id + "'>" + est.nombre + "</option>")
    });
  })
  .fail(function() {
    console.log("error");
  });

// Llenar Select de autobuses
  $.ajax({
    url: '/traerAutobuses',
    type: 'POST'
  })
  .done(function(response) {
    $.each(response, function(index, autobus) {
      $("#autobus").append("<option value='" + autobus.id + "'>" + autobus.matricula + "</option>")
      // $("#estado").append("<option value='" + est.id + "'>" + est.nombre + "</option>")
    });
  })
  .fail(function() {
    console.log("error");
  });

// Mostrar el formulario de registro
  $("#btnregistrar").click(function() {
    $("#modal-reg-viaje").modal("show");
  });

	/*
// Accion al hacer click en el renglon
  $('tr').click(function() {
    var $ident = $(this).children('td').first().text();
    $.ajax({
      url: '/info-autobus',
      type: 'POST',
      data: {data:$ident}
    })
    .done(function(response) {
      $("#act_matricula").val(response[0].matricula);
      $("#act_llantas").val(response[0].cant_llantas);
      $("#act_ancho").val(response[0].ancho);
      $("#act_alto").val(response[0].altura);
      $("#act_asientos").val(response[0].cant_asientos);
      $("#act_descripcion").val(response[0].descripcion);
      $("#modal-act-autobus").modal("show");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  });

// Validacion de Actulaizacion
  $("#formActAutobus").validate({
    rules:{
      act_matricula : {
        required : true
      },
      act_llantas : {
        required : true,
        digits : true
      },
      act_ancho : {
        required : true,
        digits : true
      },
      act_alto : {
        required : true,
        digits : true
      },
      act_asientos : {
        required : true,
        digits : true
      },
      act_descripcion : {
        required : true,
        maxlength : 500
      },
      act_clasificacion : {
        required : true,
        digits :true
      }
    }
  });

// Actualizar registro
$("#actualizar").click(function() {
  if($("#formActAutobus").valid()){
    var $inform = {
      destino : $("#act_matricula").val(),
      act_llantas : $("#act_llantas").val(),
      act_ancho : $("#act_ancho").val(),
      act_alto : $("#act_alto").val(),
      act_asientos : $("#act_asientos").val(),
      act_descripcion : $("#act_descripcion").val(),
      act_clasificacion : $("#act_clasificacion").val()
    }

    $.ajax({
      url: $("#formActAutobus").attr("action"),
      type: 'POST',
      data: {data: $inform}
    })
    .done(function(response) {
      console.log(response);
      $("#modal-act-autobus").modal("hide");
      document.location.href = "/autobuses";
      swal(response, "El Autobus ha sido Actualizado correctamente", "success");
    })
    .fail(function(error) {
      console.log(error);
    });
  }
});*/

// Validacion de registro
    //Agregamos una function personalizada para reconocer las horas
$.validator.addMethod("time24",function(value, element){
    if(!/^\d{2}:\d{2}/.test(value))
        return false;
    var parts = value.split(':');
    if(parts[0]>23|| parts[1]>59|| parts[2]>59)
        return false;
    return true;
},"Formato de la hora incorrecto");

//Reconocer fechas mayores que
jQuery.validator.addMethod("fechaMayorque", 
function(value, element, params) {

    if (!/Invalid|NaN/.test(new Date(value))) {
        return new Date(value) > new Date($(params).val());
    }

    return isNaN(value) && isNaN($(params).val()) 
        || (Number(value) > Number($(params).val())); 
},'La fecha debe ser mayor que la fecha de salida.');

jQuery.validator.addMethod("fechaMenorque", 
function(value, element, params) {

    if (!/Invalid|NaN/.test(new Date(value))) {
        return new Date(value) < new Date($(params).val());
    }

    return isNaN(value) && isNaN($(params).val()) 
        || (Number(value) < Number($(params).val())); 
},'La fecha debe ser menor que {0}.');
function menorFechaActual(caducado)
    {
                  Date.prototype.yyyymmdd = function() {         
                                
                            var yyyy = this.getFullYear().toString();                                    
                            var mm = (this.getMonth()+1).toString();       
                            var dd  = this.getDate().toString();             

                            return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
                       };  

                    d = new Date();
                  var fecha_act = d.yyyymmdd();
                  fecha_act = fecha_act.replace('-','');
                  fecha_act = fecha_act.replace('-','');
                  caducado = caducado.replace('-','');
                  caducado = caducado.replace('-','');
                  console.log(caducado);
                  console.log(fecha_act);
                  if(parseFloat(caducado) >= parseFloat(fecha_act))
                      return true;
                  else
                      return false;
   }
    
$("#formRegViaje").validate({
  rules:{
    descripcion : {
      required : true,
      maxlength : 500,
    },
    hora_salida:{
        required: true,
        time24:true
    },
    hora_llegada:{
        required: true,
        time24:true
    }, 
    fecha_viaje:{
        required:true,
        date:true,
        fechaMenorque: "#fecha_llegada"
    },
    fecha_llegada:{
        required:true,
        date:true,
        fechaMayorque: "#fecha_salida" 
    }
  }
});
//  Hacer Registro
$("#registrar").click(function() {
    var $divAlert = $("<div/>").addClass("alert alert-danger");
    var $btnDissmisAlert = $("<button/>").addClass("close").attr({'data-dismiss':"alert",'aria-hidden':"true"}).text("x");
    $divAlert.append($btnDissmisAlert);
    $divAlert.append("La fecha de salida no puede ser menor a la actual");
    $("#alerta_fecha").empty();
    if(menorFechaActual($("#fecha_salida").val())){
      if($("#formRegViaje").valid()){
        var $info = {
          hora_salida : $("#hora_salida").val(),
          hora_llegada : $("#hora_llegada").val(),
          fecha_viaje : $("#fecha_salida").val(),
          descripcion : $("#descripcion").val(),
          autobuses_id : $("#autobus").val(),
          ciudades_id : $("#destino").val(),
          fecha_llegada_destino : $("#fecha_llegada").val(),
        }

        $.ajax({
          url: $("#formRegViaje").attr("action"),
          type: 'POST',
          data: {data: $info}
        })
        .done(function(response) {
          $("#modal-reg-viaje").modal("hide");
          document.location.href = "/viajes";
          swal(response, "Click en Aceptar para Continuar", "success");
          console.log(response);
        })
        .fail(function(error) {
          console.log(error);
        });
      }
    }
    else{

        $("#alerta_fecha").append($divAlert);
    }
    //$("#formRegViaje").submit();
});

// Eliminar Regostro
$(".eliminar").click(function() {
  var $ident = $(this).attr('id');
  swal({
    title: "¿Estas Seguro que deseas eliminar el viaje?",
    text: "Una vez eliminado no puede ser recuperado",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Eliminar",
    closeOnConfirm: false },
    function(){
      $.ajax({
        url: '/elim-viajes',
        type: 'POST',
        data: {data: $ident}
      })
      .done(function(response) {
        console.log(response);
        document.location.href = "/viajes";
        swal(response, "El viaje ha sido eliminado correctamente", "success");
      });
    });
  });

});
