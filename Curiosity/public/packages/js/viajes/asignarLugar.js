$(document).on("ready",function(){
			//Tooltips
			$("#lugar img").tooltip("show");
			$("#saveAsiento").prop("disabled",true);
			llenadoTablaViajes();
			var numeroAsiento;
			var asientos = [];
			var asientos=[];
			var idViaje;
			var asientosSeleccionados=0;
			llenadoCurps();
	
			$("#frm_cliente").validate({
				rules:{
					curp : {
						required:true
					},
					nombre: {
						required:true
					},
					apellido_paterno:{
						required:true
					},
					apellido_materno:{
						required:true
					}
				}
			});		
	
			function AjaxRequest(ruta,methodRequest,datoResponse,datos){
				return $.ajax({
							url:ruta,
							type:methodRequest,
							dataType: datoResponse,
							cache:false,
							data: datos
						});
			}
			function llenadoTablaViajes(){
				AjaxRequest('/asignarviajes','POST','JSON').done(function(response){
					$.each(response,function(index,data){
						var $tr = $("<tr/>");
						$.each(data,function(i,datos){
							var $td = $("<td/>");
							$td.append(datos).attr("data-row",i);
							$tr.append($td);
						});
						$("table tbody").append($tr);
					});
				}).fail(function(){
					
				});
			}
            function validarFechaMenorActual(date){
                  var x=new Date();
                  
                  var fecha = date.split("-");
                console.log("valor fecha = "+fecha);
                  x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
                  var today = new Date();
                  console.log("valor today =  "+today);
                    console.log("valor x = "+x);
                 if(x == "Invalid Date")
                     return 0;
                  else if (x >= today)
                    return false;
                  else
                    return true;
            }
            //mostrarhora();
            function mostrarhora(){ 
                var f=new Date();
                cad=f.getHours()+":"+f.getMinutes()+":"+f.getSeconds(); 
                console.log(cad);
                setTimeout(mostrarhora(),1000); 
            }
			function llenadoCurps(){
				$("#curp").append();
				AjaxRequest('/getCurp','GET','JSON').done(function(response){
					$.each(response,function(i,datos){
						$.each(datos,function(i,o){
							var $opciones = $("<option/>");
							$("#curp").append($opciones.text(o));
						});
					});
					console.log(response);
				}).fail(function(error){
					console.log(error);
				});
			}
			function verificarCurp(curpNew){
				var stat=-1;
				$("#curp").children("option").each(function(i,curp){
					console.log(curpNew+" - "+$(curp).text());
					 if(curpNew !== $(curp).text()){
						$("#datosCliente").show();
						  if(stat != 1){
							  stat = -1;
                          }
					 }
					 else{
						$("#datosCliente").hide();
						  stat = 1;
						 return stat;
					 }
					
				});
				return stat;
			}
            
			$("table tbody").on("click","tr",function(){
                var caducado;
				var asientoEsc;
						$(this).children("td").each(function(i,objeto){
                            //console.log(objeto);
							if($(objeto).attr('data-row') == "cant_asientos")
								asientoEsc = $(objeto).text();
							if($(objeto).attr('data-row') == "id")
								idViaje = $(objeto).text();
                            if($(objeto).attr('data-row') == "fecha_viaje")
                                caducado = $(objeto).text();
						});
						llenarCamion(asientoEsc);
						verificarOcupados(idViaje);
                
				if(menorFechaActual(caducado))
				    $("#asignarAsiento").modal("show");
                else
                    swal("Viaje caducado","Este viaje ya no esta disponible","error");
			});
		      function menorFechaActual(caducado){
                  Date.prototype.yyyymmdd = function() {         
                                
                            var yyyy = this.getFullYear().toString();                                    
                            var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based         
                            var dd  = this.getDate().toString();             

                            return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
                       };  

                    d = new Date();
                  var fecha_act = d.yyyymmdd();
                  fecha_act = fecha_act.replace('-','');
                  fecha_act = fecha_act.replace('-','');
                  caducado = caducado.replace('-','');
                  caducado = caducado.replace('-','');
                  if(parseFloat(caducado) >= parseFloat(fecha_act))
                      return true;
                  else
                      return false;
              }
			$("#lugar").on("click","img",function(){
				var ocupate = $(this).attr("data-aciento"); 
				if(ocupate !== "ocupado")
					{
						if($(this).hasClass("selection")){
							$(this).removeClass("selection");
							asientosSeleccionados--;
							if(asientosSeleccionados == 0)
								$("#saveAsiento").prop("disabled",true);
						}
						else{
							$(this).addClass("selection");
							$("#saveAsiento").prop("disabled",false);
							asientosSeleccionados++;
						}
					}
			});
			
			$("#saveAsiento").on("click",function(){
				var num;
				
				$("#lugar div").children("img").each(function(index, contenido){
					var img = $(this);
					
					if(img.hasClass("selection")){
						num = img.attr("data-aciento");
						asientos.push(num);
					}
					
				});
				console.log(asientos);
				asientosSeleccionados=0;
				$("#saveAsiento").prop("disabled",true);
				$("#selectAsiento").modal("show");
			});
			
			$("#btn_saveReserv").click(function(event){
				var $data = $("input[name=curp]").val();
				var datos = [];
				var status =$("#btn_saveReserv").text();
				event.preventDefault();
				$("#btn_saveReserv").text("verificando...");
					
				if($("#frm_cliente").valid()){
					if(verificarCurp($data) == -1){
				 	
						if(status=="Enviar"){
							datos = $("#frm_cliente").serializeArray();
							generarBoleto(datos,"inexistente");
						}
						else{
							$("#btn_saveReserv").text("Enviar");
							$("#datosCliente").show();
							event.preventDefault();
						}
					}
					else{ 
						datos.push({name:"curp",value:$data});
						generarBoleto(datos,"existente");
					}
				}
				llenadoCurps();	
				
			});
			function generarBoleto(datos,status){
						datos.push({name:"asientos",value:JSON.stringify(asientos)});
						datos.push({name:"viajes_id",value:idViaje});
						datos.push({name:"status",value:status});
						console.log(datos);
						AjaxRequest("/asignarBoletos",'POST','JSON',datos).done(function(response){
							console.log(response);
							verificarOcupados(idViaje);
						}).fail(function(error,status,statusText){
							console.log(error);
							console.log(statusText);
							console.log(status);
						});
						$("#btn_saveReserv").text("Enviado");
						$("#frm_cliente").trigger('reset');
						$("#selectAsiento").modal("hide");
						$("#btn_saveReserv").text("OK");
						$("#datosCliente").hide();
			}
			function llenarCamion(Asientos){
				$("#lugar").empty();
				var autobus={
					linea: "Omnibus Mexico",
					numAcientos: Asientos
				}
				var $div = $("<div/>").addClass("col-md-1 col-xs-1");
				var $img = $("<img/>").attr({
					"src":"/imagenes/mesasrojasmas.png",
					"data-aciento":i
				});
				var i=0;
				$div.append($img);
				do{
					var $div = $("<div/>").addClass("col-md-1 col-xs-1");
					var $img = $("<img/>").attr({
						"src":"/imagenes/mesasrojasmas.png",
						"data-aciento":(i+1),
						"data-toggle":"tooltip",
						"data-placement":"left",
						"title":"No. asiento: "+(i+1)
					});
					if(i%2==0){
						$div.addClass("col-md-offset-1");
						$div.append($img);
					}
					else
					{
						$div.append($img);
					}
					
					$("#lugar").append($div);
					i++;
				}while(i != autobus.numAcientos);
			}
			
			function verificarOcupados(idViaje){
				
				var ocupados=[];
				var viaje ={viajes_id:idViaje}
				var data;
				AjaxRequest('/boleto','POST','JSON',viaje).done(function(response){
						asientosOcupados(response);
					}).fail(function(error,status,statusText){
						console.log(error);
						console.log(status);
						console.log(statusText);
					});
			}
			function asientosOcupados(data){
				$("#lugar div").children("img").each(function(index, contenido){
					var img = $(this);
					var num = img.attr("data-aciento");
					
					
						$.each(data,function(i,object){
							if(object.num_asiento == num){
								img.attr({
									"src":"/imagenes/mesaVerdeGrande.png",
									"title":"A nombre: "+object.nombre+" No.asiento:"+num,
									"width":48,
									"heigth":48,
									"data-aciento":"ocupado"
								});
								if(img.hasClass("selection"))
									img.removeClass("selection");
							}
						});
					
				});
					
			}
});

							
													 
			