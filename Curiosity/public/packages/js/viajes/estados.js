$(document).ready(function() {

  var $datosForm = $("#formActEst");

// Mostrar el formulario de registro
  $("#btnregistrarUs").click(function() {
    $("#modal-reg-estados").modal("show");
  });

// Accion al hacer click en el renglon
  $('tr').click(function() {
    var $ident = $(this).children('td').first().text();
    $.ajax({
      url: '/info-estado',
      type: 'POST',
      data: {data:$ident}
    })
    .done(function(response) {
      $("#act_numero_entidad").val(response.numero_entidad);
      $("#act_nombre").val(response.nombre);
      $("#modal-act-estados").modal("show");
      console.log(response);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  });

// validacion para Registro
  var $validarReg = $("#formRegEst").validate({
    rules:{
      numero_entidad : {
        required : true,
        remote : {
          url : '/chekIdent',
          type : 'POST',
          data : {
            numero_entidad : function(){
              return $("#numero_entidad").val();
            }
          }
        }
      },
      nombre : {
        required : true,
        remote : {
          url : '/chekNombre',
          type : 'POST',
          data : {
            nombre : function(){
              return $("#nombre").val();
            }
          }
        }
      }
    },
    messages: {
      nombre:{
        remote: "El Nombre de Estado ya Existe"
      },
      numero_entidad:{
        remote: "El Numero de Entidad ya Existe"
      }
    }
  });

//  Hacer Registro de nuevo Estado
  $("#registrar").click(function() {
    if($("#formRegEst").valid()){
      var $info = {
        numero_entidad : $("#numero_entidad").val(),
        nombre : $("#nombre").val()
      }

      $.ajax({
        url: $("#formRegEst").attr("action"),
        type: 'POST',
        data: {data: $info}
      })
      .done(function(response) {
        $("#numero_entidad").val("");
        $("#numero_entidad").val("");
        $("#modal-reg-estados").modal("hide");
        document.location.href = "/estadosmx";
        swal(response, "Click en Aceptar para Continuar", "success");
      })
      .fail(function(error) {
        console.log(error);
      });
    }
  });

// Validacion de Actulaizacion
  $datosForm.validate({
    rules:{
      act_nombre : {
        required : true,
        remote : {
          url : '/chekNombre',
          type : 'POST',
          data : {
            nombre : function(){
              return $("#act_nombre").val();
            }
          }
        }
      }
    },
    messages: {
      act_nombre:{
        remote: "El Nombre de Estado ya Existe"
      }
    }
  });

// Actualizar registro de estado
$("#actualizar").click(function() {
  if($datosForm.valid()){
    var $inform = {
      act_numero_entidad : $("#act_numero_entidad").val(),
      act_nombre : $("#act_nombre").val()
    }

    $.ajax({
      url: $datosForm.attr("action"),
      type: 'POST',
      data: {data: $inform}
    })
    .done(function(response) {
      $("#act_numero_entidad").val("");
      $("#act_nombre").val("");
      console.log(response);
      $("#modal-act-estados").modal("hide");
      document.location.href = "/estadosmx";
      swal(response, "El Estado ha sido Actualizado correctamente", "success");
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
      title: "¿Estas Seguro que deseas eliminar el Estado?",
      text: "Una vez eliminado no puede ser recuperado",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Eliminar",
      closeOnConfirm: false },
      function(){
        $.ajax({
          url: '/est-eliminar',
          type: 'POST',
          data: {data: $ident}
        })
        .done(function(response) {
          console.log(response);
          document.location.href = "/estadosmx";
          swal("Eliminado", "El Estado ha sido eliminado correctamente", "success");
        });
      });
  });

});
