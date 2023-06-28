let listaDePersonas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];

for(let i = 0; i < listaDePersonas.length; i++){

    if (listaDePersonas[i] === "Sofia" || listaDePersonas[i] === "Jose"){
        rechazados.push(listaDePersonas[i]);
    }
    else{
        admitidos.push(listaDePersonas[i]);
    }
}

console.log("La lista de invitados admitidos es:")
for(let i = 0; i < admitidos.length; i++){
    console.log(admitidos[i]);
}

console.log("La lista de invitados rechazados es:")
for(let i = 0; i < rechazados.length; i++){
    console.log(rechazados[i]);
}

let admitidosOrdenada = [];
for (let x = (admitidos.length-1); x >= 0; x--){  
 
    let nombre = admitidos[x];
    let i;
    for (i = 0; i < admitidosOrdenada.length; i++) {        
        if (nombre < admitidosOrdenada[i]) {
            admitidosOrdenada.splice(i, 0, nombre);
            break;
        }
    }
    if (i === admitidosOrdenada.length) {
    admitidosOrdenada.push(nombre);
    }
}

console.log("La lista ordenada de invitados admitidos es:")
for(let i = 0; i < admitidosOrdenada.length; i++){
    console.log(admitidosOrdenada[i]);
}

let rechazadosOrdenada = [];
for (let x = (rechazados.length-1); x >= 0; x--){  
 
    let nombre = rechazados[x];
    let i;
    for (i = 0; i < rechazadosOrdenada.length; i++) {        
        if (nombre < rechazadosOrdenada[i]) {
            rechazadosOrdenada.splice(i, 0, nombre);
            break;
        }
    }
    if (i === rechazadosOrdenada.length) {
    rechazadosOrdenada.push(nombre);
    }
}

console.log("La lista ordenada de invitados rechazados es:")
for(let i = 0; i < rechazadosOrdenada.length; i++){
    console.log(rechazadosOrdenada[i]);
}
