let mensaje = 'Hola como estas';
let caracter = 'o';
let contador = 0;
let arreglo = Object.assign([], mensaje);

if (arreglo.length) {
    arreglo.forEach(function (x) {
        if (x === caracter)
            contador++; 
    })
}

console.log('La letra ' + caracter + ' se repite ' + contador);
