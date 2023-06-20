function triangulos() {
  let lado1 = parseFloat(document.getElementById("lado1").value);
  let lado2 = parseFloat(document.getElementById("lado2").value);
  let base = parseFloat(document.getElementById("base").value);

  if (lado1 == lado2 && lado1 == base && lado2 == base) {
    alert("Tu Triangulo es Equilátero");
  } else if(lado1==lado2) {
    alert("Tu Triangulo es Isósceles");
  } else{
    alert("Tu Triangulo es Escaleno");
  }

}