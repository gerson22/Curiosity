$(document).ready(function() {

// Llenar Select de estados
  $.ajax({
    url: '/traerEstados',
    type: 'POST'
  })
  .done(function(response) {
    $.each(response, function(index, est) {
      $("#act_estado").append("<option value='" + est.id + "'>" + est.nombre + "</option>")
      $("#estado").append("<option value='" + est.id + "'>" + est.nombre + "</option>")
    });
  })
  .fail(function() {
    console.log("error");
  });


// Mostrar el formulario de registro
  $("#btnRegistrarCd").click(function() {
    $("#modal-reg-ciudad").modal("show");
  });

// Accion al hacer click en el renglon
  $('tr').click(function() {
    var $ident = $(this).attr("id");
    $.ajax({
      url: '/info-ciudad',
      type: 'POST',
      data: {data:$ident}
    })
    .done(function(response) {
      $("#act_numero_ciudad").val(response[0].num_ciudad);
      $("#act_nombre").val(response[0].cd_nombre);
      $("#act_cp").val(response[0].cp);
      $("#act_costo").val(response[0].costo);
      $("#modal-act-ciudad").modal("show");
      console.log(response[0].cd_nombre);
    })
    .fail(function() {
      console.log("error");
    });
  });

// validacion para Registro
  var $validarReg = $("#formRegCd").validate({
    rules:{
      numero_ciudad : {
        required : true,
        digits : true,
        remote : {
          url : '/chekNumeroCD',
          type : 'POST',
          data : {
            numero_ciudad : function(){
              return $("#numero_ciudad").val();
            }
          }
        }
      },
      nombre : {
        required : true,
        remote : {
          url : '/chekNombreCD',
          type : 'POST',
          data : {
            nombre : function(){
              return $("#nombre").val();
            }
          }
        }
      },
      cp : {
        required : true,
        digits : true,
        maxlength: 5,
      },
      costo : {
        required : true,
        digits : true,
      }
    },
    messages: {
      nombre:{
        remote: "La Ciudad ya Existe"
      },
      numero_ciudad:{
        remote: "El Numero de Ciudad ya Existe"
      }
    }
  });

// validacion para Actualizar
  var $validarReg = $("#formActCd").validate({
    rules:{
      act_numero_ciudad : {
        required : true,
        digits : true,
      },
      act_nombre : {
        required : true
      },
      act_cp : {
        required : true,
        digits : true,
        maxlength: 5,
      },
      act_costo : {
        required : true,
        digits : true
      }
    }
  });

//  Hacer Registro de nueva Ciudad
  $("#registrar").click(function() {
    if($("#formRegCd").valid()){
      var $info = {
        num_ciudad : $("#numero_ciudad").val(),
        nombre : $("#nombre").val(),
        cp : $("#cp").val(),
        costo : $("#costo").val(),
        id_estado : $("#estado").val()
      }

      $.ajax({
        url: $("#formRegCd").attr("action"),
        type: 'POST',
        data: {data: $info}
      })
      .done(function(response) {
        $("#numero_ciudad").val("");
        $("#nombre").val("");
        $("#cp").val("");
        $("#costo").val("");
        $("#modal-reg-ciudad").modal("hide");
        document.location.href = "/ciudades";
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
        title: "¿Estas Seguro que deseas eliminar la Ciudad?",
        text: "Una vez eliminado no puede ser recuperado",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Eliminar",
        closeOnConfirm: false },
        function(){
          $.ajax({
            url: '/cd-eliminar',
            type: 'POST',
            data: {data: $ident}
          })
          .done(function(response) {
            console.log(response);
            document.location.href = "/ciudades";
            swal("Eliminado", "La Ciudad ha sido eliminada correctamente", "success");
          });
        });
    });

  // Actualizar registro de estado
  $("#actualizar").click(function() {
    if($("#formActCd").valid()){
      var $inform = {
        act_num_ciudad : $("#act_numero_ciudad").val(),
        act_nombre : $("#act_nombre").val(),
        act_cp : $("#act_cp").val(),
        act_costo : $("#act_costo").val(),
        act_id_estado : $("#act_estado").val()
      }

      $.ajax({
        url: $("#formActCd").attr("action"),
        type: 'POST',
        data: {data: $inform}
      })
      .done(function(response) {
        console.log(response);
        $("#modal-act-ciudad").modal("hide");
        document.location.href = "/ciudades";
        swal(response, "La Ciudad ha sido Actualizada correctamente", "success");
      })
      .fail(function(error) {
        console.log(error);
      });
    }
  });

});
