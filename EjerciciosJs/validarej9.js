document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.forms['calcular'];
    const checkbox = formulario.querySelector('input[type="checkbox"]');

    // Asignar los eventos de blur para validar campos individuales
    formulario['nombre'].addEventListener('blur', validarCampo);
    formulario['email'].addEventListener('blur', validarCampo);
    formulario['comentarios'].addEventListener('blur', validarCampo);
    document.getElementById('password').addEventListener('blur', validarCampo);

    // Validar formulario al enviar
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();  // Previene el envío del formulario

        if (!validarFormulario() || !checkbox.checked) {
            if (!checkbox.checked) {
                alert('Debes aceptar las condiciones del servicio.');
            }
        } else {
            alert('Se ha registrado con éxito');
            formulario.submit();  // Enviar el formulario si todo está correcto
        }
    });
});

// Regex para validar email y password
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

// Función para validar cada campo individualmente
function validarCampo(event) {
    const campo = event.target;
    let mensajeError = '';

    switch (campo.name) {
        case 'nombre':
            if (campo.value.trim() === '') {
                mensajeError = 'El nombre es obligatorio.';
            }
            break;
        case 'email':
            if (campo.value.trim() === '') {
                mensajeError = 'El email es obligatorio.';
            } else if (!regexEmail.test(campo.value.trim())) {
                mensajeError = 'Por favor, introduce una dirección de email válida.';
            }
            break;
        case 'password':
            if (campo.value.trim() === '') {
                mensajeError = 'El password es obligatorio.';
            } else if (!regexPassword.test(campo.value.trim())) {
                mensajeError = 'El password debe tener al menos 6 caracteres, una letra minúscula, una letra mayúscula y un dígito.';
            }
            break;
        case 'comentarios':
            if (campo.value.trim() === '') {
                mensajeError = 'El campo de comentarios es obligatorio.';
            } else if (campo.value.trim().length > 50) {
                mensajeError = 'El texto en el campo de comentarios no debe exceder los 50 caracteres.';
            }
            break;
        default:
            break;
    }

    if (mensajeError) {
        alert(mensajeError);
    }
}

// Función para validar el formulario completo antes del envío
function validarFormulario() {
    let valido = true;
    const formulario = document.forms['calcular'];

    const nombre = formulario['nombre'].value.trim();
    const email = formulario['email'].value.trim();
    const password = formulario['password'].value.trim();
    const comentarios = document.getElementById('comentarios').value.trim();
    let mensajeError = '';

    // Validación del campo de nombre
    if (nombre === '') {
        mensajeError += 'El nombre es obligatorio.\n';
        valido = false;
    }

    // Validación del campo de email
    if (email === '') {
        mensajeError += 'El email es obligatorio.\n';
        valido = false;
    } else if (!regexEmail.test(email)) {
        mensajeError += 'Por favor, introduce una dirección de email válida.\n';
        valido = false;
    }

    // Validación del campo de contraseña
    if (password === '') {
        mensajeError += 'El password es obligatorio.\n';
        valido = false;
    } else if (!regexPassword.test(password)) {
        mensajeError += 'El password debe tener al menos 6 caracteres, una letra minúscula, una letra mayúscula y un dígito.\n';
        valido = false;
    }

    // Validación del campo de comentarios
    if (comentarios === '') {
        mensajeError += 'El campo de comentarios es obligatorio.\n';
        valido = false;
    } else if (comentarios.length > 50) {
        mensajeError += 'El texto en el campo de comentarios no debe exceder los 50 caracteres.\n';
        valido = false;
    }

    // Mostrar los errores si los hay
    if (!valido) {
        alert(mensajeError);
    }

    return valido;
}
