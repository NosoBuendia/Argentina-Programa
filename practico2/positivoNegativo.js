const readlineSync = require('readline-sync');

let numero = readlineSync.question('Ingrese un numero ');

if (numero == 0){
    console.log("El numero es cero");
}
else if (numero > 0){
    console.log("El numero es positivo");
}
else {
    console.log("El numero es negativo");
}
