document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault()

    var error_pass = document.getElementById('error_pass')
    var pass = document.getElementById('pass')
    var errores = 0

    pass.classList.remove('invalid')
    error_pass.innerHTML = ""

    if (pass.value.length < 8) {
        error_pass.innerHTML += "Contraseña debe tener 8 caracteres <br>"
        pass.classList.add("invalid")
        errores++
    }

    var exprMin = RegExp("[a-z]")
    var exprMay = RegExp("[A-Z]")
    var exprNum = RegExp("[0-9]")
    var exprSim = RegExp("[\-\*\]")

    if (!pass.value.match(exprMin)) {
        error_pass.innerHTML += "Debe contener una minuscula <br>"
        pass.classList.add("invalid")
        errores++
    }

    if (!pass.value.match(exprMay)) {
        error_pass.innerHTML += "Debe contener una mayuscula <br>"
        pass.classList.add("invalid")
        errores++
    }

    if (!pass.value.match(exprNum)) {
        error_pass.innerHTML += "Debe contener un numero <br>"
        pass.classList.add("invalid")
        errores++
    }

    if (!pass.value.match(exprSim)) {
        error_pass.innerHTML += "Debe contener un caracter especial (- *) <br>"
        pass.classList.add("invalid")
        errores++
    }

    if (!pass.classList.contains('invalid')) {
        alert('Enviando Formulario')
    } else {
        window.comunicacion.sendMessage('mesnaje por preload')
    }
})

window.comunicacion.receiveMessage('respuestaRenderer', function(event, args) {
    console.log(args)
})