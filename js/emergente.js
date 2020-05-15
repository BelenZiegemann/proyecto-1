
function abrirInstrucciones() {
    document.getElementById("emergente").style.visibility="visible";
    document.getElementById("instrucciones").style.visibility = "visible";
}
  
function cerrarInstrucciones() {
    document.getElementById("emergente").style.visibility = "hidden";
    document.getElementById("instrucciones").style.visibility = "hidden";
}

function abrirGuardar() {
    document.getElementById("emergente").style.visibility="visible";
    document.getElementById("saveGame").style.visibility = "visible";
}

function cerrarGuardar() {
    document.getElementById("emergente").style.visibility = "hidden";
    document.getElementById("saveGame").style.visibility = "hidden";
}

function abrirPartidas() {
    document.getElementById("emergente").style.visibility="visible";
    document.getElementById("restartGame").style.visibility = "visible";
}

function cerrarPartidas() {
    document.getElementById("emergente").style.visibility = "hidden";
    document.getElementById("restartGame").style.visibility = "hidden";
    document.getElementById("notificacion").style.visibility = "hidden";
}
