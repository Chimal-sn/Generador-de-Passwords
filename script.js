function generarPassword() {
    const longitud = parseInt(document.getElementById('rango').value);
    const mayuscula = document.getElementById('mayuscula').checked;
    const minuscula = document.getElementById('minusculas').checked;
    const numero = document.getElementById('numeros').checked;
    const simbolo = document.getElementById('simbolos').checked;

    let caracteres = "";
    let password_nueva = "";
    let segura = 0;

    if (mayuscula) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        segura += 1;
    }

    if (minuscula) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
        segura += 1;
    }

    if (numero) {
        caracteres += "1234567890";
        segura += 1;
    }

    if (simbolo) {
        caracteres += "!@#$%^&*()_+-=[]{}|;':\",./<>?";
        segura += 1;
    }

    if (caracteres.length === 0) {
        document.getElementById('password').innerHTML = "Selecciona opciones";
        return;
    }

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        password_nueva += caracteres.charAt(indiceAleatorio);
    }

    for (let i = 1; i <= 4; i++) {
        document.getElementById('fuerza' + i).classList.remove('activa');
    }

    for (let i = 0; i < segura; i++) {
        document.getElementById('fuerza' + (i + 1)).classList.add('activa');
    }

    if (segura == 1 || segura == 2) {
        document.getElementById('segura').innerHTML = "DÉBIL"
    } else if (segura == 3) {
        document.getElementById('segura').innerHTML = "MEDIA"
    } else if (segura == 4) {
        document.getElementById('segura').innerHTML = "FUERTE"
    }

    const password = document.getElementById('password');
    password.innerHTML = password_nueva;
}