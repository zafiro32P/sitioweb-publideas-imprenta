
document.getElementById("btn__iniciar-sesion").addEventListener("click",iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click",registrar);
window.addEventListener("resize",anchoPagina);


var contenedor_login_registrar = document.querySelector(".contenedor__login-registrar");
var formulario_login = document.querySelector(".formulario__login");
var formulario_registrar = document.querySelector(".formulario__registrar");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_registrar = document.querySelector(".caja__trasera-registrar");



function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_registrar.style.display = "block";
    }else{
        caja_trasera_registrar.style.display = "block";
        caja_trasera_registrar.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registrar.style.display = "none";
        contenedor_login_registrar.style.left = "0px";
    }
}

anchoPagina();

function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_registrar.style.display = "none";
    contenedor_login_registrar.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_registrar.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
    }else{
        formulario_registrar.style.display = "none";
    contenedor_login_registrar.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_registrar.style.display = "block";
    caja_trasera_login.style.display = "none";
    }

}

function registrar(){

    if(window.innerWidth > 850){

        formulario_registrar.style.display = "block";
        contenedor_login_registrar.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_registrar.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";

    }else{
        formulario_registrar.style.display = "block";
        contenedor_login_registrar.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_registrar.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";

    }

   

}

