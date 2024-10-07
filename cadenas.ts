/*Solicite al usuario que ingrese un texto y retornelo
convertido en un nombre de variable/función con las
reglas camelCase
• Por ejemplo, si el usuario ingresa:
convertir texto segun camel case
el programa lo debe convertir en:
convertirTextoSegunCamelCase*/

import * as readlineSync from "readline-sync";

let palabras: string[] = new Array ();
let texto,textofinal: string;
let indice:number;

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

DibujarGuiones(80);
DibujarGuiones(80,"CONVERTIR A CamelCase");
DibujarGuiones(80);
texto=readlineSync.question(`Ingrese un testo a convertir: `);
palabras=texto.split(" ");
textofinal="";
console.log(palabras);
//prueba con una sola palabra:
//textofinal=(palabras[1].charAt(0).toUpperCase()) + palabras[1].substring(1,palabras[1].length)+textofinal;


for (indice = 0;indice < palabras.length;indice=indice+1) 
    {
     if (indice===0) {
                      textofinal=textofinal+palabras[indice];
                     } else{
                        textofinal=textofinal+ ((palabras[indice].charAt(0).toUpperCase()) + palabras[indice].substring(1,palabras[indice].length));
                           }                 
    }
console.log(textofinal);