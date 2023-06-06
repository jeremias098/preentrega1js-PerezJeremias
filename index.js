const precio1 = 1000
const precio2 = 700
const precio3 = 500
const aumentoBimestral = .08
alert("Bienvenido a Budokan pagina de stream de series y peliculas")
let nombreUsuario = prompt("¿Cuál es tu nombre?"); 

let edad = prompt("¿Cuál es tu edad?"); 

let correo = prompt("¿Cuál es tu correo electrónico?"); 

let contrasena = prompt("¿Cuál es tu contraseña?"); 

while (edad < 18) { 
  edad = prompt("Debes ser mayor de 18 años para registrarte. Ingresa tu edad nuevamente:");
}

if (correo.includes("@") && correo.includes(".") && contrasena.length >= 8) { 
  alert("¡Bienvenido a Budokan, " + nombreUsuario + "! Tu registro ha sido exitoso."); 
} else { 
  correo = prompt("El correo electrónico o conraseña ingresada no son validos. Ingresa tus datos nuevamente:");
}



let paquete= parseInt(prompt("Elije el paquete al que deseas añadirte: " + "\n1-Premium: $" + precio1 + "\n2-Moderado: $" + precio2 + "\n3-basico: $"+precio3+ "\n4-Salir"))  

switch(paquete){
  case 1:
    alert("Seleccionaste el paquete premium");
    break;
  case 2:
    alert("seleccionaste el paquete moderado");
    break;
  case 3:
    alert("Seleccionaste el paquete basico");
    break;
  case 4:
    alert("Gracias, vuelva pronto");
    break
  default:
    alert("Selecciono una opcion invalida");
    break;     
}


let cantidadTiempo= parseInt(prompt("Ingresa la cantidad de meses que lo vas a usar: "));



