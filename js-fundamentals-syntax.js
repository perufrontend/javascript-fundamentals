/////////Case Sensitive
var nombre = 'Rocío';
var Nombre = 'Daniela';
console.log('Mi nombre es: ' + nombre); //Output: Mi nombre es: Rocío
console.log('Mi nombre es: ' + Nombre); //Output: Mi nombre es: Daniela

/////////Comentarios
// Este es un comentario de una sola línea
/* Este es un comentario de
múltiples líneas */
let numero = 1;

//////////Punto y coma
let numero = 1;
let palabra = 'uno';	//En este segundo caso, ASI inserta el punto y coma
console.log(numero);	// 1

//////////Identificadores
let $color = 'Rojo';	//Correcto
let _color = 'Verde';	//Correcto
let color_1 = 'Amarillo';	//Correcto
let color_ = 'Negro';	//Correcto
let 1color = 'Azul';	//Syntax error

/////////Variables
//Primera forma
let signo;
signo_1 = 'Sagitario';
//Segunda forma
let signo_2 = 'Géminis';
