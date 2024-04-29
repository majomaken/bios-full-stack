var suma = 3 + 5;
var resta = 3 - 5;
var multiplicacion = 3 * 5;
var division = 3 / 5;

// var comparacion = 5 == 5;
// var comparacion = 5 == '5';
// var comparacion = 5 === '5';
var mayor = 5 > 6;
var menor = 5 < 6;
var mayorIgual = 5 >= 5;
var menorIgual = 5 <= 5;

true && true; // true
true && false; // false

var a = true;
var b = false;

a && b; // false

var esMayor = true;
var esMenor = false;

var edad = 16;
var esMayor = edad >= 18;

var pago = false;

// var puedeEntrar = esMayor && pago;

var puedeEntrar = esMayor || pago;

// console.log(puedeEntrar, 'Esta persona puede entrar si la persona cumple alguna de las dos condiciones')

var edad = 16;
// edad++;


edad += 6;

console.log(edad)