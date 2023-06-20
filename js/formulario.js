const boton=document.getElementById("condiciones");
const ventana=document.getElementById("ventana");
const cerrar=document.querySelector(".cerrar-todo");

boton.addEventListener("click",()=>{
    ventana.style.display="block";
})

cerrar.addEventListener("click",()=>{
    ventana.style.display="none";
})




const number=/[0-9]{5,15}/
const text=/^[a-zA-ZñÑá-úÁ-Ú]{1,10}$/
const email=/^[a-zA-ZñÑá-úÁ-Ú]+@misena\.edu\.co$/
const pass=/^[a-zA-ZñÑá-úÁ-Ú\d@$!%*?&]{1,10}$/

const form=document.getElementById("formValidacion");

const f1=document.querySelector("#CampoDoc .feedback")
const f2=document.querySelector("#CampoNombre .feedback")
const f3=document.querySelector("#CampoApellido .feedback")
const f4 = document.querySelector("#CampoFecha .feedback");
const f5 = document.querySelector("#CampoCorreo .feedback");
const f6 = document.querySelector("#CampoContraseña .feedback");
const f7 = document.querySelector("#Comprobar .feedback");
const f8 = document.querySelector("#Campotermino .feedback");

const NumDoc=document.getElementById("NumDoc");
const nombre = document.getElementById("nombre");
const apellido= document.getElementById("apellido");
const fecha=document.getElementById("fecha");
const correo=document.getElementById("correo");
const contraseña=document.getElementById("contraseña");
const comprobacion=document.getElementById("comprobacion");
const terminos=document.getElementById("terminos");

form.NumDoc.addEventListener('input', e=>{
  
    if(number.test(e.target.value)){
        //La regla pasa la validacion
        form.NumDoc.setAttribute("class","success");
        f1.style.visibility="hidden"
        f1.style.opacity="0"
        flag=true
    }else{
        //Regla no pasa la validacion
        form.NumDoc.setAttribute("class","error");
        f1.textContent="Solo puede digitar valores numericos"
        f1.style.visibility="visible"
        f1.style.opacity="1"
        flag=false
    }
})

    form.nombre.addEventListener('input', (e) => {
        
        if (text.test(e.target.value)) {
          form.nombre.setAttribute("class","success");
          f2.style.visibility = "hidden";
          f2.style.opacity = "0";
          flag=true
        } else {
          form.nombre.setAttribute("class","error");
          f2.textContent = "Solo puede digitar caracteres de palabra";
          f2.style.visibility = "visible";
          f2.style.opacity = "1";
          flag=false
        }
      });


      form.apellido.addEventListener('input', (e) => {
    
        if (text.test(e.target.value)) {
          form.apellido.setAttribute("class","success");
          f3.style.visibility = "hidden";
          f3.style.opacity = "0";
          flag=true
        } else {
          form.nombre.setAttribute("class","error");
          f3.textContent = "Solo puede digitar caracteres de palabra";
          f3.style.visibility = "visible";
          f3.style.opacity = "1";
          flag=false
        }
      });

      form.fecha.addEventListener('input', (e) => {
        const fecha = e.target.value;
        const fecha_input = new Date(fecha);
        const fechas = new Date();
        const min_fecha = new Date("2002-01-01");
      
        // Calcula la edad del usuario
        const edad = fechas.getFullYear() - fecha_input.getFullYear();
        const meses = fechas.getMonth() - fecha_input.getMonth();
        if (meses < 0 || (meses === 0 && fechas.getDate() < fecha_input.getDate())) {
          edad;
        }
      
        if (fecha == "" || fecha_input < min_fecha || edad < 18) {
          form.fecha.setAttribute("class","error");
          f4.textContent = "La fecha debe ser a partir de 2002 y el usuario debe tener al menos 18 años.";
          f4.style.visibility = "visible";
          f4.style.opacity = "1";
          flag=true;
        } else {
          form.fecha.setAttribute("class","success");
          f4.style.visibility = "hidden";
          f4.style.opacity = "0";
          flag=false;
        }
      });

      form.correo.addEventListener('input', (e) => {
      
        if (email.test(e.target.value)) {
          form.correo.setAttribute("class", "success");
          f5.style.visibility = "hidden";
          f5.style.opacity = "0";
          flag = true;
        } else {
          form.correo.setAttribute("class", "error");
          f5.textContent = "El correo es incorrecto o no tiene el dominio @misena.edu.co";
          f5.style.visibility = "visible";
          f5.style.opacity = "1";
          flag = false;
        }
      });

      form.contraseña.addEventListener('input', (e) => {
      
        if (pass.test(e.target.value)) {
          form.contraseña.setAttribute("class", "success");
          f6.style.visibility = "hidden";
          f6.style.opacity = "0";
          flag = true;
        } else {
          form.contraseña.setAttribute("class", "error");
          f6.textContent = "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y ser de mínimo 10 caracteres.";
          f6.style.visibility = "visible";
          f6.style.opacity = "1";
          flag = false;
        }
      });

      form.comprobacion.addEventListener('input', (e) => {
        const comprobacion = e.target.value;

        if (comprobacion == form.contraseña.value) {
          form.comprobacion.setAttribute("class", "success");
          f7.style.visibility = "hidden";
          f7.style.opacity = "0";
          flag =true;
        } else {
          form.comprobacion.setAttribute("class", "error");
          f7.textContent = "Los datos no son iguales";
          f7.style.visibility = "visible";
          f7.style.opacity = "1";
          flag = false;
        }
      });

      form.terminos.addEventListener('input', (e) => {

        if (form.terminos.checked) {
          form.terminos.setAttribute("class", "success");
          f8.style.visibility = "hidden";
          f8.style.opacity = "0";
          flag = true;
        } else {
          form.terminos.setAttribute("class", "error");
          f8.textContent = "Debes aceptar los términos de uso";
          f8.style.visibility = "visible";
          f8.style.opacity = "1";
          flag=false;
        }
      });


      form.addEventListener("submit", (e) => {
        e.preventDefault();
      
        if (form.NumDoc.value==0||form.NumDoc.value==null||flag==false) {
          alert("por favor ingresa un numero de documento valido")
          form.NumDoc.focus()
          form.NumDoc.setAttribute("class", "error");
        }else if(form.nombre.value==0||form.nombre.value==null||flag==false){
          alert("por favor ingresa un nombre")
          form.nombre.focus()
          form.nombre.setAttribute("class", "error");
        }else if(form.apellido.value==0||form.apellido.value==null||flag==false){
          alert("por favor ingresa un apellido")
          form.apellido.focus()
          form.apellido.setAttribute("class", "error");
        }else if(form.fecha.value==0||form.fecha.value==null||flag==false){
          alert("por favor ingresa una fecha")
          form.fecha.focus()
          form.fecha.setAttribute("class", "error");
        }else if(form.correo.value==0||form.correo.value==null||flag==false){
          alert("por favor ingresa un correo misena")
          form.correo.focus()
          form.correo.setAttribute("class", "error");
        }else if(form.contraseña.value==0||form.contraseña.value==null||flag==false){
          alert("por favor ingresa una contraseña")
          form.contraseña.focus()
          form.contraseña.setAttribute("class", "error");
        }else if(form.comprobacion.value==0||form.comprobacion.value==null||flag==false){
          alert("por favor ingresa la clave anteriormente digitada")
          form.comprobacion.focus()
          form.comprobacion.setAttribute("class", "error");
        }else if(!form.terminos.checked){
          alert("por favor acepta los terminos")
          form.terminos.focus()
          form.terminos.setAttribute("class", "error");
        }else {
          form.submit()
        }
      });



     