/********** IF/ELSE **********/
let edad = 23;
if (edad >= 18) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}
// Resultado: Es mayor de edad

let a = 'Cero';
if (a > 0) {
    console.log('Es mayor a 0');
} else if (a == 0) {
    console.log('Es igual a 0');
} else if (a < 0) {
    console.log('Es menor a 0');
} else {
    console.log('No es un número');
}
// Resultado: No es un número

/********** SWITCH **********/
let declaración = 'Pregunta';
switch (declaración) {
    case 'Saludo':
        console.log('Hola');
        break;
    case 'Pregunta':
        console.log('¿Cómo estás?');
        break;
    case 'Despedida':
        console.log('Adiós');
        break;
    default:
        console.log('No diré nada');
}
// Resultado: ¿Cómo estás?

let animal = 'Hamster';
switch (animal) {
    case 'Perro':
    case 'Gato':
    case 'Hamster':
        console.log('Es un animal domestico');
        break;
    default:
        console.log('Es un animal salvaje');
}
// Resultado: Es un animal doméstico

/********** FOR **********/
for (let número = 1; número <= 5; número++) {
    console.log('Vuelta número: ' + número);
}
/* Resultado:
Vuelta número: 1
Vuelta número: 2
Vuelta número: 3
Vuelta número: 4
Vuelta número: 5
*/

/********** FOR IN **********/
let persona = {
    nombre: 'Carla',
    edad: 25,
    estatura: 1.60
};

for (propiedad in persona) {
    console.log(propiedad + " = " + persona[propiedad]);
}
/* Resultado:
nombre = Carla
edad = 25
estatura = 1.6
*/

/********** FOR OF **********/
// Iterando sobre un array
let arreglo = [1, 2, 3, 4];
for (elemento of arreglo) {
    console.log(elemento);
}
/* Resultado:
 1
 2
 3
 4
*/

// Iterando sobre un string
let cadena = 'Hola';
for (letra of cadena) {
    console.log(letra);
}
/* Resultado:
 H
 o
 l
 a
*/

/********** FOREACH **********/
var animales = ["perro", "gato", "gallina"];
animales.forEach(function(item, index) {
    console.log(`El item en el index ${index} es ${item}`);
});

/* Resultado:
El item en el index 0 es perro
El item en el index 1 es gato
El item en el index 2 es gallina
*/

/********** WHILE **********/
let a = 0;
while (a < 5) {
    console.log(a);
    a++;
}
/* Resultado:
 0
 1
 2
 3
 4
*/

/********** DO WHILE **********/
var número = 5;
do {
    console.log(número);
} while (número < 5);
/* Resultado:
 5
*/

//Diferencia del while
var número = 5;
while (número < 5) {
    console.log(número);
}
/*  Resultado:
*/

/********** BREAK, CONTINUE **********/
//Break
let a = 0;
while (a < 5) {
    if (a == 3)
        break;
    console.log(a);
    a++;
}
/* Resultado:
 0
 1
 2
 3
*/

//Continue
for (let número = 0; número < 5; número++) {
    if (número == 3)
        continue;
    console.log('Vuelta número: ' + número);
}
/* Resultado:
 0
 1
 2
 4
*/

arreglo.forEach(miFuncion)
function miFuncion() {
    //...
}