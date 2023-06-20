document.addEventListener("DOMContentLoaded", function() {
    // perimetro
    const btnPerimetro = document.querySelectorAll(".btn-perimetro");
    const perimetroModals = document.querySelectorAll(".perimetro");
  
    btnPerimetro.forEach(function(btn, index) {
      btn.addEventListener("click", function() {
        perimetroModals[index].style.display = "block";
      });
    });
  
    const cerrarModal = document.querySelectorAll(".cerrar-modal");
  
    cerrarModal.forEach(function(cerrar, index) {
      cerrar.addEventListener("click", function() {
        const modal = cerrar.closest('.perimetro');
        modal.style.display = "none";
      });
    });
  
    // area
    const btnArea = document.querySelectorAll(".btn-area");
    const areaModals = document.querySelectorAll(".area");
  
    btnArea.forEach(function(btn, index) {
      btn.addEventListener("click", function() {
        areaModals[index].style.display = "block";
      });
    });
  
    cerrarModal.forEach(function(cerrar, index) {
      cerrar.addEventListener("click", function() {
        const modal = cerrar.closest('.area');
        modal.style.display = "none";
      });
    });
  });
  
//perimetro y area de cuadrado

function perimetroCuadrado() {
  let lados =parseInt(document.getElementById("lados").value)
  let perimetroCuadrado=0

  for (let i = 0; i < 4; i++) {
    perimetroCuadrado += lados; 
  }

  alert(perimetroCuadrado)
}

function areaCuadrado() {
  let lado = parseFloat(document.getElementById("lado").value)
  let areaCuadrado = lado * lado
  alert(areaCuadrado)
}

//perimetro y area de triangulo

function perimitroTriangulo() {
  let lado1=parseInt(document.getElementById("lado1").value)
  let lado2=parseInt(document.getElementById("lado2").value)
  let lado3=parseInt(document.getElementById("lado3").value)
  let perimetroTriangulo=lado1+lado2+lado3

  alert(perimetroTriangulo)
}

function areaTriangulo(){
  let altura=parseInt(document.getElementById("altura").value)
  let base=parseInt(document.getElementById("base").value)
  let areaTriangulo=(base*altura)/2
  alert(areaTriangulo)
}


//perimetro y area de rectangulo

function perimetroRectangulo(){
  let altura=parseInt(document.getElementById("altura").value)
  let base=parseInt(document.getElementById("base").value)
  let perimetroRectangulo=(base*2)+(altura*2)
  alert(perimetroRectangulo)
}

function areaRectangulo(){
  let largo=parseInt(document.getElementById("largo").value)
  let ancho=parseInt(document.getElementById("ancho").value)
  let areaRectangulo=(largo+largo)*(ancho+ancho)
  alert(areaRectangulo)
}

//perimetro y area de circulo
function perimetroCirculo() {
  let diametro=parseFloat(document.getElementById("diametro").value)
  let perimetroCirculo=3.1416*diametro
  alert(perimetroCirculo)
}

function areaCirculo(){
  let radio=parseFloat(document.getElementById("radio").value)
  let areaCirculo=3.1416*(radio**2)
  alert(areaCirculo)
}