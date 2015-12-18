$(document).ready(function() {

  // Mostrar el formulario de registro
    $("#btnregistrarLin").click(function() {
      $("#modal-reg-linea").modal("show");
    });

  // Accion al hacer click en el renglon
    $('tr').click(function() {
		//alert();
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
      .fail(function(error) {
        console.log(error);
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
      },
      messages: {
        act_nombre:{
          remote: "El Nombre de Linea ya Existe"
        }
      }
    });
	
	
	
    // Actualizar registro de estado
    $("#actualizar").click(function() {
      if($("#formActLinea").valid()){
        /*var $inform = {
          act_nombre : $("#act_nombre").val(),
          act_costo : $("#act_costo").val(),
          act_descripcion : $("#act_descripcion").val()
        }
		var formData = new FormData($("#upload_image")[0]);     
		
		 
        $.ajax({
          url: $("#formActLinea").attr("action"),
          type: 'POST',
		  cache: false,
		  contentType: false,
		  processData: false,
          data: {
			  		data: $inform,
			  		image: formData
				
				}
        })
        .done(function(response) {
          console.log(response);
          $("#modal-act-linea").modal("hide");
          document.location.href = "/lineas";
          swal(response, "La Linea ha sido Actualizada correctamente", "success");
        })
        .fail(function(error) {
          console.log(error);
        });*/
		 $("#formActLinea").submit();
      }
    });
	
	$("#registrar").click(function(){
		$("#formRegLinea").submit();
	});
	
	// Eliminar Regostro
    $(".eliminar").click(function() {
		$("tr").off('click');
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
