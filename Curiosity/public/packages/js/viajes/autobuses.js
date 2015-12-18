$(document).ready(function() {

// llenar selects de clasificaciones
$.ajax({
  url: '/traerClas',
  type: 'POST'
})
.done(function(response) {
  $.each(response, function(index, clas) {
    $("#clasificacion").append("<option value='" + clas.id + "'>" + clas.nombre_clasificacion + "</option>");
    $("#act_clasificacion").append("<option value='" + clas.id + "'>" + clas.nombre_clasificacion + "</option>");
  });
  console.log("success");
})
.fail(function(error) {
  console.log(error);
});


// Mostrar el formulario de registro
  $("#btnregistrar").click(function() {
    $("#modal-reg-autobus").modal("show");
  });

// Accion al hacer click en el renglon
  $('tr').click(function() {
    var $ident = $(this).children('td').first().text();
    if(!$(this).hasClass("eliminar"))
		{
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
		}
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
      act_matricula : $("#act_matricula").val(),
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
});

// Validacion de registro
$("#formRegAutobus").validate({
  rules:{
    matricula : {
      required : true,
      remote : {
        url : '/checkMatriculaAut',
        type : 'POST',
        data : {
          matricula : function(){
            return $("#matricula").val();
          }
        }
      }
    },
    llantas : {
      required : true,
      digits : true
    },
    ancho : {
      required : true,
      digits : true
    },
    alto : {
      required : true,
      digits : true
    },
    asientos : {
      required : true,
      digits : true
    },
    descripcion : {
      required : true,
      maxlength : 500
    },
    clasificacion : {
      required : true,
      digits :true
    }
  },
  messages : {
    matricula : {
      remote : "La matricula ingresada ya existe"
    }
  }
});

//  Hacer Registro
$("#registrar").click(function() {
  if($("#formRegAutobus").valid()){
    var $info = {
      matricula : $("#matricula").val(),
      cant_llantas : $("#llantas").val(),
      ancho : $("#ancho").val(),
      altura : $("#alto").val(),
      cant_asientos : $("#asientos").val(),
      clasificaciones_id : $("#clasificacion").val(),
      descripcion : $("#descripcion").val()
    }
   console.log($info);
    $.ajax({
      url: $("#formRegAutobus").attr("action"),
      type: 'POST',
      data: {data: $info}
    })
    .done(function(response) {
      $("#modal-reg-clas").modal("hide");
		console.log(response);
        document.location.href = "/autobuses";
      swal(response, "Click en Aceptar para Continuar", "success");
    })
    .fail(function(error) {
      console.log(error);
    });
  }
});

// Eliminar Regostro
$(".eliminar").on('click',function(e) {
	 var $ident = $(this).attr('id');
  e.preventDefault();
	$("#modal-act-autobus").modal("hide");
	
  swal({
    title: "¿Estas Seguro que deseas eliminar el Autobus?",
    text: "Una vez eliminado no puede ser recuperado",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Eliminar",
    closeOnConfirm: false },
    function(){
      $.ajax({
        url: '/elim-autobus',
        type: 'POST',
        data: {data: $ident}
      })
      .done(function(response) {
        console.log(response);
        document.location.href = "/autobuses";
        swal(response, "El Autobus ha sido eliminado correctamente", "success");
      });
    });
  });

});
