//NAVIGATION

//abrir login

document.querySelector("#login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");

});

//abrir abonate

document.querySelector("#abonate").addEventListener("click",function(){
    document.querySelector(".mapadiv").classList.add("active");

});

//abrir abono

document.querySelector("#verAbono").addEventListener("click",function(){
    document.querySelector(".popup_abono").classList.add("active");

});

//abrir registrate

document.querySelector("#registrate").addEventListener("click",function(){
    document.querySelector(".contenedor_registrate").classList.add("active");
});

//abrir tarifa /cerrar

document.querySelector("#tarifa").addEventListener("click",function(){
    document.querySelector(".contenedor_tarifa").classList.add("active");
});

document.querySelector(".contenedor_tarifa .close-btn").addEventListener("click",function(){
    
    document.querySelector(".contenedor_tarifa").classList.remove("active");
    
});

