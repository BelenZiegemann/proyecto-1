/*
Proyecto perteneciente a la materia Ingenieria de 
de Aplicaciones Web. Universidad Nacional del Sur. 
*/ 

let puntuacion = 0; // 25 aciertas -15 fallas
let numIntentos = 6;
let numIntentosTotal= numIntentos;
let palabraAdivinar = [];
let palabraMostrar = [];
let teclasBloqueadas = [];
let pista = document.querySelector('#pista');
let palabra = document.querySelector('#palabra')
let intentos = document.querySelector('#intentos');
let intentosOriginales= document.querySelector('#intentosOriginales');
let puntuacion = document.querySelector('#puntuacionH2');
let botonReiniciar = document.querySelector('#BotonReiniciar');

function iniciarPartida(){
  intentos.textContent = numIntentos;
  intentosOriginales.textContent= 10;
  pista.textContent= "hola";
}

/*
function actualizarPantalla()
function obtenerTecla()
function chequearTecla()
function estadoPartida()
function bloquearTodasTeclas()
function reiniciarPartida()
*/

iniciarPartida();


