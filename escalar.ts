/*
Cargue dos arreglos de dimensión N números
(la cantidad es ingresada por el usuario)
• Calcule el producto escalar entre los dos arreglos:
Ejemplo:
n = 3
v1 = 0, 1, 2
v2 = 3, 4, 5
producto = 14
*/

import * as readlineSync from "readline-sync";

let vector1: number[] = new Array();
let vector2:number[]=new Array();
let elementos,indice:number;

function DibujarGuiones(cantidad:number,mensaje:string="") 
{
  let cantOrig, cantletras, indice: number;
  let guiones:string;
  cantOrig = cantidad;
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

function escalar(V1:number[],V2:number[]):void
{
  let i,acumulador:number;     
  acumulador=0;
  for (let i = 0; i < V1.length; i=i+1) 
  {
   acumulador=acumulador+ (V1[i] * V2[i]);
  }
console.log("El escalar de ambos vectores es: ",acumulador);
DibujarGuiones(80); 
}


console.clear();
DibujarGuiones(80);
DibujarGuiones(80,"PRODUCTO ESCALAR");
DibujarGuiones(80);
elementos=readlineSync.questionInt("Ingresa la cantidad de elementos de Vector 1 y 2: ");
for (let indice = 0; indice < elementos; indice=indice+1) 
{
 vector1[indice]=readlineSync.questionInt(`Ingrese el elemento ${indice+1} de Vector1: `);
}
for (let indice = 0; indice < elementos; indice=indice+1) 
{
 vector2[indice]=readlineSync.questionInt(`Ingrese el elemento ${indice+1} de Vector1: `);
}
escalar(vector1,vector2);

