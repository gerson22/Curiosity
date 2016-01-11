@extends('admin_base')

@section('title')
  cursos
@stop

@section('titulo_contenido')
  Cursos de Estudio
@stop

@section('titulo_small')
@stop

@section('panel_opcion')

<div class='col-md-4'>
  <div class='box box-widget widget-user curso bloque-hover'>
    <div class='widget-user-header bg-teal-active'>
      <h3 class='widget-user-username text-center'>Tercer Grado</h3>
      <h5 class='widget-user-desc'></h5>
    </div>
    <div class='widget-user-image'>
      {{HTML::image('/packages/images/default.png', 'alt', array('class' => 'img-circle'))}}
    </div>
    <div class='box-footer'>
      <div class='row'>
        <div class='col-xs-4 border-right'>
          <div class='description-block'>
            <span class='fa fa-star fa-3x'></span>
            <br>
            <span class='description-text'>RANKING<br>8.0</span>
          </div>
        </div>
        <div class='col-xs-4 border-right'>
          <div class='description-block'>
            <span class='fa fa-tasks fa-3x'></span>
            <br>
            <span class='description-text'>CURSOS<br>6</span>
          </div>
        </div>
        <div class='col-xs-4'>
          <div class='description-block'>
            <span class='fa fa-unlock fa-3x'></span>
            <br>
            <span class='description-text'>UNLOCK</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

@stop


@section('mi_js')
  {{HTML::script('/packages/js/curiosity/cursos.js')}}
@stop
