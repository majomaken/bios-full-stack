// Description: Ejemplo de coercion en JavaScript.
// Date: 2024-04-24

// Coercion implícita es la conversión automática o implícita de valores de un tipo de dato a otro (por ejemplo, de cadena a número o de número a cadena).
var suma = 3 + '2'
var multiplicacion = 3 * '2'
console.log(suma) // 32
console.log(multiplicacion) // 6

// Coercion explícita es la conversión manual de valores de un tipo de dato a otro.
var a = 3
var b = Number('2')

console.log(a + b) // 5

var a = 3
var b = '2'

console.log(String(a) + b) // 5