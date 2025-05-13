function ValidarFormulario() {
    event.preventDefault(); 
    //Capturamos los valores del formulario
     let nombre=document.getElementById("nombre");
     let apellido=document.getElementById("apellido");
     let correo=document.getElementById("correo");
     let contraseña=document.getElementById("contraseña");

    // capturamos el ID de los errores del formulario
    const nombreError = document.getElementById('nombreerror');
    const apellidoError = document.getElementById('apellidoerror');
    const correoError = document.getElementById('correoerror');
    const contraseñaError = document.getElementById('contraseñaerror');
    
    //Removemos el borde del input despues de la ejecucion
    nombre.classList.remove("error");
    apellido.classList.remove("error");
    correo.classList.remove("error");
    contraseña.classList.remove("error");

    //Limpiamos los comentarios del input
    nombreError.textContent = '';
    apellidoError.textContent = '';
    correoError.textContent = '';
    contraseñaError.textContent = '';

    let TodoValido = true;
    
    //Validamos el nombre que no este vacio
     if (nombre.value.trim()  === '') {
        nombre.classList.add('error');
        nombreError.textContent = '¡El nombre de usuario no puede estar vacío!';
        return;
    }

    //Validamos el apellido que no este vacio
    if (apellido.value.trim() === '') {
        apellido.classList.add('error');
        apellidoError.textContent = '¡El apellido de usuario no puede estar vacío!';
        return;
    }
    
    //Creamos una variable para validar que el correo debe tener ciertas caracteristicas
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (correo.value.trim() === '' ) {
        correo.classList.add('error');
        correoError.textContent = '¡El correo de usuario no puede estar vacío!';
        return ;

        }else if (!correoValido.test(correo.value.trim())) {
            correoError.textContent = "Por favor, ingresa un correo electrónico válido.";
            console.log("termina,,,1");
            return ;
        } 
    //Validamos la contraseña no este vacio
    if (contraseña.value.trim() === '') {
        contraseña.classList.add('error');
        contraseñaError.textContent = '¡La contraseña de usuario no puede estar vacío!';
        return;
    }

    //Validamos si todo esta en orden, se guardan los datos
    if (TodoValido) {
        Swal.fire({
            icon: "success",
            title: "Registrado con exito",
            showConfirmButton: false,
            timer: 1000
          }).then(() => {
            window.location.href = "index.html";
        });
    }else{
        Swal.fire({
            icon: "error",
            title: "Algo salio mal.. vuelve a intertarlo",
            showConfirmButton: false,
            timer: 1000
        }).then(() =>{window.location.href="inicio.html"})
    }
   
    
}
