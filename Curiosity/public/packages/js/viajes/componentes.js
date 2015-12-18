$(document).ready(function() {


// QUE NO ACTUALICE COMPONENTES PORQUE NOMAS SON DOS CAMPOS NO TIENE CASO //

// Mostrar el formulario de registro
  $("#btnregistrar").click(function() {
    $("#modal-reg-componente").modal("show");
  });

// Accion al hacer click en el renglon
  // $('tr').click(function() {
  //   var $ident = $(this).attr('id');
  //   $.ajax({
  //     url: '/info-componente',
  //     type: 'POST',
  //     data: {data:$ident}
  //   })
  //   .done(function(response) {
  //     $("#act_nombre").val(response.nombre);
  //     $("#act_descripcion").val(response.descripcion);
  //     $("#modal-act-componente").modal("show");
  //   })
  //   .fail(function() {
  //     console.log("error");
  //   })
  //   .always(function() {
  //     console.log("complete");
  //   });
  // });

// Validacion de Actulaizacion
  // $("#formActComponente").validate({
  //   rules:{
  //     act_nombre : {
  //       required : true
  //     },
  //     act_descripcion : {
  //       required : true,
  //       maxlength : 500
  //     }
  //   }
  // });

// Actualizar registro
// $("#actualizar").click(function() {
//   if($("#formActComponente").valid()){
//     var $inform = {
//       act_nombre : $("#act_nombre").val(),
//       act_descripcion : $("#act_descripcion").val()
//     }
//
//     $.ajax({
//       url: $("#formActComponente").attr("action"),
//       type: 'POST',
//       data: {data: $inform}
//     })
//     .done(function(response) {
//       console.log(response);
//       $("#modal-act-componente").modal("hide");
//       document.location.href = "/componentes";
//       swal(response, "El Componente ha sido Actualizado correctamente", "success");
//     })
//     .fail(function(error) {
//       console.log(error);
//     });
//   }
// });

// Validacion de registro
$("#formRegComponente").validate({
  rules:{
    nombre : {
      required : true,
      remote : {
        url : '/checkNombreComp',
        type : 'POST',
        data : {
          nombre : function(){
            return $("#nombre").val();
          }
        }
      }
    },
    descripcion : {
      required : true,
      maxlength : 500
    }
  },
  messages : {
    nombre : {
      remote : "El componente ingresado ya existe"
    }
  }
});

//  Hacer Registro
$("#registrar").click(function() {
  if($("#formRegComponente").valid()){
    var $info = {
      nombre : $("#nombre").val(),
      descripcion : $("#descripcion").val()
    }

    $.ajax({
      url: $("#formRegComponente").attr("action"),
      type: 'POST',
      data: {data: $info}
    })
    .done(function(response) {
      $("#modal-reg-componente").modal("hide");
      document.location.href = "/componentes";
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
    title: "¿Estas Seguro que deseas eliminar el Componente?",
    text: "Una vez eliminado no puede ser recuperado",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Eliminar",
    closeOnConfirm: false },
    function(){
      $.ajax({
        url: '/elim-componente',
        type: 'POST',
        data: {data: $ident}
      })
      .done(function(response) {
        console.log(response);
        document.location.href = "/componentes";
        swal(response, "El Componente ha sido eliminado correctamente", "success");
      });
    });
  });

});
