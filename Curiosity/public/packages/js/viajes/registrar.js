$(document).ready(function() {

  // Validar Formulario de Registro de Usuarios
  var $datosForm = $("#formRegUs");

  $datosForm.validate({
    rules:{
      username : {
        required : true
        // remote : {
        //
        // }
      },
      pass : {required : true},
      cpass : {
        required:true,
        equalTo:$("#pass")
      },
      respuesta : {required:true}
    }
  });

  $("#registrar").click(function() {
    if($datosForm.valid()){
      var $info = {
        username : $("#username").val(),
        pass : $("#pass").val(),
        cpass : $("#cpass").val(),
        respuesta : $("#respuesta").val()
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
        console.log(response);
      })
      .fail(function(error) {
        console.log(error);
      });

    }
  });

  $('tr').click(function(event) {
    var $nombre = $(this).children('td').first().text();
    console.log($nombre);

    $(".modal-reg").html("<div class='modal fade-in'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button><h4>Actualizar Usuario</h4></div><div class='modal-body'><form action='/registro-usuarios' method='post' id='formRegUs'><div class='form-group'><label for='username'>Nombre de Usuario</label><input type='text' name='username' id='username' class='form-control'></div></form></div><div class='modal-footer'><button type='button' name='actualizar' id='act' class='btn btn-primary'>Actualizar</button><button type='button' name='delete' id='del' class='btn btn-danger'>Eliminar</button></div></div></div></div>");

  });


});
