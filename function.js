//Scope
var funcion = function() {};
let global = 'global';

function suma (parametro1) {
  parametro1 = 'local'
}

//Functions

function suma (parametro1, parametro2) {}

var resta = function (parametro1, parametro2) {
  console.log(parametro1 - parametro2)
}

const multiplicacion = (parametro1, parametro2) => {
  return console.log(parametro1 * parametro2)
}

console.log(multiplicacion(3, 2))
