// Operadores aritmèticos
let a = 4;
let b = 2;

console.log(a+b);        // 6
console.log(a-b);        // 2
console.log(a*b);        // 8
console.log(a/b);        // 2
console.log(a%b);        // 0
console.log(a**b);       // 16
console.log(-b);         // -2

let c = '2';
console.log(+c);         // 2

// Incremento y decremento unario
let a = 2;
let b = a++;
console.log(a); // 3
console.log(b); // 2

a = 2;
let c = ++a;
console.log(c); // 3

// Operadores de asignaciòn
let a = 6;
console.log(a);			// 6
console.log(a+=4);  // a = a + 4 => a = 6 + 4 = 10
console.log(a-=4);  // a = a - 4 => a = 10 - 4 = 6
console.log(a*=4);  // a = a * 4 => a = 6 * 4 = 24
console.log(a/=4);  // a = a / 4 => a = 24 / 4 = 6
console.log(a%=4);  // a = a % 4 => a = 6 % 4 = 2
console.log(a**=4); // a = a ** 4 => a = 2 ** 4 = 16

// Operadores de comparación
let a = '1';
let b = 1;
console.log(a == b);    // true
console.log(a === b);   // false
console.log(a != b);    // false
console.log(a !== b);   // true

let c = 3;
let d = 1;
console.log(b > c);    // false
console.log(b < c);    // true
console.log(d >= b);   // true
console.log(d <= b);   // true

// Operadores lógicos
let a = 3;
let b = -3;

console.log(a > 0 || b > 0); // true
console.log(a > 0 && b > 0); // false
console.log(!(a > 0 && b > 0)) // !(false) = true

// Operadores lógicos - OR
let nombreCorrecto = '' || 'Rocío' || 'Sandra';
console.log(nombreCorrecto); // Rocío

// Operadores lógicos - AND
let valor1 = '' && 1;
console.log(valor1); // ''
let valor2 = 1 && 'Rocio';
console.log(valor2); // Rocío

// Operador ternario
// Estructura => (condición) ? 'Si se cumple' : 'Si no se cumple';
let a = -3;
let resultado = (a >= 0) ? 'Es mayor igual a 0' : 'Es menor a 0';
console.log(resultado); // 'Es menor a 0'

// Operador ternario - cadena
let a = 0;
let resultado = (a > 0) ? 'Es mayor a 0' 
                : (a == 0) ? 'Es igual a 0'
                : (a < 0) ? 'Es menor a 0' : 'No es un número';
console.log(a); // Es igual a 0