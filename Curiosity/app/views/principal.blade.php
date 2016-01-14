<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<link rel="icon" type="image/png" href="/packages/images/Curiosity.png">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  {{HTML::style('/packages/css/bootstrap.min.css')}}
  {{HTML::style('/packages/css/animate.min.css')}}
  {{HTML::style('/packages/css/font-awesome.min.css')}}
  {{HTML::style('/packages/css/curiosity/style.css')}}
  <title>Curiosity</title>
</head>
<!-- Navbar menu -->
<div class="navbar navbar-default navbar-fixed-top bg-blue" role="navigation">
  <div class="container-fluid">
    <div class="navbar-header">
      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon icon-bar"></span>
        <span class="icon icon-bar"></span>
        <span class="icon icon-bar"></span>
      </button>
      <a href="javascript:void(0)" class="navbar-brand">
				<span>{{HTML::image('/packages/images/Curiosity-mini.png')}}</span>
        Curiosity<small>.com.mx</small>
      </a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right main-navigation">
        <li><a href="javascript:void(0)" id="link-inicio">Inicio</a></li>
        <li><a href="javascript:void(0)" id="link-ofrecemos">¿Qué es Curiosity?</a></li>
        <li><a href="javascript:void(0)" id="link-escuelas">Escuelas Asociadas</a></li>
        <li><a href="javascript:void(0)" id="link-pagos">Formas de Pago</a></li>
        <li><a href="javascript:void(0)" id="link-preguntas">Preguntas Frecuentes</a></li>
        <li><a href="/login">Iniciar Sesión</a></li>
      </ul>
    </div>
  </div>
</div>

<!-- / inicio / -->
  <section class="container-fluid pantalla-total" id="inicio">
    <div class="row">

      <div class="col-md-6 col-md-offset-3 hidden-xs hidden-sm text-center">
        {{HTML::image('/packages/images/pg-curiosity.png', 'alt', array('class' => 'img-responsive logo-inicio wow bounceIn'))}}
      </div>
      <div class="col-xs-12 visible-xs visible-sm cel-logo-principal">
				{{HTML::image('/packages/images/pg-curiosity.png', 'alt', array('class' => 'img-responsive logo-inicio'))}}
      </div>

    </div>
    <div class="row hidden-xs hidden-sm">
      <div id="slogan" class="col-md-12 text-center">
        <h1>¡Que tu curiosidad no tenga limites!</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 hidden-xs hidden-sm">
        <br><br>
        <div class="col-md-6 text-right">
          <a href="/login" class="btn btn-primary btn-lg boton-inicio bg-green">
            <span class="fa fa-mortar-board"></span>
            Iniciar Sesión
          </a>
        </div>
        <div class="col-md-6 text-left">
          <a href="javascript:void(0)" class="btn btn-warning btn-lg boton-inicio bg-orange">
            <span class="fa fa-plus-circle"></span>
            Registrate
          </a>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 visible-xs visible-sm">
        <br><br>
        <div class="col-md-12 text-center">
          <a href="/login" class="btn btn-primary btn-lg cel-boton-inicio bg-green">
            <span class="fa fa-mortar-board"></span>
            Iniciar Sesión
          </a>
        </div>
        <div class="col-md-12 text-center">
          <a href="javascript:void(0)" class="btn btn-warning btn-lg cel-boton-inicio bg-orange">
            <span class="fa fa-plus-circle"></span>
            Registrate
          </a>
        </div>
      </div>
    </div>
  </section>

<!-- que ofrecemos -->
<section class="container-fluid" id="ofrecemos">
  <div class="row">
    <div class="col-xs-12 text-center">
      <h3>¿Qué es Curiosity?</h3>
    </div>
  </div>

  <div class="row">
    <div>
      <div class="col-md-2 text-center opciones-margen">
        <span class="fa fa-graduation-cap fa-4x make-circle bg-red"></span>
      </div>
      <div class="col-md-4 opciones-margen">
        <h4><b>Educación de Excelente Calidad</b></h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae commodi repudiandae adipisci dolorum culpa fuga laborum qui, expedita dolores laboriosam ullam hic, esse, est doloremque id! Explicabo obcaecati, quasi nobis.
        </p>
      </div>
    </div>
    <div>
      <div class="col-md-2 text-center opciones-margen">
        <span class="fa fa-puzzle-piece fa-4x make-circle bg-green"></span>
      </div>
      <div class="col-md-4 opciones-margen">
        <h4><b>Aprende y Diviertete</b></h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat officiis assumenda suscipit voluptates eius magni deserunt ea dignissimos nulla! Earum id optio cupiditate quae? Molestias, maxime sint! Sint, suscipit, similique.
        </p>
      </div>
    </div>
  </div>

  <div class="row">
    <div>
      <div class="col-md-2 text-center opciones-margen">
        <span class="fa fa-star fa-4x make-circle bg-pink"></span>
      </div>
      <div class="col-md-4 opciones-margen">
        <h4><b>Aprende Cosas Nuevas</b></h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae commodi repudiandae adipisci dolorum culpa fuga laborum qui, expedita dolores laboriosam ullam hic, esse, est doloremque id! Explicabo obcaecati, quasi nobis.
        </p>
      </div>
    </div>
    <div>
      <div class="col-md-2 text-center opciones-margen">
        <span class="fa fa-bar-chart fa-4x make-circle bg-yellow"></span>
      </div>
      <div class="col-md-4 opciones-margen">
        <h4><b>Seguimiento de Avances</b></h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat officiis assumenda suscipit voluptates eius magni deserunt ea dignissimos nulla! Earum id optio cupiditate quae? Molestias, maxime sint! Sint, suscipit, similique.
        </p>
      </div>
    </div>
  </div>

  <div class="row">
    <div>
      <div class="col-md-2 text-center opciones-margen">
        <span class="fa fa-group fa-4x make-circle bg-blue"></span>
      </div>
      <div class="col-md-4 opciones-margen">
        <h4><b>Aprende en Familia</b></h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nihil debitis iure ducimus cum saepe ipsum nisi ad provident illum vitae rerum, ab repudiandae recusandae. Adipisci itaque deleniti ipsa sunt.
        </p>
      </div>
    </div>
    <div>
      <div class="col-md-2 text-center opciones-margen">
        <span class="fa fa-pie-chart fa-4x make-circle bg-purple"></span>
      </div>
      <div class="col-md-4 opciones-margen">
        <h4><b>Monitoreo por parte de los Padres</b></h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat officiis assumenda suscipit voluptates eius magni deserunt ea dignissimos nulla! Earum id optio cupiditate quae? Molestias, maxime sint! Sint, suscipit, similique.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- escuelas -->
<section id="escuelas">
  <div class="container">
    <div class="row">

      <div class="col-xs-12 text-center">
        <h3>Escuelas Asociadas</h3>
      </div>

      <div class='col-xs-6 col-md-3'>
        <div class='escuelas-panel text-center'>
					{{HTML::image('/packages/images/default.png', 'alt', array('class' => 'img-responsive escuelas-img-hover'))}}
          <h5>Nombre de la Escuela</h5>
        </div>
      </div>
      <div class="col-xs-6 col-md-3">
        <div class="escuelas-panel text-center">
          {{HTML::image('/packages/images/default.png', 'alt', array('class' => 'img-responsive escuelas-img-hover'))}}
          <h5>Nombre de la Escuela</h5>
        </div>
      </div>
      <div class="col-xs-6 col-md-3">
        <div class="escuelas-panel text-center">
          {{HTML::image('/packages/images/default.png', 'alt', array('class' => 'img-responsive escuelas-img-hover'))}}
          <h5>Nombre de la Escuela</h5>
        </div>
      </div>
      <div class="col-xs-6 col-md-3">
        <div class="escuelas-panel text-center">
          {{HTML::image('/packages/images/default.png', 'alt', array('class' => 'img-responsive escuelas-img-hover'))}}
          <h5>Nombre de la Escuela</h5>
        </div>
      </div>

      <div class='col-xs-6 col-md-3'>
        <div class='escuelas-panel text-center'>
          {{HTML::image('/packages/images/default.png', 'alt', array('class' => 'img-responsive escuelas-img-hover'))}}
          <h5>Nombre de la Escuela</h5>
        </div>
      </div>
      <div class="col-xs-6 col-md-3">
        <div class="escuelas-panel text-center">
          {{HTML::image('/packages/images/default.png', 'alt', array('class' => 'img-responsive escuelas-img-hover'))}}
          <h5>Nombre de la Escuela</h5>
        </div>
      </div>
      <div class="col-xs-6 col-md-3">
        <div class="escuelas-panel text-center">
          {{HTML::image('/packages/images/default.png', 'alt', array('class' => 'img-responsive escuelas-img-hover'))}}
          <h5>Nombre de la Escuela</h5>
        </div>
      </div>
      <div class="col-xs-6 col-md-3">
        <div class="escuelas-panel text-center">
          {{HTML::image('/packages/images/default.png', 'alt', array('class' => 'img-responsive escuelas-img-hover'))}}
          <h5>Nombre de la Escuela</h5>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="col-xs-12 text-center">
        <div class="escuelas-mas">
          <span class="fa fa-chevron-circle-right fa-4x"></span>
          <label>Mostrar Todas las Escuelas</label>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- formas de pago -->
<section id="pagos">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 text-center">
        <h3>Formas de Pago y Registro</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="pagos-panel"></div>
      </div>
      <div class="col-md-6">
        <div class="pagos-panel"></div>
      </div>
    </div>
  </div>
</section>

<!-- preguntas frecuentes -->
<section class="bg-blue" id="preguntas">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 text-center">
        <h3>Preguntas Frecuentes</h3>
      </div>
    </div>

    <div class="col-md-6">
      <div class='panel-group' id='preguntas-acordion' role='tablist'>
        <div class='panel panel-default'>
          <div class='panel-heading' role='tab' id='preguntas-head-1'>
            <h4 class='panel-title'>
              <a href='#answer-1' data-toggle='collapse' data-parent='#preguntas-acordion'>
                1) ¿Remplazar por la pregunta número uno?
              </a>
            </h4>
          </div>
          <div id='answer-1' class='panel-collapse collapse'>
            <div class='panel-body'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo asperiores ex, adipisci! Quasi soluta maxime fuga optio expedita eveniet neque incidunt obcaecati. Voluptate non nostrum enim, et nihil officiis!
              </p>
            </div>
          </div>
        </div>

        <div class='panel panel-default'>
          <div class='panel-heading' role='tab' id='preguntas-head-2'>
            <h4 class='panel-title'>
              <a href='#answer-2' data-toggle='collapse' data-parent='#preguntas-acordion'>
                2) ¿Remplazar por la pregunta número dos?
              </a>
            </h4>
          </div>
          <div id='answer-2' class='panel-collapse collapse'>
            <div class='panel-body'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo asperiores ex, adipisci! Quasi soluta maxime fuga optio expedita eveniet neque incidunt obcaecati. Voluptate non nostrum enim, et nihil officiis!
              </p>
            </div>
          </div>
        </div>

        <div class='panel panel-default'>
          <div class='panel-heading' role='tab' id='preguntas-head-3'>
            <h4 class='panel-title'>
              <a href='#answer-3' data-toggle='collapse' data-parent='#preguntas-acordion'>
                3) ¿Remplazar por la pregunta número tres?
              </a>
            </h4>
          </div>
          <div id='answer-3' class='panel-collapse collapse'>
            <div class='panel-body'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo asperiores ex, adipisci! Quasi soluta maxime fuga optio expedita eveniet neque incidunt obcaecati. Voluptate non nostrum enim, et nihil officiis!
              </p>
            </div>
          </div>
        </div>

        <div class='panel panel-default'>
          <div class='panel-heading' role='tab' id='preguntas-head-4'>
            <h4 class='panel-title'>
              <a href='#answer-4' data-toggle='collapse' data-parent='#preguntas-acordion'>
                4) ¿Remplazar por la pregunta número cuatro?
              </a>
            </h4>
          </div>
          <div id='answer-4' class='panel-collapse collapse'>
            <div class='panel-body'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo asperiores ex, adipisci! Quasi soluta maxime fuga optio expedita eveniet neque incidunt obcaecati. Voluptate non nostrum enim, et nihil officiis!
              </p>
            </div>
          </div>
        </div>

        <div class='panel panel-default'>
          <div class='panel-heading' role='tab' id='preguntas-head-5'>
            <h4 class='panel-title'>
              <a href='#answer-5' data-toggle='collapse' data-parent='#preguntas-acordion'>
                5) ¿Remplazar por la pregunta número cinco?
              </a>
            </h4>
          </div>
          <div id='answer-5' class='panel-collapse collapse'>
            <div class='panel-body'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo asperiores ex, adipisci! Quasi soluta maxime fuga optio expedita eveniet neque incidunt obcaecati. Voluptate non nostrum enim, et nihil officiis!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="col-md-6">
      <form action="">
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon bg-green addon-green">
              <span class="fa fa-user"></span>
            </span>
            <input type="text" name="nombre" id="nombre" placeholder="Escribe tu Nombre" class="form-control">
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon bg-purple addon-purple">
              <span class="fa fa-envelope"></span>
            </span>
            <input type="email" name="email" id="email" placeholder="Escribe tu E-mail" class="form-control">
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon bg-orange addon-orange">
              <span class="fa fa-edit"></span>
            </span>
            <input type="text" name="text" id="pregunta" placeholder="Escribe tu Pregunta" class="form-control">
          </div>
        </div>

        <div class="form-group">
          <textarea rows="5" name="comentario" id="comentario" class="form-control" placeholder="Escribe algun Comentario"></textarea>
        </div>
      </form>
      <div class="text-right">
        <button type="button" name="enviar-pregunta" class="btn btn-primary btn-lg" id="preguntas-bnt-enviar">
          Enviar Pregunta
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Pie de la pagina -->
<footer>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 text-center">
        <h4><b>Curiosity.com.mx</b></h4>
        <h5>Copyright &copy; 2016 | Que tu curiosidad no tenga limites</h5>
      </div>
    </div>
  </div>
</footer>

{{HTML::script('/packages/js/jquery.min.js')}}
{{HTML::script('/packages/js/bootstrap.min.js')}}
{{HTML::script('/packages/js/wow.min.js')}}
{{HTML::script('/packages/js/curiosity/customScroll.js')}}
</body>
</html>
