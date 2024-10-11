/*
Implemente un método llamado “multiplicarArreglo” que recibe
como parámetros tres arreglos de Enteros del mismo tamaño
• Los dos primeros arreglos contienen los números que se quieren
multiplicar
• El tercer arreglo almacena el cálculo de la multiplicación de cada
posición de los dos arreglos
• Utilice este método para multiplicar los siguientes cuatro arreglos
de tres elementos
v1: [1, 2, 3]
v2: [4, 5, 6]
v3: [2, 1, 2]
v4: [1, 2, 1]
vResultado (v1*v2*v3*v4): [8, 20, 36]
*/


import * as readlineSync from "readline-sync";


let v1,v2,v3,v4:number[] = new Array (3);
v1=[1,2,3];
v2=[4,5,6];
v3=[2,1,2];
v4=[1,2,1];



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

function multiplicarArreglo(arreglo1:number[],arreglo2:number[],arreglo3:number[],arreglo4:number[]):void
{
  let vResultado:number[]=new Array(3);
  let indice:number;
  for (let indice = 0; indice < arreglo1.length; indice=indice + 1) {
    vResultado[indice]=arreglo1[indice]*arreglo2[indice]*arreglo3[indice]*arreglo4[indice];
  }
  console.warn(`El valor de vResultado para la posicion 1 es ${vResultado[0]} `);
  console.warn(`El valor de vResultado para la posicion 2 es ${vResultado[1]} `);
  console.warn(`El valor de vResultado para la posicion 3 es ${vResultado[2]} `);
}

console.clear();
DibujarGuiones(80);
DibujarGuiones(80,"MULTIPLICACION");
DibujarGuiones(80);
multiplicarArreglo(v1,v2,v3,v4);
DibujarGuiones(80);








