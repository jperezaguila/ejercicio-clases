var url = "https://alumnoscurso.azure-mobile.net/tables/clase02/";

function dibujar() {
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    var valorx = document.getElementById("txtx").value;
    var valory = document.getElementById("txty").value;
    var valorw = document.getElementById("txtw").value;
    var valorh = document.getElementById("txth").value;
    
    ctx.fillStyle = "#ccff66";
    ctx.fillRect(valorx, valory, valorw, valorh);
}

document.getElementById("btnok").onclick = dibujar;

function limpiar() {
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}

document.getElementById("btnlim").onclick = limpiar;
