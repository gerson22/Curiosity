<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/png" href="/packages/images/Curiosity.png">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  {{HTML::style('/packages/css/bootstrap.min.css')}}
  {{HTML::style('/packages/css/font-awesome.min.css')}}
  {{HTML::style('/packages/css/curiosity/userStyle.css')}}
  {{HTML::style('/packages/css/curiosity/loginStyle.css')}}
  <title>Curiosity | login</title>
</head>
<body>

  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12">
        <div class="lockscreen-wrapper">
          <div class="well well-lg">
            <div class="lockscreen-logo">
              <!-- <b>Curiosity</b><small>.com.mx</small> -->
              <center>
                {{HTML::image('/packages/images/pg-curiosity.png', 'alt', array('class' => 'img-responsive wow bounceIn lock-img'))}}
              </center>
            </div>
            <center><div class="lockscreen-name sr-only"><b>Nombre de Usuario</b></div></center>

            <div class="lockscreen-item">
              <div class="lockscreen-image">
                {{HTML::image('/packages/images/default.png')}}
              </div>

              <!-- <form class="lockscreen-credentials"> -->
                <div class="input-group">
                  <form class="lockscreen-credentials">
                    <input type="text" class="form-control" placeholder="Nombre de usuario">
                  </form>
                  <div class="input-group-btn">
                    <!-- <button class="btn"><i class="fa fa-arrow-right text-muted"></i></button> -->
                    <a href="/cursos" class="btn">
                      <i class="fa fa-arrow-right text-muted"></i>
                    </a>
                  </div>
                </div>
              <!-- </form> -->
            </div>

            <div class="text-center">
              <a href="/" class="btn btn-danger" id="regresar-home">
                <span class="fa fa-arrow-left"></span>
                &nbsp;&nbsp;
                Regresar a la Página Principal
              </a>
            </div>

            <div class="lockscreen-footer text-center">
              Copyright &copy; 2016 | <b>Curiosity</b><br>
              Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


{{HTML::script('/packages/js/jquery.min.js')}}
{{HTML::script('/packages/js/bootstrap.min.js')}}
</body>
</html>
