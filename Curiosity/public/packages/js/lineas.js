$(document).ready(function() {

  // Mostrar el formulario de registro
    $("#btnregistrarUs").click(function() {
      $("#modal-reg-linea").modal("show");
    });

  // Accion al hacer click en el renglon
    $('tr').click(function() {
      var $ident = $(this).children('td').first().text();
      $.ajax({
        url: '/info-linea',
        type: 'POST',
        data: {data:$ident}
      })
      .done(function(response) {
        $("#act_codigo").val(response.codigo_id);
        $("#act_nombre").val(response.nombre);
        $("#act_costo").val(response.costo);
        $("#act_descripcion").val(response.descripcion);
        $("#modal-act-linea").modal("show");
        console.log(response);
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
    });

  // Validacion de Actulaizacion
    $("#formActLinea").validate({
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
        }
      }
    });

  // Actualizar registro de linea
    $("#actualizar").click(function() {
      $("#formActLinea").submit();
      // if($("#formActLinea").valid()){
      //   var $inform = {
      //     codigo : $("#act_codigo").val(),
      //     act_nombre : $("#act_nombre").val(),
      //     act_costo : $("#act_costo").val(),
      //     act_descripcion : $("#act_descripcion").val()
      //   }
      //
      //   $.ajax({
      //     url: $("#formActLinea").attr("action"),
      //     type: 'POST',
      //     data: {data: $inform}
      //   })
      //   .done(function(response) {
      //     console.log(response);
      //     $("#modal-act-linea").modal("hide");
      //     document.location.href = "/lineas";
      //     swal(response, "La Linea ha sido Actualizada correctamente", "success");
      //   })
      //   .fail(function(error) {
      //     console.log(error);
      //   });
      // }
    });

  // Validacion de Registro
    $("#formRegLinea").validate({
      rules:{
        codigo :{
          required : true,
          digits : true,
          remote : {
            url : '/chekCodigoLin',
            type : 'POST',
            data : {
              codigo : function(){
                return $("#codigo").val();
              }
            }
          }
        },
        nombre : {
          required : true,
          remote : {
            url : '/chekNombreLIN',
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
        }
      },
      messages: {
        nombre:{
          remote: "El Nombre de Linea ya Existe"
        },
        codigo:{
          remote: "El Código de Linea ya Existe"
        }
      }
    });

  //  Hacer Registro de nueva linea
    $("#registrar").click(function() {
      $("#formRegLinea").submit();
      // var formData = new FormData($("#logo")[0]);
      // if($("#formRegLinea").valid()){
      //   var $info = {
      //     codigo_id : $("#codigo").val(),
      //     nombre : $("#nombre").val(),
      //     costo : $("#costo").val(),
      //     descripcion : $("#descripcion").val(),
      //     logo : imagen
      //   }
      //
      //   $.ajax({
      //     url: $("#formRegLinea").attr("action"),
      //     type: 'POST',
      //     data: {data: $info},
      //     contentType: 'false',
      //     processData: 'false'
      //   })
      //   .done(function(response) {
      //     $("#codigo").val(""),
      //     $("#nombre").val(""),
      //     $("#costo").val(""),
      //     $("#descripcion").val("")
      //     $("#modal-reg-linea").modal("hide");
      //     document.location.href = "/lineas";
      //     swal(response, "Click en Aceptar para Continuar", "success");
      //     console.log(response);
      //   })
      //   .fail(function(error) {
      //     console.log(error);
      //   });
      // }
    });

  // Eliminar Regostro
    $(".eliminar").click(function() {
      var $ident = $(this).attr('id');
      swal({
        title: "¿Estas Seguro que deseas eliminar la Linea de Autobus?",
        text: "Una vez eliminado no puede ser recuperado",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Eliminar",
        closeOnConfirm: false },
        function(){
          $.ajax({
            url: '/elim-linea',
            type: 'POST',
            data: {data: $ident}
          })
          .done(function(response) {
            console.log(response);
            document.location.href = "/lineas";
            swal(response, "La Linea ha sido eliminada correctamente", "success");
          });
        });
    });

});
