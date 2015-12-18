$(document).on("ready",function(){
	
	
	function AjaxRequest(ruta,methodRequest,tipo,datos){
		return $.ajax({
			url:ruta,
			type:methodRequest,
			dataType:tipo,
			data:datos
		});
	}
	
	function llenarSelect(){
		AjaxRequest('/obtEscalas','POST','JSON').done(function(response){
			$.each(response,function(i,object){
				var $option = $("<option/>");
				$option.val(object.id);
				$option.text(object.descripcion);
				$("#escalas").append($option);
			});
		}).fail(function(error,status,statusText){
			swal("Ocurrio un error",statusText,"error");
		});
	}
	
	function traerEscalasPosibles(){
		$("#posibility-escalas").empty();
		AjaxRequest('/traerCiudades','POST','JSON').done(function(response){
			console.log(response);
				$.each(response,function(i,object){
					var $span = $("<span/>");
					var $span2 = $("<span/>");
					var $div =$("<div/>").addClass("checkbox");
					var $label = $("<label/>");
					var $checkbox = $("<input>").attr("type","checkbox");
					$label.append($checkbox.val(object.id));
					$label.append($span.addClass("checkbox-material").append($span2.addClass("check")));
					$div.append($label.append(" "+object.nombre));

					$("#posibility-escalas").append($div);
				});
		}).fail(function(error){
			console.log(error);
		});
	}
	function limpiarChecked(){
		$("#posibility-escalas div label").children("input").each(function(i,valor){
			 if($(this).is(":checked"))
				 $(this).prop("checked",false);
		});
	}
	function asignarEscalas(){
		var ciudades = [];
		var datos=[];
		$("#posibility-escalas div label").children("input").each(function(i,valor){
			 if($(this).is(":checked"))
				 ciudades.push({name:"ciudades_id",value:$(this).val()});
		});
		var	escalas ={name:"escalas_id",value:$("#escalas").val()};
		datos.push(escalas);
		datos.push({name:"ciudades",value:JSON.stringify(ciudades)});
		
		AjaxRequest('/asignarEscalas','POST','JSON',datos).done(function(response){
			console.log(response);
			if(response == 1){
				swal("Se asignaron correctamente","Se asignaron los componentes al camión de manera correcta","success");
			}
			else
				{
					swal("ERROR","UPS! ocurrio un error al intentar asignar los componentes, intentalo nuevamente o mas tarde","error");
				}
		}).fail(function(error){
			console.log(error);
		});
	}
	function verificarCiudades(){
		//var datos =  {name:"escalas_id",value:$("#escalas").val()}
		var datos = $("#frm_escalas_ciudades").serializeArray();
		AjaxRequest('/verifCiudades','POST','JSON',datos).done(function(response){
			limpiarChecked();
			console.log(response);
			$.each(response,function(i,object){
				$("#posibility-escalas div label").children("input").each(function(i,valor){
					if($(valor).val() == object.ciudades_id)
						{
							$(this).prop("checked",true);
						}
				});
			});
		}).fail(function(error,status,statusText){
			console.log(error);
			console.log(status);
			console.log(statusText);
		});
	}
	llenarSelect();
	traerEscalasPosibles();
	$("#btn_asignEsc").on('click',function(){
		asignarEscalas();
	});
	$("#escalas").on('click',function(){
		verificarCiudades();
	});
});