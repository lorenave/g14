$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });
  
    $('[data-toggle="popover"]').popover();
    

    $('.subtitulo-receta').on("dblclick", function(){
        $(this).addClass('warning');
    })

    $('#enviarCorreo').click(
      function(){
        alert("El correo fue enviado")
      }
    )
    $('.card-title').on("click", function(){
      $('.card-text').toggle()

    })

  
  });
  