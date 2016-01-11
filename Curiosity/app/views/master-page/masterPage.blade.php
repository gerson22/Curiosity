<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  {{HTML::style('packages/css/bootstrap.min.css')}}
  {{HTML::style('packages/css/roboto.min.css')}}
  {{HTML::style('packages/css/material-fullpalette.min.css')}}
  {{HTML::style('packages/css/ripples.min.css')}}
  {{HTML::style('packages/css/viajes/base.css')}}
  {{HTML::style('packages/css/animate.css')}}
  {{HTML::style('packages/dist/sweetalert.css')}}
  {{HTML::style('packages/awensome/css/font-awesome.min.css')}}
  @yield('css')
  <title>Los Mejores Viajes.com</title>
</head>
    <body>


        {{HTML::script('packages/js/jquery-2.1.4.min.js')}}
        {{HTML::script('packages/js/jquery.validate.min.js')}}
        {{HTML::script('packages/js/localization/messages_es.min.js')}}
        {{HTML::script('packages/js/bootstrap.min.js')}}
        {{HTML::script('packages/js/material.min.js')}}
        {{HTML::script('packages/js/ripples.min.js')}}
        {{HTML::script('packages/dist/sweetalert.min.js')}}
        {{HTML::script('packages/js/viajes/animation.js')}}
        @yield('js')
        <script type="text/javascript">
        $(document).ready(function() {
          $.material.init();
        });
        </script>
    </body>
</html>