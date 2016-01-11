<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" type="image/png" href="/packages/images/Curiosity.png">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    {{HTML::style('/packages/css/bootstrap.min.css')}}
    {{HTML::style('/packages/css/animate.min.css')}}
    {{HTML::style('/packages/css/font-awesome.min.css')}}
    {{HTML::style('/packages/css/skins/skin-blue.css')}}
    {{HTML::style('/packages/css/curiosity/userStyle.css')}}
    @yield('mi_css')
    <title>Curiosity | @yield('title')</title>
  </head>
  <body class="hold-transition skin-blue sidebar-mini">
    <div class="wrapper">

      <header class="main-header">
        <div class="logo">
          <span class="logo-mini">
            {{HTML::image('/packages/images/Curiosity-mini.png')}}
          </span>
          <span class="logo-lg">
            {{HTML::image('/packages/images/Curiosity-mini.png')}}
            <b>Curiosity<small>.com.mx</small></b>
          </span>
        </div>

        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"></a>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">

              <!-- Menu de cuenta de usuario -->
              <li class="dropdown user user-menu hidden-xs">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  {{HTML::image('/packages/images/avatars/avt-cu-default.png', 'alt', array('class' => 'user-image'))}}
                  <span class="hidden-xs">Nombre Apellido</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="user-header">
                    {{HTML::image('/packages/images/avatars/avt-cu-default.png', 'alt', array('class' => 'img-circle'))}}
                    <p>
                      <b>Nombre Apellido</b>
                      <small><b>Nivel</b> | básico</small>
                    </p>
                  </li>

                  <!-- Footer Menu -->
                  <li class="user-footer">
                    <div class="pull-left">
                      <a href="#" class="btn btn-primary">
                        <span class="fa fa-gear"></span>
                        Editar Perfil
                      </a>
                    </div>
                    <div class="pull-right">
                      <a href="/" class="btn btn-danger">
                        <span class="fa fa-arrow-circle-right"></span>
                        Cerrar Sesión
                      </a>
                    </div>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </nav>
      </header>

      <!-- Barra lateral izquierda con menu y estatus -->
      <aside class="main-sidebar">
        <section class="sidebar">
          <br>
          <div class="user-panel">
            <div class="pull-left image">
              {{HTML::image('/packages/images/avatars/avt-cu-default.png', 'alt', array('class' => 'img-circle'))}}
            </div>
            <div class="pull-left info">
              <p>Nombre Apellido</p>
              rol de usuario
            </div>
          </div>

          <!-- menu en la barra lateral izquierda -->
          <br>
          <ul class="sidebar-menu">

            <li class="active">
              <a href="/cursos">
                <i class="fa fa-graduation-cap"></i>
                <span>Cursos de Estudio</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-heart"></i>
                <span>Mis cursos</span>
              </a>
            </li>

            <li class="visible-xs">
              <a href="/">
                <i class="fa fa-arrow-circle-right"></i>
                <span>Salir</span>
              </a>
            </li>

          </ul>
        </section>
      </aside>

      <!-- Zona de Contenido general -->
      <div class="content-wrapper">
        <!-- Encabezado de la pagina -->
        <section class="content-header">
          <div class="well">
                <h1>
                  @yield('titulo_contenido')
                  <small>@yield('titulo_small')</small>
                </h1>
                <p>
                  @yield('descripcion')
                </p>
          </div>
        </section>

        <!-- Contenido principal -->
        <section class="content">
            <div class="container-fluid">
              <div class="row">
              <!-- panel para biblioteca de estudio -->
                @yield('panel_opcion')
              </div>
            </div>
        </section>
      </div>

      <!-- Footer principal general -->
      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <small>
            <b>¡Que tu curiosidad no tenga limites!</b>
          </small>
        </div>
        <strong>Copyright &copy; 2016 <a href="javascript:void(0)">Curiosity.com.mx | Conocenos</a></strong>
      </footer>

  {{HTML::script('/packages/js/jquery.min.js')}}
  {{HTML::script('/packages/js/bootstrap.min.js')}}
  {{HTML::script('/packages/js/wow.min.js')}}
  {{HTML::script('/packages/js/app.min.js')}}
  @yield('mi_js')
  </body>
</html>
