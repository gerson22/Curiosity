$(document).ready(function() {

// Traer y mostrar las linea de autobuses en la pagina principal
  $.ajax({
    url: '/traerLineas', // ir a la ruta la cual se conecta a las lineas y trae todo
    type: 'POST' // se hace la peticion por post
  })
  .done(function(response) {
    // recorremos el response para crear en tiempo de ejecucion el div con la imagen y sus datos de la linea, el index es la posicion y obj representa cada una de las lines
    $.each(response, function(index, obj) {
      $(".addLinea").append("<br><br><div class='row addPrincipal'><div class='col-md-2'><img src='/imagenes/lineas/" + obj.logotipo + "' width='100%' class='img-responsive'/></div><div class='col-md-10'><h4>"+obj.nombre+ "</h4><p>" + obj.descripcion +"</p></div></div>");
    });
  })
  .fail(function(error) {
    console.log(error); // si falla se envia el mensaje de error en la consola
  });

// ------------------------------------------------------------------------------------------------- //

// Traer y mostrar las clasificaciones en la pagina principal
  $.ajax({
    url: '/traerClas', // ir a la ruta la cual se conecta a las clasificaciones y trae todo
    type: 'POST' // se hace la peticion por post
  })
  .done(function(response) {
    // recorremos el response para crear en tiempo de ejecucion el div con el nombre de la clasificacion y la descripcion de esta, el index es la posicion y obj representa cada una de las clasificaciones
    $.each(response, function(index, obj) {
      $(".addClasif").append("<br><br><br><div class='row addPrincipal'><div class='col-md-12'><h4>"+obj.nombre_clasificacion+"</h4>"+obj.descripcion+"<p></p></div></div>");
    });
  })
  .fail(function(error) {
    console.log(error); // si falla se envia el mensaje de error en la consola
  });

// ------------------------------------------------------------------------------------------------- //

  // Traer y mostrar los tipos de autobus en la pagina principal
    $.ajax({
      url: '/traerTipos', // ir a la ruta la cual se conecta a los tipos y trae todo
      type: 'POST', // se hace la peticion por post
	  dataType:'JSON'
    })
    .done(function(response) {
      // recorremos el response para crear en tiempo de ejecucion el div con el nombre del tipo de autobus y la descripcion de este, el index es la posicion y obj representa cada uno de los tipos
      $.each(response, function(index, obj) {
        $(".addTipo").append("<br><br><br><div class='row addPrincipal'><div class='col-md-12'><h4>"+obj.tipo+"</h4>"+obj.descripcion+"<p></p></div></div>");
      });
    })
    .fail(function(error) {
      console.log(error); // si falla se envia el mensaje de error en la consola
    });



});
