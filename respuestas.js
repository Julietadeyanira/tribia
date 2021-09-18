
let respuestaComida = []   
let respuestaCultura = []

function fnFinalizarPreguntasCultura(){

  let control1= document.getElementById("contactChoice1"); 
  let control2= document.getElementById("contactChoice4");
  let control3= document.getElementById("contactChoice7");

//condición
  if(control1.checked==true) {
    respuestaCultura[0]="¡correcto!"
  }
  else{   // si NO esta seleccionado
    respuestaCultura[0]="incorrecto"
  }

  if(control2.checked==true) {
    respuestaCultura[1]="¡correcto!"
  }
  else {
    respuestaCultura[1]="incorrecto"
  }

if(control3.checked==true) {
    respuestaCultura[2]="¡correcto!"
  }
  else {
    respuestaCultura[2]="incorrecto"
  }

   alert(respuestaCultura);

}

function fnFinalizarPreguntasComida(){


  let control1= document.getElementById("contactChoice2"); 
  let control2= document.getElementById("contactChoice5");
  let control3= document.getElementById("contactChoice9");

  if(control1.checked==true) {
    respuestaComida[0]="¡correcto!"
  }
  else{  
    respuestaComida[0]="incorrecto"
  }

  if(control2.checked==true) {
    respuestaComida[1]="¡correcto!"
  }
  else {
    respuestaComida[1]="incorrecto"
  }

if(control3.checked==true) {
    respuestaComida[2]="¡correcto!"
  }
  else {
    respuestaComida[2]="incorrecto"
  }

alert(respuestaComida);

}