$(document).on('ready',function(){
	
	var $id;
	llenarSelect();
	function AjaxRequest(ruta,methodRequest,tipo,datos){
		return $.ajax({
			url:ruta,
			type:methodRequest,
			dataType:tipo,
			data:datos
		});
	}
	function Insertar(){
		var $datos = $("#frm_escalas").serializeArray();
		console.log($datos);
		AjaxRequest('/regEscala','POST','HTML',$datos).done(function(response){
			if(response == 1){
				swal("Escala registrada","La escala correspondiente ha sido creada","success");
				$("#modal-reg-escala").modal('hide');
				window.location = "/escalas";
			}
			else{
				swal("Ocurrio un error",response,"error");
			}
		}).fail(function(error,status,statusText){
			swal("Ocurrio un error",statusText,"error");
		});
	}
	function Eliminar(){
		
		console.log($id);
		AjaxRequest('/elimEscala','POST','HTML',{id:$id}).done(function(response){
			if(response == 1){
				swal("Escala eliminada","La escala correspondiente ha sido eliminada","success");
				$("#modal-reg-escala").modal('hide');
				window.location = "/escalas";
			}
			else{
				console.log(response);
				swal("Ocurrio un error",response,"error");
			}
		}).fail(function(error,status,statusText){
			swal("Ocurrio un error",statusText,"error");
		});;
	}
	function llenarSelect(){
		AjaxRequest('/obtViajes','POST','JSON').done(function(response){
			$.each(response,function(i,object){
				var $option = $("<option/>");
				$option.val(object.id);
				$option.text(object.nombre+" --> "+object.fecha_viaje);
				$("#viaje").append($option);
			});
		}).fail(function(error,status,statusText){
			swal("Ocurrio un error",statusText,"error");
		});
	}
	
	$("#btnRegistrarEsc").on('click',function(){
		$("#modal-reg-escala").modal('show');
	});
	
	$("#registrar").on('click',function(){
		Insertar();
	})
	$("tbody tr").on('click',function(){
		$id = $(this).attr('id');
	});
	$(".eliminar").click(function(){
		Eliminar();
	});
	
});