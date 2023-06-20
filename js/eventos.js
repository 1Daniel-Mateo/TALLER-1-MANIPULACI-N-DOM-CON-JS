function colorPalabra(){
    const palabra=document.getElementById("palabra");
    palabra.style.color="#C61B1B";
}

function cambiarAMayuscula() {
    const texto = document.getElementById("texto").value;
    const mayusculas= texto.toUpperCase();
    document.getElementById("texto").value = mayusculas;
}

function Dulces() {
    const dulces=document.getElementById("opcion").value;
    document.getElementById("resultado").innerHTML="El dulce que elegiste fue "+dulces;
}

function dobleClip(){
    const evento=document.getElementById("evento");
    evento.textContent=evento.textContent.toUpperCase();
}

function limpiar(control){
    control.value='';
}

function imprecionDeDatos(){
    const name=document.getElementById("name").value;
    document.getElementById("imprimir").value=name;
}

function alerta(){
    alert("preciona un tecla fuera del campo de entrada");
}

function Mouse() {
    alert("Precionaste el boton")
}

function colorFondo() {
    document.getElementById("fondo").style.backgroundColor="red";
}

function cambiarColor(col){
document.getElementById('cuadrado1').style.backgroundColor=col;
}