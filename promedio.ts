/*
Desarrolle un algoritmo que
permita cargar alumnos y sus
notas en los tres trimestres
• Se debe permitir obtener el
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)
• Luego de resolverlo, pensar en
aprovechar métodos y discutir
cómo representar la información
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

interface camposAlumno
{
 nombre:string;
 dni:number;
 trim1:number;
 trim2:number;
 trim3:number;
}

let alumno: camposAlumno[] = [];

function controlAlumno(documento:number):boolean
{
  let existencia:boolean;
  let indice:number;
  existencia=false;
  for (indice = 0; indice < alumno.length; indice=indice+1) 
    {
     if (alumno[indice].dni==documento) {
                                        existencia=true;
                                        break;     
                                       }
    
    }
  return existencia;  
}



function registrarAlumno():void
{
    let nombre:string;
    let dni:number;
    let trim1,trim2,trim3:number; 
    
    console.clear();
    DibujarGuiones(80);
    DibujarGuiones(80,"Registrar Alumno");
    DibujarGuiones(80);
    nombre=readlineSync.question(`Apellido y Nombre:  `);
    dni=readlineSync.questionInt(`Ingrese DNI:        `);
    if (controlAlumno(dni)) {
                           console.warn("***El ALUMNO YA ESTA REGISTRADO***");
                           readlineSync.question("Presione ENTER para continuar...");   
                          } else {
                                trim1=readlineSync.questionInt(`Nota 1er Trimestre: `);
                                trim2=readlineSync.questionInt(`Nota 2er Trimestre: `);
                                trim3=readlineSync.questionInt(`Nota 3er Trimestre: `);
                                alumno.push({nombre,dni,trim1,trim2,trim3});
                                readlineSync.question("Presione ENTER para continuar...");   
                                 }
}

function buscarPromedio():void 
{
        let indice,dni,promedio:number;
        console.clear();
        DibujarGuiones(80);
        DibujarGuiones(80,"BUSCAR PROMEDIO");
        DibujarGuiones(80);
        dni=readlineSync.questionInt(`Ingrese el DNI del alumno a buscar: `);
        if (!controlAlumno(dni)) 
                              {
                               console.warn("***El ALUMNO NO ESTA REGISTRADO***");
                               readlineSync.question("Presione ENTER para continuar...");
                              } else {
                                    for (indice = 0; indice < alumno.length; indice=indice+1) 
                                        {   
                                         if (dni==alumno[indice].dni) {
                                                                        DibujarGuiones(80);
                                                                        promedio=(alumno[indice].trim1+alumno[indice].trim2+alumno[indice].trim3)/3;
                                                                        console.log(`El Alumno ${alumno[indice].nombre} \n 
                                                                                     \r T1 ${alumno[indice].trim1}, T2 ${alumno[indice].trim2}, T3 ${alumno[indice].trim3} \n
                                                                                     \r Promedio: ${promedio.toFixed(3)}`);
                                                                        DibujarGuiones(80);    
                                                                        readlineSync.question("Presione ENTER para continuar...");
                                                                      }  
                                        }
                                     } 
}
 
    let opcion:Number;
    opcion=0;
    while (opcion!=3)
        {
        console.clear();
        DibujarGuiones(80);
        DibujarGuiones(80, "Promedio Escolar");
        DibujarGuiones(80);
        console.log(" 1 - Registar Alumno y trimestres");
        console.log(" 2 - Buscar promedios");
        console.log(" 3 - Salir");
        DibujarGuiones(80);
        opcion=readlineSync.questionInt("Ingrese opcion: ");
        if (opcion===1) {
                        registrarAlumno();
                        }
        if (opcion===2) {
                        buscarPromedio();
                       }   
        if (opcion===3) {
                        console.warn("Saliendo del sistema...");
                       }   
        }
    