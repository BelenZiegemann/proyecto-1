/*Proyecto perteneciente a la materia Ingenieria de 
de Aplicaciones Web. Universidad Nacional del Sur. */ 

let puntuacion = 0; 
let numIntentos = 5;
let numIntentosTotales= numIntentos;
let palabraAdivinar = [];
let palabraMostrar = [];
let teclasBloqueadas = [];
let pista = document.querySelector('#pista');
let palabra = document.querySelector('#palabra');
let intentos = document.querySelector('#intentos');
let intentosOriginales= document.querySelector('#intentosOriginales');
let puntuacionH2 = document.querySelector('#puntuacionH2');
let botonReiniciar = document.querySelector('#BotonReiniciar');
const formUIsave = document.getElementById('form');
const formUIrestart = document.getElementById('form2');


function iniciarPartida(){
  
  var posicionAleatoria = Math.floor(Math.random() * listaPalabras.length);
  var palabra = listaPalabras[posicionAleatoria];
  console.log(palabra);
  var tamanioPalabra = palabra.length;
  for (var i=0; i<tamanioPalabra;i ++){
    if (palabra.charAt(i).match(/[a-zñA-ZÑ]/)){
      palabraAdivinar.push(palabra.charAt(i).toLowerCase());
      palabraMostrar.push("_");
    }
    else{
      palabraAdivinar.push(palabra.charAt(i));
      palabraMostrar.push(palabra.charAt(i));
    }
  }
  console.log(palabraMostrar);
  pista.textContent = listaPistas[posicionAleatoria];
  intentosOriginales.textContent = numIntentosTotales;
  actualizarDatosPantalla();
}


function actualizarDatosPantalla(){

  palabra.textContent = palabraMostrar.join(' ').toUpperCase();
  intentos.textContent = numIntentos;
  puntuacionH2.textContent = puntuacion + " PUNTOS";
}

function comprobarTecla(letraUsuario){

  for (var i=0; i<palabraAdivinar.length; i++){
    if(letraUsuario == palabraAdivinar[i]){
      palabraMostrar[i] = letraUsuario;
      document.getElementById("tecla"+ letraUsuario).disabled = true;
      document.getElementById("tecla"+letraUsuario).className = "teclaDeshabilitada";
      teclasBloqueadas.push("tecla"+ letraUsuario);
      puntuacion+=25;
    }
  }
  if (!palabraAdivinar.includes(letraUsuario)) {
    if (numIntentos > 0) {
      numIntentos -= 1;
      puntuacion -= 15;
    }
    
  switch(numIntentos){
    case 4:
      document.getElementById('imagen').src = 'img/cabeza.png';
      break;
    case 3:
      document.getElementById('imagen').src = 'img/cuerpo.png';
      break;
    case 2:
      document.getElementById('imagen').src = 'img/piernas.png';
      break;
    case 1:
      document.getElementById('imagen').src = 'img/brazos.png';
      break;
    case 0:
      document.getElementById('imagen').src = 'img/ahorcado.png';
      break;
    }
    document.getElementById("tecla" + letraUsuario).disabled = true;
    document.getElementById("tecla"+letraUsuario).className = "teclaDeshabilitada";
    teclasBloqueadas.push("tecla" + letraUsuario);
  }
  estadoPartida();
  actualizarDatosPantalla();
}

function estadoPartida(){
  
  if(!palabraMostrar.includes('_')){
    bloquearTodasTeclas();
    document.getElementById('imagen').src = 'img/victoria.png';
    botonReiniciar.textContent = "Siguiente";
  }
  if(numIntentos==0){
    bloquearTodasTeclas();
    palabraMostrar= palabraAdivinar;
    botonReiniciar.textContent = "Siguiente";
  }
}

function bloquearTodasTeclas(){

  var teclas = document.querySelectorAll('button.tecla');
  for(var i=0; i<teclas.length; i++){
    teclas[i].disabled = true;
    document.getElementById(teclas[i].id).className = "teclaDeshabilitada";
    teclasBloqueadas.push(teclas[i].id);
  }
}

function reiniciarPartida(){

  palabraAdivinar = [];
  palabraMostrar = [];
  numIntentos = numIntentosTotales;
  puntuacion = 0;
  botonReiniciar.textContent = "Reiniciar";
  document.getElementById('imagen').src = 'img/estructura.png';

  for (var i = 0; i < teclasBloqueadas.length; i++) {
    document.getElementById(teclasBloqueadas[i]).disabled = false;
    document.getElementById(teclasBloqueadas[i]).className = "tecla";
  }
  teclasBloqueadas = [];
  iniciarPartida();
}


formUIsave.addEventListener('submit', function(event){
  event.preventDefault();
  let nombre = document.getElementById('name').value;

  console.log(nombre);
  localStorage.setItem(nombre,puntuacion);
  formUIsave.reset();
  
});

function setGame(){

}

formUIrestart.addEventListener('submit', function(event){
  event.preventDefault();
  let nombre = document.getElementById('name2').value;
  console.log(nombre);

  if(localStorage.getItem(nombre)!=null){
    document.getElementById('aviso').innerHTML= "Su ultima puntuacion fue de: "+
    localStorage.getItem(nombre);
  }
  formUIrestart.reset();
  
});


iniciarPartida();





