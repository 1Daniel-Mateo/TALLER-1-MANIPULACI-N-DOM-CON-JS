function Conversor() {
    var palabra = document.getElementById("palabra").value;
    var opcion = document.getElementById("opcion").value;

    var resultado = "";
    switch (parseInt(opcion)) {
        case 1:
            resultado = "Longitud de la palabra: " + palabra.length;
            /*propiedad o metodo que nos permite obtener la longitud de un dato tipo string*/
            break;
        case 2:
            resultado = "Palabra en mayúsculas: " + palabra.toUpperCase();
            /* Este método convierte todos los caracteres de un string a letras mayúsculas*/
            break;
        case 3:
            resultado = "Palabra en minúsculas: " + palabra.toLowerCase();
            /*Este método convierte todos los caracteres de un string a letras minúsculas */
            break;
        case 4:
            resultado = "Primer carácter de la palabra: " + palabra.charAt(0);
            /*charAt(0)=Este método devuelve el carácter en una posición específica de un string
            el cual es especificado con un numero por ejemplo aqui estamos en la posicion 0 el 
            cual nos dice que va a coger el primer dato de la palabra que ingresamos.*/
            break;
        default:
            resultado = "Opción inválida.";
            break;
    }
    document.getElementById("resultado").textContent = resultado;
}
