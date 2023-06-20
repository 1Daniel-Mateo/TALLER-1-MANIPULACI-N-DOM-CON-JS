function convertirTemperatura(){
    
let num =parseFloat(document.getElementById("num").value)
let op1=parseInt(document.getElementById("op1").value)
let op2=parseInt(document.getElementById("op2").value)
let conversor

switch (op1) {
    case 1:
      switch (op2) {
        case 1:
          conversor = (num * 9/5) + 32;
          break;
        case 3:
          conversor = num + 273.15;
          break;
        default:
          conversor = num;
          break;
      }
      break;
    case 2:
      switch (op2) {
        case 2:
          conversor = (num - 32) * 5/9;
          break;
        case 3:
          conversor = (num + 459.67) * 5/9;
          break;
        default:
          conversor = num;
          break;
      }
      break;
    case 3:
      switch (op2) {
        case 2:
          conversor = num - 273.15;
          break;
        case 1:
          conversor = (num * 9/5) - 459.67;
          break;
        default:
          conversor = num;
          break;
      }
      break;
  }

  const resultado = conversor.toFixed(2);/*toFixed()= este parametro devuelve una cadena de datos
  de objetos numeros de javascript, no es exponencial y tiene digitos tras el decimal*/
  alert("Resultado de la conversión: " + resultado);
}


