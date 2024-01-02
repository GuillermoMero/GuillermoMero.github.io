//Sector 1
function cambiarRojo1() {
    var imagen = document.getElementById('luz1');
    imagen.style.opacity = 1; // Ajusta la opacidad para un efecto de transición suave
    setTimeout(function () {
        imagen.src = "rojo.png"
        imagen.style.opacity = 1;
    }, 250); // Espera 500 milisegundos (valor de la transición en CSS) antes de cambiar la imagen
}

function cambiarVerde1() {
    var imagen = document.getElementById("luz1");
    imagen.style.opacity = 1;
    setTimeout(function () {
        imagen.src = "verde.png"
        imagen.style.opacity = 1;
    }, 250);
}

//Sector 2
function cambiarRojo2() {
    var imagen = document.getElementById('luz2');
    imagen.style.opacity = 1; 
    setTimeout(function () {
        imagen.src = "rojo.png"
        imagen.style.opacity = 1;
    }, 250); 
}

function cambiarVerde2() {
    var imagen = document.getElementById("luz2");
    imagen.style.opacity = 1;
    setTimeout(function () {
        imagen.src = "verde.png"
        imagen.style.opacity = 1;
    }, 250);
}

//Sector 3
function cambiarRojo3() {
    var imagen = document.getElementById("luz3");
    imagen.style.opacity = 1;
    setTimeout(function () {
        imagen.src = "rojo.png"
        imagen.style.opacity = 1;
    }, 250);
}

function cambiarVerde3() {
    var imagen = document.getElementById("luz3");
    imagen.style.opacity = 1;
    setTimeout(function () {
        imagen.src = "verde.png"
        imagen.style.opacity = 1;
    }, 250);
}

//Sector 4
function cambiarRojo4() {
    var imagen = document.getElementById("luz4");
    imagen.style.opacity = 1;
    setTimeout(function () {
        imagen.src = "rojo.png"
        imagen.style.opacity = 1;
    }, 250);
}

function cambiarVerde4() {
    var imagen = document.getElementById("luz4");
    imagen.style.opacity = 1;
    setTimeout(function () {
        imagen.src = "verde.png"
        imagen.style.opacity = 1;
    }, 250);
}

//Todos
function cambiarVerdeTodo() {
  cambiarVerde1();
  cambiarVerde2();
  cambiarVerde3();
  cambiarVerde4();
}