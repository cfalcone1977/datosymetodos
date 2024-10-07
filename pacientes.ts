/*
Consultorio medico
Un consultorio médico necesita gestionar las citas de
sus pacientes. El sistema debe permitir las siguientes
acciones:
Registrar una cita médica (nombre del paciente,
apellido, dni y fecha).
Cancelar una cita médica ingresando el dni del
paciente.
Mostrar las citas registradas.
Salir del sistema.
El sistema debe verificar si ya existe una cita para un
paciente antes de agregar una nueva.
*/

import * as readlineSync from "readline-sync";

//interface me permite crear campos para un arrreglo.
//interface es un contrato.
interface camposCita 
{
 nombre:string;
 apellido:string;
 dni:number;
 fecha:string;
}


//creamos un arreglo que posee campos ej: citas.nombre[] 
let citas: camposCita[] = [];

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

//controlCita me permite detminar si un paciente ya esta registrado!!, lo uso en registrar paciente y en cancelar cita!.
function controlCita(documento:number):boolean
{
  let existencia:boolean;
  let indice:number;
  existencia=false;
  for (indice = 0; indice < citas.length; indice=indice+1) 
    {
     if (citas[indice].dni==documento) {
                                        existencia=true;
                                        break;     
                                       }
    
    }
  return existencia;  
}

function registrarCita():void {
let nombre,apellido,fecha:string;
let dni:number;
console.clear();
DibujarGuiones(80);
DibujarGuiones(80,"REGISTRAR DATOS PACIENTE");
DibujarGuiones(80);
nombre=readlineSync.question("Ingrese el Nombre:   ");
apellido=readlineSync.question("Ingrese el Apellido: ");
dni=readlineSync.questionInt("Ingrese el DNI:      ");
if (controlCita(dni)) {
                       console.warn("***El paciente YA POSEE cita asignada***");
                       readlineSync.question("Presione ENTER para continuar...");   
                      } else {
                              fecha=readlineSync.question("Ingrese fecha cita:  ");
                              citas.push({nombre,apellido,dni,fecha});
                              readlineSync.question("Presione ENTER para continuar...");   
                             }


}
function cancelarCita():void {
    let documento,indice:number;
    //let estado:boolean;
    console.clear();
    DibujarGuiones(80);
    DibujarGuiones(80,"CANCELAR CITA");
    DibujarGuiones(80);
    documento=readlineSync.questionInt("Ingrese el documento del paciente: ");
    //estado=false;
    if (controlCita(documento)) {
                                for (indice = 0; indice < citas.length; indice=indice+1) 
                                {
                                if (citas[indice].dni===documento){
                                                                console.log(`Se ha cancelado la cita del paciente ${citas[indice].nombre} ${citas[indice].apellido}, con fecha ${citas[indice].fecha} `);
                                                                citas.splice(indice,1);
                                                                //estado=true;
                                                                readlineSync.question("Presione ENTER para continuar...");   
                                                                } 
                                }
                                } else {
                                       console.warn(`***NO EXISTE CITA para el documento: ${documento}***`);
                                       readlineSync.question("Presione ENTER para continuar...");   
                                       }
    //el comentario siguiente era parte del programa, pero luego optimizando, reutilice la funcion controlCita
    //para validar primero si existe una cita para ese paciente!.                                  
    /*for (indice = 0; indice < citas.length; indice=indice+1) 
        {
        if (citas[indice].dni===documento){
                                          console.log(`Se ha eliminado la cita del paciente ${citas[indice].nombre} ${citas[indice].apellido}, con fecha ${citas[indice].fecha} `);
                                          citas.splice(indice,1);
                                          estado=true;
                                          readlineSync.question("Presione enter para continuar...");   
                                         } 
        }
    if (estado==false) {
                        console.warn(`***NO EXISTE CITA para el documento: ${documento}***`);
                        readlineSync.question("Presione enter para continuar...");   
                       }*/
}

function mostrarCitas():void {
    let indice:number;
    console.clear();
    DibujarGuiones(80);
    DibujarGuiones(80,"MOSTRAR CITAS");
    DibujarGuiones(80);
    if (citas.length>0) {
    for (indice = 0; indice < citas.length; indice=indice+1) 
        {   
        console.log(`${citas[indice].fecha} ${citas[indice].apellido} ${citas[indice].nombre} ${citas[indice].dni}`);
        }
    DibujarGuiones(80);    
    readlineSync.question("Presione ENTER para continuar...");
    } else {
            DibujarGuiones(80,"NO HAY CITAS REGISTRADAS");
            DibujarGuiones(80);
            readlineSync.question(`Presione ENTER para continuar... \r`);
           }

}

let opcion:Number;
opcion=0;
while (opcion!=4)
    {
    console.clear();
    DibujarGuiones(80);
    DibujarGuiones(80, "Consultorio Medico");
    DibujarGuiones(80);
    console.log(" 1 - Registrar Cita ");
    console.log(" 2 - Cancelar Cita  ");
    console.log(" 3 - Mostrar Citas  ");
    console.log(" 4 - Salir");
    DibujarGuiones(80);
    opcion=readlineSync.questionInt("Ingrese opcion: ");
    if (opcion===1) {
                    registrarCita();
                    }
    if (opcion===2) {
                    cancelarCita();
                   }   
    if (opcion===3) {
                    mostrarCitas();
                   }   
    if (opcion===4) {
                    console.warn("Saliendo del sistema...");
                   }   
    }


