import { iCar } from "./types";
import * as readlineSync from "readline-sync";
let car01:iCar = {
make: "Ford",
model: "Ranger",
year: 2024,
color: "Graphite",
isAutomatic: false,
price: 39000,
}

let car02:iCar={ 
make: "Toyota", 
model: "Corolla", 
year: 2023, 
color: "White", 
isAutomatic: true, 
price: 25000,}

let car03:iCar = {
 make: "Honda",
 model: "Civic",
 year: 2022, 
 color: "Red",
 isAutomatic: true,
 price: 28000,}

let car04:iCar = {
 make:"BMW",
 model: "3 Series",
 year: 2025,
 color: "Black",
 isAutomatic: true,
 price: 45000,}

let car05:iCar = {
    make: "Tesla",
    model: "Model 3", 
    year: 2024, 
    color: "Silver", 
    isAutomatic: true, 
    price: 50000,}

let car06:iCar={
    make: "Mercedes-Benz", 
    model: "C-Class", 
    year: 2023, color: "Blue", 
    isAutomatic: true, 
    price: 48000,}

let car07: iCar = {
    make: "Volkswagen",
    model: "Golf",
    year: 2023,
    color: "Rojo",
    isAutomatic: true,
    price: 30000,
    }
       
let car08: iCar = {
        make: "Nissan",
        model: "Altima",
        year: 2022,
        color: "Verde",
        isAutomatic: true,
        price: 27000,
        }
    
let car09: iCar = {
    make: "Hyundai",
    model: "Elantra",
    year: 2024,
    color: "Azul",
    isAutomatic: true,
    price: 23000,
    }
    
let car10: iCar = {
    make: "Kia",
    model: "Sorento",
    year: 2023,
    color: "Negro",
    isAutomatic: true,
    price: 35000,
    }   

let autos:iCar[]= [car01,car02,car03,car04,car05,car06,car07,car08,car09,car10];
let dineroDisponible:number;

function printCar(vehiculo:iCar):void
{
console.log("-------------------------------------------------------");
console.log(`Fabricante: ${vehiculo.make}  Modelo: ${vehiculo.model}`);
console.log(`       Año: ${vehiculo.year}  color: ${vehiculo.color}`);
//uso de operador TERNARIO, porque tiene 3 partes: condicion, opcion1(TRUE) y opcion2(FALSE)
console.log(`      Caja: ${vehiculo.isAutomatic? "Auto":"Manual"}   Precio: ${vehiculo.price}`);
console.log("--------------------------------------------------------");
}

function carsWithDiscount(monto:number,vehiculos:iCar[]):void
{
let listadoPositivo:boolean;    
console.log(`\n\n`);   
console.log(`-------LISTADO DE VEHICULOS DISPONIBLES POR ESE PRECIO--------`);
listadoPositivo=false;
for (let indice = 0; indice < vehiculos.length; indice=indice+1) 
       {
        if (monto>=vehiculos[indice].price){
                                           printCar(vehiculos[indice]);
                                           listadoPositivo=true;                                   
                                           }              

       }
if (!listadoPositivo) {
                       console.warn(`***NO HAY VEHICULOS DISPONIBLES PARA ESE MONTO***`);
                      }       
console.log(`------FIN LISTADO DE VEHICULOS DISPONIBLES POR ESE PRECIO-------`);                             
}

//for tradicional con indice
/*for (let indice = 0; indice < autos.length; indice=indice+1) 
{
console.log(`El vehiculo marca: ${autos[indice].make} modelo: ${autos[indice].model} tiene un precio de: ${autos[indice].price}`);
}*/

/*for of 
for (let car of autos) console.log(car.make," ",car.model);
*/

//forEach
//autos.forEach((auto) => console.log(auto.make,auto.price));


//********************EJERCICIO***************************************
/*
 * ejercicio: 
 * 0- crear un tipo para la entidad car.
 * 1- guardar los diez elementos de tipo car en un arreglo.
 * 2- iterar el arreglo y mostrar el numero de vehiculo en el listado (no es una propiedad de la entidad)
 * 3- junto al numero mencionado ut supra, poner marca, modelo y color.
 */
console.clear();
for (let indice = 0; indice < autos.length; indice=indice+1) 
    {
    console.log(`${indice+1} marca: ${autos[indice].make} modelo: ${autos[indice].model} color: ${autos[indice].color}`);
    }

/*
ejercicio 2:
1-iterar el arreglo:
*en cada iteracion invocar a la funcion printCar que recibira como argumento un elemento del tipo icar.
* Esta funcion debe imprimir todos los datos de un vehiculo, con un encabezado y unprie como separadores. Debe haber
al menos un salto de line entre cada vehiculo impreso en pantalla.
*/

console.clear();
for (let indice = 0; indice < autos.length; indice=indice+1) 
    {
    printCar(autos[indice]);    
    }


// Ejercicio 3:
// crear una funcion "carsWithDiscount" que reciba un parametro "monto", un "arreglo de autos" 
// e imprima los autos cuyo precio sea igual o menor al parametro "monto". Reutilizar la funcion "printCar"//


dineroDisponible=readlineSync.questionInt(`Ingrese el monto el dinero disponible: `);
carsWithDiscount(dineroDisponible,autos);    

