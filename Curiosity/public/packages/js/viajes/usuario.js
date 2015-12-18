$(document).ready(function() {

  var $datosForm = $("#formRegUs");
  var $actForm = $("#formActUs");

// Abrir modal de registro de usuario
  $("#btnregistrarUs").click(function() {
    $("#registrarUs").modal("show");
  });

// Validacion de Registro
  var validarReg = $datosForm.validate({
    rules:{
      username : {
        required : true,
        remote : {
          url : '/chekUsername',
          type : 'POST',
          data : {
            username : function(){
              return $("#username").val();
            }
          }
        }
      },
      pass : {required : true},
      cpass : {
        required:true,
        equalTo:$("#pass")
      },
      respuesta : {required:true}
    },
    messages: {
      username:{
        remote: "El usuario ingresado se encuentra en uso"
      }
    }
  });

// Validacion de Actulaizacion
  $actForm.validate({
    rules:{
      act_username : {
        required : true
      }
    }
  });


  $("#registrar").click(function() {
    if($datosForm.valid()){
      var $info = {
        username : $("#username").val(),
        pass : $("#pass").val(),
        cpass : $("#cpass").val(),
        respuesta : $("#respuesta").val(),
        central : $("#central").val(),
        rol : $("#rol").val()
      }

      $.ajax({
        url: $datosForm.attr("action"),
        type: 'POST',
        data: {data: $info}
      })
      .done(function(response) {
        $("#username").val("");
        $("#pass").val("");
        $("#cpass").val("");
        $("#respuesta").val("");
        $("#registrarUs").modal("hide");
        document.location.href = "/usuarios";
        swal(response, "Click en Aceptar para Continuar", "success");
      })
      .fail(function(error) {
        console.log(error);
      });

    }
  });

  $('tr').click(function() {

    var $nombre = $(this).children('td').first().text();
    console.log($nombre);
    $.ajax({
      url: '/infoUsers',
      type: 'POST',
      data: {data:$nombre}
    })
    .done(function(response) {
      $("#act_username").val(response.username);
      $("#modal-usuarios").modal("show");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  });

  $(".eliminar").click(function() {
    var $usuario = $(this).attr('id');
    $("#modal-usuarios").modal("hide");
    swal({
      title: "¿Estas Seguro que deseas eliminar al usuario " + $usuario + "?",
      text: "El usuario unicamente será desactivado por seguridad",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Eliminar",
      closeOnConfirm: false },
      function(){
        $.ajax({
          url: '/borrarUsers',
          type: 'POST',
          data: {data:$usuario}
        })
        .done(function(response) {
          console.log(response);
          document.location.href = "/usuarios";
          swal("Desactivado", "El usuario " + $usuario + " ha sido desactivado correctamente", "success");
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      });
  });

  $("#actualizar").click(function() {
    if($actForm.valid()){
      var $inform = {
        username : $("#act_username").val(),
        central : $("#act_central").val(),
        rol : $("#act_rol").val(),
        activado : $("input:radio[name=act_estado]:checked").val()
      }

      $.ajax({
        url: $actForm.attr("action"),
        type: 'POST',
        data: {data: $inform}
      })
      .done(function(response) {
        $("#act_username").val("");
        console.log(response);
        $("#modal-usuarios").modal("hide");
        document.location.href = "/usuarios";
        swal("Actualizado", "El usuario ha sido Actualizado correctamente", "success");
      })
      .fail(function(error) {
        console.log(error);
      });

    }
  });

// traerme los roles
  $.ajax({
    url: '/verRoles',
    type: 'POST'
  })
  .done(function(response) {
    console.log("success roles");
    $.each(response, function(index, rol) {
      $("#rol").append("<option value='" + rol.id + "'>" + rol.name + "</option>");
      $("#act_rol").append("<option value='" + rol.id + "'>" + rol.name + "</option>");
    });
  });

// traerme las centrales
  $.ajax({
    url: '/verCentrales',
    type: 'POST'
  })
  .done(function(response) {
    console.log("success centrales");
    $.each(response, function(index, central) {
      $("#central").append("<option value='" + central.id + "'>" + central.nombre + "</option>");
      $("#act_central").append("<option value='" + central.id + "'>" + central.nombre + "</option>");
    });
  });


});
