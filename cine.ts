/*
•Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
•Suponga que para modelar este
problema, se utiliza un arreglo con valores
lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada
*/

import * as readlineSync from "readline-sync";

let cantButacas,vacias: number;
let cine:boolean[]= new Array ();


//esta funcion crea valores booleanos al Azar par cada elemento asientos y devuelve la cantidad de asientos vacios!!
function ocupacionCineAzar(asientos:number):number
{
 let indice:number;   
 let resultado:number;
 let acumVacias:number;
 acumVacias=0;
 for (indice = 0; indice < asientos; indice=indice+1) 
    {
    resultado=Math.random();
    if (resultado>=0.5 ) {
                         cine[indice]=true;
                         } else {
                                 cine[indice]=false;
                                 acumVacias=acumVacias+1;
                                }
    }
 return acumVacias;   
}


console.clear();
cantButacas=readlineSync.questionInt("Ingrese la cantidad de butacas que posee el cine:");
vacias=ocupacionCineAzar(cantButacas);
console.log(cine);
console.log(`La cantidad de butacas ocupadas es: ${cantButacas-vacias} y ${vacias} vacias.`);





