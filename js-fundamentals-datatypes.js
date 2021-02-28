let valor = 'Gato';
valor = 2;

console.log('El valor es: ', + valor); // El valor es 2

/********** NUMBER **********/

let entero = 1;
console.log('entero: ', entero); // entero: 1
let decimal = 1.5;
console.log('decimal: ', decimal); // decimal: 1.5
let exponencial = 2.50e-3;
console.log('exponencial: ', exponencial); // exponencial: 0.0025
let binario = 0b1010;
console.log('binario: ', binario); // binario: 10
let octal = 0o643;
console.log('octal: ', octal); // binario: 419
let hexadecimal = 0XA;
console.log('hexadecimal: ', hexadecimal); // binario: 10
let negativo = -13.05;
console.log('hexadecimal: ', negativo); // binario: -13.05

let suma = 1 + 1;
console.log('suma: ', suma); // suma: 2
let resta = 2 - 1;
console.log('resta: ', resta); // resta: 1
let multiplicacion = 2 * 2;
console.log('multiplicacion: ', multiplicacion); // multiplicacion: 4
let division = 2 / 2;
console.log('division: ', division); // division: 1
let residuo = 5 % 2;
console.log('residuo: ', residuo); // residuo: 1
let potencia = 2 ** 3;
console.log('potencia: ', potencia); // residuo: 8
let incrementoEn1 = ++suma;
// suma + 1 = 2 + 1 = 3
let decrementoEn1 = --suma;
// suma + 1 = 3 - 1 = 2

let infinitoPositivo = 10 / 0;
console.log('infinitoPositivo: ', infinitoPositivo); // Infinity
let infinitoNegativo = -10 / 0;
console.log('infinitoNegativo: ', infinitoNegativo); // -Infinity
let noEsNumero = 'numero' / 5;
console.log('noEsNumero: ', noEsNumero); // NaN
let tampocoEsNumero = Number('numbero');
console.log('tampocoEsNumero: ', tampocoEsNumero); // NaN

/********** STRING **********/

let saludo = 'Hola mundo';
let despedida = "Adiós mundo";
let parrafo = `Esta es la primera oración.
Esta es la segunda oración`;

let numero = 2;
let oracion = `Hay ${ numero } manzanas`;
console.log(oracion);

let pregunta = 'Yo pregunté: "¿Que hora es?"';
let respuesta = "Ella me dijo: 'Son las 3:00 p.m.'";
let final = "Yo respondi: \"Gracias\"";

let erroneo = 'Me dijo 'Hola''; // Esto es error de sintaxis, mal.

let oracion1 = 'Primera oración \nSegunda oración.';
let oracion2 = 'Este es un ejemplo de tabulación:\tTab';
let oracion3 = 'Uso del backslash: C:\\Descargas';

/********** BOOLEAN **********/

let verdadero = true;
let falso = false;

let verdadero = 2 === 2;
console.log(verdadero); // true
let falso = 1 === 2;
console.log(falso); // false

/********** BIGINT **********/

let forma1 = 9876543219876543n;
let forma2 = BigInt(9876543219876543n);

/********** SYMBOL **********/

let simbolo1 = Symbol();
let simbolo2 = Symbol('Hola'); // El string representa una descripción

/********** UNDEFINED **********/

// Caso 1
let nombre;
console.log(nombre);

// Caso 2
let persona = { nombre: 'Roocio' };
console.log(persona.edad);

// Caso 3
function Suma2Numeros(numero1, numero2) {
    return numero1 + numero2;
}
console.log(Suma2Numeros(1));

// Caso 4
function Suma2NumerosSinResultado(numero1, numero2) {
    numero1 + numero2;
}
console.log(Suma2NumerosSinResultado(1, 1));

// Caso 5
console.log(void 1);

// Caso 6
let arreglo = [1, 2, 3];
console.log(arreglo[3]);

/********** NULL **********/

let verdura = null;
console.log(verdura);

/********** OBJECT **********/

let  carro = {
    color: 'Plata',
    marca: 'MG',
    esNuevo: true,
    años: 1
};
console.log(carro);