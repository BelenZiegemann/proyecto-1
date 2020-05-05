/*
Proyecto perteneciente a la materia Ingenieria de 
de Aplicaciones Web. Universidad Nacional del Sur. 
*/ 

let puntuacion = 0; 
let numIntentos = 6;
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

function iniciarPartida(){
  
  var posicionAleatoria = Math.floor(Math.random() * listaPalabras.length);
  var palabra = listaPalabras[posicionAleatoria];
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

  pista.textContent = listaPistas[posicionAleatoria];
  intentosOriginales.textContent = numIntentosTotales;

  actualizarDatosPantalla();

}


function actualizarDatosPantalla(){

  palabra.textContent = palabraMostrar.join(' ').toUpperCase();
  intentos.textContent = numIntentos;
  puntuacionH2.textContent = puntuacion + " PUNTOS";
}

function capturarTecladoFisico(evObject){

  var capturado = String.fromCharCode(evObject.which);
  if(!teclasBloqueadas.includes("tecla"+capturado))
    comprobarTecla(capturado);
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
    
    if (numIntentos == 5) {
      document.getElementById('imagen').src = 'img/cabeza.png';
    } else if (numIntentos == 4) {
      document.getElementById('imagen').src = 'img/cuerpo.png';
    } else if (numIntentos == 3) {
      document.getElementById('imagen').src = 'img/piernas.png';
    } else if (numIntentos == 2) {
      document.getElementById('imagen').src = 'img/brazos.png';
    } else if (numIntentos == 1) {
      document.getElementById('imagen').src = 'img/ahorcado.png';
    } else if (numIntentos == 0) {
      document.getElementById('imagen').src = 'img/ahorcado.png';
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
    //Agregar imagen de victoria
    //Agregar boton para que se cargue una partida nueva
  }
  if(numIntentos==0){
    bloquearTodasTeclas();
    palabraMostrar= palabraAdivinar;
    //Agregar un boton para que continue jugando
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
  document.getElementById('imagen').src = 'img/estructura.png';

  for (var i = 0; i < teclasBloqueadas.length; i++) {
    document.getElementById(teclasBloqueadas[i]).disabled = false;
    document.getElementById(teclasBloqueadas[i]).className = "tecla";
  }

  teclasBloqueadas = [];
  iniciarPartida();
}

iniciarPartida();


