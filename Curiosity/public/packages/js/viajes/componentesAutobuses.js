$(document).on('ready',function(){
	
	
	getAutobuses();
	cargarComponentes();
	
	function AjaxRequest(ruta,methodRequest,typeDato,Datos){
		return $.ajax({
					url:ruta,
					type:methodRequest,
					dataType:typeDato,
					cache:false,
					data:Datos
				});
	}
	function getAutobuses(){
		$("#autobuses").empty();
		AjaxRequest('/autobus','POST','JSON').done(function(response){
			var $option = $("<option/>").val(null);
			$("#autobuses").append($option.text("#Selecciona el autobus#"));
			console.log(response);
			$.each(response,function(i,autobus){
				var $option = $("<option/>");
				$option.val(autobus.id);
				$option.text(autobus.nombre_clasificacion);
				$("#autobuses").append($option);
			});
			console.log(response);
		}).fail(function(error,status,statusText){
			console.log(error);
			console.log(status);
			console.log(statusText);
		});
	}
	function cargarComponentes(){
		var $busqueda = {name:"matricula",value:$("#autobuses").val()}
		AjaxRequest('/asigComponentes','POST','JSON').done(function(response){
		    $("#componentes").empty();
			$.each(response,function(i,object){
				var $span = $("<span/>");
				var $span2 = $("<span/>");
				var $div =$("<div/>").addClass("checkbox");
				var $label = $("<label/>");
				var $checkbox = $("<input>").attr("type","checkbox");
				$label.append($checkbox.val(object.id));
				$label.append($span.addClass("checkbox-material").append($span2.addClass("check")));
				$div.append($label.append(" "+object.nombre));
				
				$("#componentes").append($div);
			});
			console.log(response);
		}).fail(function(error,status,statusText){
			console.log(error);
			console.log(status);
			console.log(statusText);
		});
	}
	function verificarComponentes(idAutobus){
		var $id = {id_camion:idAutobus}
		AjaxRequest('/hasComponentes','POST','JSON',$id).done(function(response){
			limpiarChecked();
			$.each(response,function(i,object){
				$("#componentes div label").children("input").each(function(i,valor){
					if($(valor).val() == object.id_componente)
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
	function limpiarChecked(){
		$("#componentes div label").children("input").each(function(i,valor){
			 if($(this).is(":checked"))
				 $(this).prop("checked",false);
		});
	}
	function asignarComponentes(){
		var componentes = [];
		var datos=[];
		$("#componentes div label").children("input").each(function(i,valor){
			 if($(this).is(":checked"))
				 componentes.push({name:"id_componente",value:$(this).val()});
		});
		var	id_camion ={name:"id_camion",value:$("#autobuses").val()};
		datos.push(id_camion);
		datos.push({name:"componentes",value:JSON.stringify(componentes)});
		
		AjaxRequest('/asignarComponentes','POST','JSON',datos).done(function(response){
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
	
	$("#autobuses").on('change',function(){
		verificarComponentes($(this).val());
	});
	
	$("#btn_asignComp").on('click',function(){
		asignarComponentes();
	});
});