document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = '';

    // Captura de valores
    const datos = {
        nombres: document.getElementById('nombres').value.trim(),
        apellidos: document.getElementById('apellidos').value.trim(),
        dni: document.getElementById('dni').value.trim(),
        correo: document.getElementById('correo').value.trim(),
        celular: document.getElementById('celular').value.trim(),
        edad: parseInt(document.getElementById('edad').value),
        ciudad: document.getElementById('ciudad').value.trim(),
        carrera: document.getElementById('carrera').value.trim(),
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        fechaRegistro: new Date().toLocaleDateString()
    };

    // Validaciones lógicas
    if (datos.dni.length !== 8 || isNaN(datos.dni)) {
        return mostrarError("El DNI debe tener 8 dígitos numéricos.");
    }
    if (datos.celular.length !== 9 || isNaN(datos.celular)) {
        return mostrarError("El celular debe tener 9 dígitos.");
    }
    if (datos.edad < 18) {
        return mostrarError("Debes ser mayor de 18 años.");
    }
    if (datos.password.length < 6) {
        return mostrarError("La contraseña debe tener al menos 6 caracteres.");
    }
    if (datos.password !== datos.confirmPassword) {
        return mostrarError("Las contraseñas no coinciden.");
    }

    // Guardar en LocalStorage (sin la contraseña por seguridad)
    delete datos.password;
    delete datos.confirmPassword;
    
    localStorage.setItem('usuarioRegistrado', JSON.stringify(datos));
    
    // Redirección
    window.location.href = 'perfil.html';
});

function mostrarError(mensaje) {
    const box = document.getElementById('mensajeError');
    box.textContent = mensaje;
    box.style.display = 'block';
}
