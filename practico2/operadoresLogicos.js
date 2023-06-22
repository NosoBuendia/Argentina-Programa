const readlineSync = require('readline-sync');

let numero = readlineSync.question('Ingrese un numero entero ');


if (numero == 0){
    console.log("El numero es cero");
}
else if(numero < 0){
    console.log("El numero es negativo");
}
else if (numero % 2 == 0){
    console.log("El numero es positivo y par");
}
else{
    console.log("El numero es positivo e impar");
}
