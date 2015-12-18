$(document).ready(function() {

  // llenar selects de lineas
  $.ajax({
    url: '/traerLineas',
    type: 'POST'
  })
  .done(function(response) {
    $.each(response, function(index, linea) {
      $("#linea").append("<option value='" + linea.id + "'>" + linea.nombre + "</option>");
      $("#act_linea").append("<option value='" + linea.id + "'>" + linea.nombre + "</option>");
    });
    console.log("success");
  })
  .fail(function(error) {
    console.log(error);
  });


  // Mostrar el formulario de registro
    $("#btnregistrar").click(function() {
      $("#modal-reg-tipo").modal("show");
    });

  // Accion al hacer click en el renglon
    $('tr').click(function() {
      var $ident = $(this).attr("id");
      $.ajax({
        url: '/info-tipo',
        type: 'POST',
        data: {data:$ident}
      })
      .done(function(response) {
        $("#act_tipo").val(response[0].tipo);
        $("#act_costo").val(response[0].costo);
        // $("#act_linea").val(response[0].linea);
        $("#act_descripcion").val(response[0].descripcion);
        $("#modal-act-tipo").modal("show");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
    });

  // Validacion de Actulaizacion
    $("#formActTipo").validate({
      rules:{
        act_tipo : {
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
        act_linea : {
          required : true
        }
      }
    });

// Actualizar registro de estado
  $("#actualizar").click(function() {
    if($("#formActTipo").valid()){
      var $inform = {
        act_tipo : $("#act_tipo").val(),
        act_costo : $("#act_costo").val(),
        act_descripcion : $("#act_descripcion").val(),
        act_linea : $("#act_linea").val()
      }

      $.ajax({
        url: $("#formActTipo").attr("action"),
        type: 'POST',
        data: {data: $inform}
      })
      .done(function(response) {
        console.log(response);
        $("#modal-act-tipo").modal("hide");
        document.location.href = "/tipos";
        swal(response, "El Tipo de Autobus ha sido Actualizado correctamente", "success");
      })
      .fail(function(error) {
        console.log(error);
      });
    }
  });

// Validacion de Actulaizacion
  $("#formRegTipo").validate({
    rules:{
      tipo : {
        required : true
      },
      costo : {
        required : true,
        digits : true
      },
      descripcion : {
        required : true,
        maxlength : 500
      }
    }
  });

//  Hacer Registro de nueva Ciudad
  $("#registrar").click(function() {
    if($("#formRegTipo").valid()){
      var $info = {
        tipo : $("#tipo").val(),
        costo : $("#costo").val(),
        descripcion : $("#descripcion").val(),
        lineas_id : $("#linea").val()
      }

      $.ajax({
        url: $("#formRegTipo").attr("action"),
        type: 'POST',
        data: {data: $info}
      })
      .done(function(response) {
        $("#codigo").val(""),
        $("#nombre").val(""),
        $("#costo").val(""),
        $("#descripcion").val("")
        $("#modal-reg-tipo").modal("hide");
        document.location.href = "/tipos";
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
      title: "¿Estas Seguro que deseas eliminar el Tipo de Autobus?",
      text: "Una vez eliminado no puede ser recuperado",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Eliminar",
      closeOnConfirm: false },
      function(){
        $.ajax({
          url: '/elim-tipo',
          type: 'POST',
          data: {data: $ident}
        })
        .done(function(response) {
          console.log(response);
          document.location.href = "/tipos";
          swal(response, "El Tipo de Autobus ha sido eliminado correctamente", "success");
        });
      });
  });

});
