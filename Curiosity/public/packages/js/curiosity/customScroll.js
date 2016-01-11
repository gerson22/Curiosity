$(document).ready(function() {

    var irOfrecemos = ($("#inicio").height() + 25);
    var irEscuelas = (irOfrecemos + $("#ofrecemos").height());
    var irPagos = (irEscuelas + $("#escuelas").height());
    var irPreguntas = (irPagos + $("#pagos").height() + 50);

    $("#link-inicio").click(function(){
      $('html, body').animate({scrollTop: 0}, 'slow');
    });

    $("#link-ofrecemos").click(function(){
      $('html, body').animate({scrollTop: irOfrecemos}, 'slow');
    });

    $("#link-escuelas").click(function(){
      $('html, body').animate({scrollTop: irEscuelas}, 'slow');
    });

    $("#link-pagos").click(function(){
      $('html, body').animate({scrollTop: irPagos}, 'slow');
    });

    $("#link-preguntas").click(function(){
      $('html, body').animate({scrollTop: irPreguntas}, 'slow');
    });

});
