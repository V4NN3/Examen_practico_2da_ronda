let mensaje = 'www.techcademy.com';
let punto = '.';
let encontrar = mensaje.indexOf(punto);

if (encontrar > 0) {
    var mayuscula = mensaje.substring(0, encontrar);
    console.log(mayuscula.toUpperCase());
}