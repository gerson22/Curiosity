$(document).ready(function() {

  var datosLogin = $("#formLogin");

  datosLogin.validate({
    rules:{
      username     : {required : true},
      pass         : {required : true}
    }
  });

  $("#entrar").click(function(event) {
    if (datosLogin.valid()) {
      $.ajax({
          url: $("#formLogin").attr('action'),
          type: 'POST',
          dataType:'HTML',
          data: $("#formLogin").serialize()
      }).done(function(response){
          console.log(response);
          switch(response){
              case '1':
                  event.preventDefault();
                  window.location='/';
                  break;
              case '0':
                  swal("Credenciales Erroneas","Tu usuario o contraseña estan incorrectas","warning");
                  break;
          }
      }).fail(function(error,status,statusText){
          console.log(statusText);
          swal(status,statusText,"error");
      });
    }
  });




});
