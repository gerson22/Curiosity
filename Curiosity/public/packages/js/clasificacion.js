$(document).ready(function() {

// llenar selects de tipos
$.ajax({
  url: '/traerTipos',
  type: 'POST'
})
.done(function(response) {
  $.each(response, function(index, tipo) {
    $("#tipos").append("<option value='" + tipo.id + "'>" + tipo.tipo + "</option>");
    $("#act_tipos").append("<option value='" + tipo.id + "'>" + tipo.tipo + "</option>");
  });
  console.log("success");
})
.fail(function(error) {
  console.log(error);
});


// Mostrar el formulario de registro
  $("#btnregistrar").click(function() {
    $("#modal-reg-clas").modal("show");
  });

// Accion al hacer click en el renglon
  $('tr').click(function() {
    var $ident = $(this).attr("id");
    $.ajax({
      url: '/info-clas',
      type: 'POST',
      data: {data:$ident}
    })
    .done(function(response) {
      $("#act_nombre").val(response[0].nombre_clasificacion);
      $("#act_costo").val(response[0].costo);
      $("#act_tipos").val(response[0].tipo);
      $("#act_descripcion").val(response[0].descripcion);
      $("#modal-act-clas").modal("show");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  });

// Validacion de Actulaizacion
  $("#formActClas").validate({
    rules:{
      act_nombre : {
        required : true
      },
      act_costo : {
        required : true,
        digits : true
      },
      act_descripcion : {
        required : true,
        maxlength : 500
      },
      act_tipos : {
        required : true
      }
    }
  });

// Actualizar registro
$("#actualizar").click(function() {
  if($("#formActClas").valid()){
    var $inform = {
      act_nombre : $("#act_nombre").val(),
      act_costo : $("#act_costo").val(),
      act_descripcion : $("#act_descripcion").val(),
      act_tipo : $("#act_tipos").val()
    }

    $.ajax({
      url: $("#formActClas").attr("action"),
      type: 'POST',
      data: {data: $inform}
    })
    .done(function(response) {
      console.log(response);
      $("#modal-act-clas").modal("hide");
      document.location.href = "/clasificaciones";
      swal(response, "La Clasificación ha sido Actualizada correctamente", "success");
    })
    .fail(function(error) {
      console.log(error);
    });
  }
});

// Validacion de registro
$("#formRegClas").validate({
  rules:{
    nombre : {
      required : true,
      remote : {
        url : '/checkNombreClas',
        type : 'POST',
        data : {
          nombre : function(){
            return $("#nombre").val();
          }
        }
      }
    },
    costo : {
      required : true,
      digits : true
    },
    descripcion : {
      required : true,
      maxlength : 500
    },
    tipos : {
      required : true,
      remote : {
        url : '/checkTiposClas',
        type : 'POST',
        data : {
          tipos : function(){
            return $("#tipos").val();
          }
        }
      }
    }
  },
  messages: {
    nombre:{
      remote: "La Clasificación ya Existe"
    },
    tipos:{
      remote: "Este tipo de autobus se encuentra ya asignado"
    }
  }
});

//  Hacer Registro
$("#registrar").click(function() {
  if($("#formRegClas").valid()){
    var $info = {
      nombre_clasificacion : $("#nombre").val(),
      costo : $("#costo").val(),
      descripcion : $("#descripcion").val(),
      tipos_camiones_id : $("#tipos").val()
    }

    $.ajax({
      url: $("#formRegClas").attr("action"),
      type: 'POST',
      data: {data: $info}
    })
    .done(function(response) {
      $("#modal-reg-clas").modal("hide");
      document.location.href = "/clasificaciones";
      swal(response, "Click en Aceptar para Continuar", "success");
    })
    .fail(function(error) {
      console.log(error);
    });
  }
});

// Eliminar Regostro
$(".eliminar").click(function() {
  var $ident = $(this).attr('id');
  swal({
    title: "¿Estas Seguro que deseas eliminar la Clasificación?",
    text: "Una vez eliminado no puede ser recuperado",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Eliminar",
    closeOnConfirm: false },
    function(){
      $.ajax({
        url: '/elim-clas',
        type: 'POST',
        data: {data: $ident}
      })
      .done(function(response) {
        console.log(response);
        document.location.href = "/clasificaciones";
        swal(response, "La Clasificación ha sido eliminada correctamente", "success");
      });
    });
  });

});
