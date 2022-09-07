'use strict';
// 1. Objeto Literal de JavaScript
let cristian = {
    nombre: 'Cristian',
    apellidos: 'Guasca',
    edad: 17,
    altura: 1.63,
    peso: 63.2,
    caminar: function(){
        return`Yo camino`;
    },
    hablar: function (){
        return`Yo hablo`;
    }
}
//console.log(cristian);
//console.log(cristian.nombre, cristian.apellidos);
//console.log(cristian.caminar());
/* No se puede 
for (i of cristian){
    console.log(i);
}
*/
// Values
//como iterar un objeto con el for, for in o el for of.
Object.keys(cristian).forEach((e) => console.log(e));
/**
 * 
 */
