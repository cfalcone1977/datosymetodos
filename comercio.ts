/*Inventario de un comercio

Una tienda de productos electrónicos necesita un
sistema para registrar su inventario.

El usuario ingresará los nombres de productos y sus
respectivas cantidades en stock. Luego, podrá buscar un
producto por su nombre y obtener su cantidad
disponible.

Si el producto no existe, el sistema debe indicarlo.
Además, debe permitir actualizar la cantidad en stock de
un producto existente.*/


import * as readlineSync from "readline-sync";

//interface me permite crear campos para un arrreglo.
//interface es un contrato.
interface camposProducto 
{
 nombre:string;
 stock:number;
}
//creamos un arreglo que posee campos ej: producto[].nombre o producto[].stock
let producto: camposProducto[] = [];
let nombre:string;
let stock:number;

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

//existenciaProducto me permite detminar si un producto existe.
function existenciaProducto(nombre:string):boolean
{
  let existencia:boolean;
  let indice:number;
  existencia=false;
  for (indice = 0; indice < producto.length; indice=indice+1) 
    {
     if (producto[indice].nombre.toUpperCase()==nombre.toUpperCase()) 
                                       {
                                        existencia=true;
                                        break;     
                                       }
    
    }
  return existencia;  
}

function ingresaProducto(nombre:string,stock:number):void {
// validacion producto
if (existenciaProducto(nombre)) {
                       console.warn("***El producto YA EXISTE***");
                       readlineSync.question("Presione ENTER para continuar...");   
                      } else {
                              producto.push({nombre,stock});
                              readlineSync.question("Presione ENTER para continuar...");   
                             }


}

function buscarProducto(nombre:string):void {
    let indice:number;
    if (existenciaProducto(nombre)) {
                                for (indice = 0; indice < producto.length; indice=indice+1) 
                                {
                                if (producto[indice].nombre.toUpperCase()===nombre.toUpperCase()){
                                                                console.log(`Nombre producto: ${producto[indice].nombre} Cantidad: ${producto[indice].stock}`);
                                                                DibujarGuiones(80);
                                                                readlineSync.question("Presione ENTER para continuar...");   
                                                                } 
                                }
                                } else {
                                       console.warn(`***NO EXISTE EL PRODUCTO: ${nombre}***`);
                                       readlineSync.question("Presione ENTER para continuar...");   
                                       }
    }

function actualizarStock(nombre:string):void {
    let indice,cantidad:number;
    if (existenciaProducto(nombre)) {
        for (indice = 0; indice < producto.length; indice=indice+1) 
        {
        if (producto[indice].nombre.toUpperCase()===nombre.toUpperCase()){
                                        DibujarGuiones(80);
                                        console.log(`Nombre producto: ${producto[indice].nombre} Cantidad: ${producto[indice].stock}`);
                                        cantidad=readlineSync.questionFloat(`Ingrese la actualizacion de Stock: `);
                                        producto[indice].stock=cantidad;
                                        DibujarGuiones(80);
                                        readlineSync.question("Presione ENTER para continuar...");   
                                        } 
        }
        } else {
               console.warn(`***NO EXISTE EL PRODUCTO: ${nombre}***`);
               readlineSync.question("Presione ENTER para continuar...");   
               }
}

let opcion:Number;
opcion=0;
while (opcion!=4)
    {
    console.clear();
    DibujarGuiones(80);
    DibujarGuiones(80, "Sitema Registro Inventario");
    DibujarGuiones(80);
    console.log(" 1 - Ingresa Producto ");
    console.log(" 2 - Busca Producto   ");
    console.log(" 3 - Actualiza Stock  ");
    console.log(" 4 - Salir");
    DibujarGuiones(80);
    opcion=readlineSync.questionInt("Ingrese opcion: ");
    if (opcion===1) {
                    console.clear();
                    DibujarGuiones(80);
                    DibujarGuiones(80,"REGISTRO PRODUCTO");
                    DibujarGuiones(80);
                    nombre=readlineSync.question("Nombre producto: ");
                    stock=readlineSync.questionInt("Cantidad Stock : ");
                    ingresaProducto(nombre,stock);
                    }
    if (opcion===2) {
                    console.clear();
                    DibujarGuiones(80);
                    DibujarGuiones(80,"BUSCAR PRODUCTO");
                    DibujarGuiones(80);
                    nombre=readlineSync.question("Ingrese el producto a buscar: ");
                    buscarProducto(nombre);
                   }   
    if (opcion===3) {
        console.clear();
                    DibujarGuiones(80);
                    DibujarGuiones(80,"ACTUALIZA STOCK");
                    DibujarGuiones(80);
                    nombre=readlineSync.question("Ingrese el producto a actualizar: ");
                    actualizarStock(nombre);
                   }   
    if (opcion===4) {
                    console.warn("Saliendo del sistema...");
                   }   
    }


