/*
El jardín infantil necesita un programa para poder asignar cursos a las aulas
• Se cuentan con tres aulas: Azul, Verde y Amarilla
• Cada aula cuenta con una capacidad diferente (es decir, un número de
bancos)
• La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá
determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada
*/
import * as readlineSync from "readline-sync";

function DibujarGuiones(cantidad:number,mensaje:string="") 
{
  let cantOrig, cantletras, indice: number;
  let guiones:string;
  cantOrig = cantidad;
  /*
  agregue la posibilidad de enviar un mensaje adaptativo entre los guiones!!. si envio mensaje a la funcion, 
  esta centra entre los guiones el mensaje (cantidades pares de guiones).
  */
  if (mensaje!="") {
                    cantletras = mensaje.length;  
                    cantidad=(cantidad - cantletras) / 2;
                    guiones = "";
                    for (indice = 1; indice <=cantidad; indice=indice +1) 
                      {
                      guiones = guiones + "-";
                      }
                    if (cantletras % 2 != 0) {
                                             console.log(`${guiones}${mensaje}${guiones}-`);
                                             } else {
                                                     console.log(`${guiones}${mensaje}${guiones}`); 
                                                    }
                  } else {
                          guiones = ""  ;
                          for (indice = 1; indice <=cantidad; indice=indice +1) 
                                              {
                                              guiones = guiones + "-";
                                              } 
                                            console.log(guiones);
                         }
}

function colorAula(alumno:number):string{

 let color:string
 color="";
 if (alumno<=30){
                 color="AMARILLO";
                } else if (alumno>30 && alumno<=35) {
                                    color="VERDE";
                              } else if (alumno>35 && alumno<=40){
                                                     color="AZUL";
                                                                 }
 return color;
}

let tCurso:number;
let aula:string;
console.clear();
DibujarGuiones(80);
DibujarGuiones(80,"JARDIN - Asignacion Cursos");
DibujarGuiones(80);
tCurso=readlineSync.questionInt(`Ingrese la cantidad de infantes: `);
aula=colorAula(tCurso);
if (aula=="AMARILLO") {
                      console.log('\x1b[33mSe ha asignado el aula AMARILLA\x1b[0m');
                     } else if (aula=="VERDE") {
                                                console.log('\x1b[32mSe ha asignado el aula VERDE\x1b[0m');
                                              } else {
                                                      console.log('\x1b[34mSe ha asignado el aula AZUL\x1b[0m');
                                                     }
