function iniciarSesion() {
    event.preventDefault();

    let correo = document.getElementById("correo");
    let contraseña = document.getElementById("contraseña");

    let Errorcorreo = document.getElementById("errorcorreo");
    let Errorcontraseña = document.getElementById("errorcontraseña");

    Errorcorreo.textContent = '';
    Errorcontraseña.textContent = '';
    
    let ValidacionCorreo="fercho12@gmail.com";
    let pasword = "fercho123";

    if (correo.value.trim()=== '') {
        Errorcorreo.textContent = '¡Ingrese su correo!';
        return;
    }if (correo.value.trim()!== ValidacionCorreo) {
        Errorcorreo.textContent = '¡Correo incorrecto!'; 
        //console.log("termina");
        return;
    } 

    
    //console.log("entra");
    if (contraseña.value.trim()==='') {
        Errorcontraseña.textContent = '¡Ingrese su contraseña!';
    } else if(contraseña.value.trim()=== pasword){
        Swal.fire({
            icon: "success",
            title: "Bienvenido",
            showConfirmButton: false,
            timer: 1000
        }).then(() =>{window.location.href="Menu.html"})
    }else{
        Errorcontraseña.textContent = '¡contraseña incorrecta!';
    }
    
}