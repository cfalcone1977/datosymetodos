// crear arreglo de 2 dimensiones o matrix
//
//
import * as readlineSync from "readline-sync";

let matrix:number[][]= [new Array(3),new Array(3),new Array(3),new Array(3),new Array(3)];
let x,y:number;
let tecla:string;

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



console.clear();
DibujarGuiones(80,"");
DibujarGuiones(80,"Generar una Matrix");
DibujarGuiones(80,"");
console.log(matrix);
console.log(matrix.length);
console.log(matrix[0].length);
console.log(matrix[1].length);
console.log(matrix[2].length);
console.log(matrix[3].length);


for (x = 0; x < matrix.length; x=x+1) 
{
    for (y = 0; y < matrix[x].length; y=y+1) 
    {
        matrix[x][y]=readlineSync.questionInt(`Ingrese un numero para la posicion ${x} de ${y}: `); 
    
    }    
}
console.table(matrix);  