function Comparador() {
    let opcion1=document.getElementById("op1").value;
    let opcion2=document.getElementById("op2").value;
    let opcion3=document.getElementById("op3").value;
    var resultado = "";

    if (opcion1==1 && opcion2==1 && opcion3==1) {
        resultado="Repuesta correcta";
    } else if(opcion1==2 && opcion2==2 && opcion3==2){
        resultado="Repuesta correcta";
    }else if(opcion1==3 && opcion2==3 && opcion3==3){
        resultado="Repuesta correcta";
    }else{
        resultado="Respuesta incorrecta";
    }

    document.getElementById("resultado").textContent = resultado;
    
}