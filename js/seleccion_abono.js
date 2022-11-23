

  $(document).ready(function(){
    
    //FONDO
    
    $("#F2").click(function(){
    $("#nombreGrada").empty();
    $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp FONDO SEGUNDO ANFITEATRO</b>.");
    });
  
    $("#F1").click(function(){
        $("#nombreGrada").empty(); 
        $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp FONDO PRIMER ANFITEATRO</b>.");
      });

    $("#FB").click(function(){
        $("#nombreGrada").empty(); 
        $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp FONDO TRIBUNA BAJA</b>.");
      });
        
    //PREFERENCIA
    
    $("#P2").click(function(){
        $("#nombreGrada").empty(); 
        $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp PREFERENCIA SEGUNDO ANFITEATRO</b>.");
      });
    
      $("#P1").click(function(){
        $("#nombreGrada").empty(); 
          $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp PREFERENCIA PRIMER ANFITEATRO</b>.");
        });
  
      $("#PB").click(function(){
        $("#nombreGrada").empty(); 
          $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp PREFERENCIA TRIBUNA BAJA</b>.");
        });
          
    //GOL NORTE
    
    $("#N2").click(function(){
        $("#nombreGrada").empty(); 
        $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp GOL NORTE SEGUNDO ANFITEATRO</b>.");
      });
    
      $("#N1").click(function(){
        $("#nombreGrada").empty(); 
          $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp GOL NORTE PRIMER ANFITEATRO</b>.");
        });
  
      $("#NB").click(function(){
        $("#nombreGrada").empty(); 
          $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp GOL NORTE TRIBUNA BAJA</b>.");
        });
          
    //GOL SUR 
    
    $("#S2").click(function(){
        $("#nombreGrada").empty(); 
        $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp GOL SUR SEGUNDO ANFITEATRO</b>.");
      });
    
      $("#S1").click(function(){
        $("#nombreGrada").empty(); 
          $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp GOL SUR PRIMER ANFITEATRO</b>.");
        });
  
      $("#SB").click(function(){
        $("#nombreGrada").empty(); 
          $(".seleccionGrada p").append("<b>&nbsp&nbspHa seleccionado:<br>&nbsp GOL SUR TRIBUNA BAJA</b>.");
        });


  });

  $("path").blur(function(){
    $("#nombreGrada").empty(); 
      $(".seleccionGrada p").append("<b>&nbsp&nbsp Selecciona una grada</b>");
    });

  
//abrir y cerrar pop up

    document.querySelector("#show-login2").addEventListener("click",function(){
      document.querySelector(".mapadiv").classList.add("active");
  
  });

    document.querySelector(".mapadiv .close-btn").addEventListener("click",function(){
    
      document.querySelector(".mapadiv").classList.remove("active");
      
  });