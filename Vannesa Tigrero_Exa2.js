let numero = 3;
let arreglo = [numero];

do {
    let anadir = Number(arreglo.slice(-1)) + numero;
    arreglo.push(anadir);
}
while(arreglo.slice(-1) <= 100)

console.log(arreglo.toString());