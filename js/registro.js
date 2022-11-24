const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

//CREAMOS UN OBJETO QUE CONTIENE LAS EXPRESIONES REGULARES PARA LA VALIDACIÓN

const expresiones = {
    apellidos: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, //letras, espacios, acentos
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, //letras, espacios, acentos
    password: /^.{4,12}$/, //4 a 12 digitos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{9}$/, //9 numeros
    dni: /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i, // 8 digitos y una letra 
    iban: /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/ // regex iban
}

//OBJETO PARA GUARDAR EL ESTADO DE CADA INPUT
const campos ={
    nombre: false,
    apellidos: false,
    password: false,
    correo: false,
    telefono: false,
    dni: false,
    iban: false
}

const validarFormulario =(e)=>{
    switch (e.target.name){
        case "apellidos":
            validarCampo(expresiones.apellidos, e.target, 'apellidos');

        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();//validamos también si son iguales
        break;
        case "password2":
            validarPassword2();// aqui usaré una función para validar que las contraseñas sean iguales
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;

        case "dni":
            validarCampo(expresiones.dni, e.target, 'dni');
        break;

        case "iban":
            validarCampo(expresiones.iban, e.target, 'iban');
        break;



       

    }
}



//FUNCIÓN PARA VALIDAR CAMPOS 

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword2 = ()=>{
    const inputPassword1= document.getElementById('password');
    const inputPassword2= document.getElementById('password2');

    if (inputPassword1.value != inputPassword2.value){
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    }else{
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }

}

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();  //prevenimos que lo envie
    const terminos = document.getElementById('terminos');
    //si los campos son verdaderos
    if (campos.apellidos && campos.nombre && campos.password && campos.correo && campos.telefono  && campos.dni && terminos.checked){
        formulario.reset();
        
        document.getElementById('formulario__msg-exito').classList.add('formulario__msg-exito-activo');

        //el mensaje de envio correcto desaparecerá en 5 sg.
        setTimeout(() => {
            document.getElementById('formulario__msg-exito').classList.remove('formulario__msg-exito-activo');
        },5000);

        //quitaremos los check al enviar y hacer reset

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });

        document.getElementById('formulario__msg').classList.remove('formulario__msg-activo');

    }else{
        document.getElementById('formulario__msg').classList.add('formulario__msg-activo');
    }


    
});

//cerrar formulario de registro

document.querySelector(".contenedor_registrate .close-btn").addEventListener("click",function(){
    
    document.querySelector(".contenedor_registrate").classList.remove("active");
    
});