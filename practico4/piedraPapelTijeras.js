const readlineSync = require('readline-sync');

const piedra="piedra";
const papel="papel";
const tijera="tijera";

let opciones=[piedra,papel,tijera];
let modosDeJuego=[1,2,3];


function obtenerJugadaComputadora(array) {
    let jugada = array[(Math.floor(Math.random() * 3))];
    return jugada;    
}    

function obtenerJugadaUsuario(array) {   
    let jugada;
    do{
        jugada = readlineSync.question('Elije entre piedra, papel o tijera: ').toLowerCase();        
        console.clear();
        if (!array.includes(jugada)) {
            console.log("Eleccion invalida")             
        }
    } 
    while(!array.includes(jugada));    
    return jugada;   
}

function determinarGanador(jugada1, jugada2) {
    if (jugada1 == jugada2){
        return "Empate";              
    } 
    else if ((jugada1 ==  "piedra" && jugada2 == "tijera")||
             (jugada1 == "papel" && jugada2 == "piedra")||
             (jugada1 == "tijera" && jugada2 == "papel")){
            
                return "Usuario";
    } 
    else {
        return "Computadora";
    } 
}

function obtenerModoDeJuego(array) {
    
    let modo;
    do{
        console.log(`Debes elegir un modo de juego:
                     [1] Una sola mano
                     [2] Dos manos
                     [3] Mejor de 3
                     `)

        modo = parseInt(readlineSync.question('Seleccionar modo de juego: [1 / 2 / 3]: '));
        console.clear();
        if (!array.includes(modo)) {
            console.log("Modo de juego invalido")             
        }
    } 
    while(!array.includes(modo));    
    return modo;
    
}


let jugadaUsuario;
let jugadaComputadora;
let resultado;
let jugadasGanadasUsuario = 0;
let jugadasGanadasComputadora = 0;
let modoDeJuego = obtenerModoDeJuego(modosDeJuego);
let cantidadTurnosJugados=1;
    

for(let i = 1; i <= modoDeJuego; i++){
    
    jugadaUsuario = obtenerJugadaUsuario(opciones);
    jugadaComputadora = obtenerJugadaComputadora(opciones);        
    resultado = determinarGanador(jugadaUsuario, jugadaComputadora);

    if(modoDeJuego !== 1){
        console.log(`-----Turno ${cantidadTurnosJugados}-----`);
    }      
    console.log(`La computadora eligio: ${jugadaComputadora}.`);
    console.log(`El usuario eligio: ${jugadaUsuario}.`);        
    cantidadTurnosJugados++;
        
    if(resultado === "Usuario"){
        jugadasGanadasUsuario++
    }
    else if(resultado === "Computadora"){
        jugadasGanadasComputadora++
    }
    if (modoDeJuego !== 1){
        console.log(`Ganador de la mano: ${resultado} `);
        console.log(`Puntaje: Usuario: ${jugadasGanadasUsuario} // Computadora: ${jugadasGanadasComputadora}`);
        console.log(``);
    } 
    
    //Este IF esta comentado porque yo entendi que solo se jugaban 3 manos en este modo de juego,
    //se puede descomentarlo para que el modo [3] tenga un numero de manos indefinidas hasta que 
    //alguna de las partes gane la partida por diferencia de 2.

    /**  
    if (modoDeJuego == 3 && resultado == "Empate" ){
        i--;
    } 
    */
   
    if(jugadasGanadasUsuario - jugadasGanadasComputadora == 2 || jugadasGanadasUsuario - jugadasGanadasComputadora == -2){
        break;
    }
}

if (jugadasGanadasUsuario == jugadasGanadasComputadora){
    console.log ("El resultado fue: Empate.");
}
else if (jugadasGanadasUsuario > jugadasGanadasComputadora){
    console.log ("El resultado fue: Gana el usuario.");
}
else {
    console.log("El resultado fue: Gana la computadora.");
}
 
