import * as readlineSync from "readline-sync";
/*
Cuenta Cide Hamete Benengeli, en la segunda parte desta historia y tercera salida
 de don Quijote, que el Cura y el Barbero se estuvieron casi un mes sin verle, por no 
 renovarle y traerle a la memoria las cosas pasadas; pero no por esto dejaron de visitar 
 a su Sobrina y a su Ama, encargándolas tuviesen cuenta con regalarle, dándole a comer cosas
  confortativas y apropiadas para el corazón y el celebro, de donde procedía, según buen discurso, 
  toda su mala ventura. Las cuales dijeron que así lo 
*/



let frase:string =`hacían, y lo harían, con la voluntad y cuidado posible, porque echaban de ver 
    que su señor por momentos iba dando muestras de estar en su entero juicio; de lo cual recibieron los dos gran contento, por parecerles que habían 
    acertado en haberle traído encantado en el carro de los bueyes, como se contó en la primera 
    parte desta tan grande como puntual historia, en su último capítulo. Y así, determinaron de visitarle 
    y hacer experiencia de su mejoría, aunque tenían casi por imposible que la tuviese, y acordaron 
    de no tocarle en ningún punto de la andante caballería, por no ponerse a peligro de descoser los
     de la herida, que tan tiernos estaban. `;

/*let fraseMayusculas:string;
fraseMayusculas=frase.toUpperCase();
console.log(fraseMayusculas);
*/
let palabras:string[];
let buscarTermino, fraseModificada: string;
let indice,contador:number;
buscarTermino = readlineSync.question("Ingrese la palabra a buscar: ");
if (frase.toUpperCase().includes(buscarTermino.toUpperCase())) 
    {
         console.log("Palabra encontrada!!");
    } else {
            console.warn("Palabra no encontrada");
           }           
console.log(`La palabra tiene ${buscarTermino.length} caracteres, su ubicacion, indice es: ${frase.indexOf(buscarTermino)}`);
fraseModificada= frase.replace(buscarTermino,("libertad"));
console.log(fraseModificada);
palabras=frase.split(" ");
console.log(palabras);
contador=0;
for (indice = 0; indice < palabras.length; indice= indice + 1) 
    {
    if (palabras[indice].toUpperCase()===buscarTermino.toUpperCase()) {
                                        contador=contador+1;
                                       }
    
    }
console.log(`la palabra buscada aparece ${contador} veces.`);


