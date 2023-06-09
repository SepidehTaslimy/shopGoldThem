$(document).ready(function(){
   
    $(".nav-link").click(function(){ 
      $(".nav-link").removeClass("active-link");
      $(this).addClass("active-link");
    });


    $('#about .section-title').attr({
        "data-aos": "zoom-out",
        "data-aos-duration": "2000"
    });
    $('#about .content').attr({
      "data-aos": "fade-up",
      "data-aos-duration": "2000"
  });

    setTimeout(() => {
        AOS.init();
    }, 120);

    $('.counter-value').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 3500,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });
  var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
                       console.log(height);
  });
  
    /**
   * Mobile nav toggle
   */
    $( '.navbar-toggler').on('click', function(e) {
        $('#navbar').toggleClass('navbar-mobile');
       $(this).toggleClass('bi-list');
       $(this).toggleClass('bi-x');
      })
    