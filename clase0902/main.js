'use strict';

// let number1 = 5;
// const number2 = 8;

// if (number1 < number2) {
//   console.log('El numero 1 no es mayor que el 2');
// };

// if (number2 > 0) {
//   console.log('numero 2 es mayor que cero');
// };

// if (number1 < 0 || number1 != 0) {
//   console.log('negativo o != de cero');
// };

// if (number1++ < number2) { 
//   console.log( 'Incrementar en uno a numero 1 no lo hace igual o mayor que number2')
// };

// if ((number1 < number2) && number2 > 0 && (number1 < 0 || number1 != 0) &&  number1++ < number2) {
//   alert('todo')
// }


// const letras = ['a', 'e', 'i', 'o', 'u'];
// console.log('length', letras.length);

// for (let i = 0; i < letras.length; i++){
//   console.log(i, letras[i]);
// }

// HELADOS

// let precio = 1.90;
// const toppingOreo = 1;
// const sabor = prompt('¿Qué sabor?');

// if (sabor === 'oreo') {
//   console.log('Has elegido oreo', precio);
//   precio = precio + toppingOreo;
//   document.write('El precio de tu helado es', precio)
// } else if (sabor === 'kitkat') {
//   alert('Has elegido kitkat');
// } else if (sabor == 'sin topping'){
//   alert('Sin topping');
// } else {
//   alert('No tenemos');
// }


/// DNI

// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// alert('es la t' + letras[0]);

/// RUEDAS

// const diametro = prompt('¿Diámetro?');
// const grosor = prompt('¿Grosor?');

// REDUCE
// const scores = [4,5,6,7];
// let resultado;
// scores.reduce(function(accumulator, currentValue){
//   resultado = accumulator + currentValue;
//   return resultado;
// }, 0);

// console.log(resultado);


// PAR O IMPAR

function checkNumber (number) {
  // isNaN nos dice si es un número o no
  if (isNaN(number) === false) {  // False --> número
    if (number%2 === 0) {
      console.log('par');
      return "es par"
    } else {
      console.log('impar');
      return "es impar"
    }
  } else {
    return "solo numeros"; // True --> letras
  }
};

const resultado = checkNumber(26);
// alert(resultado);

/// Mayúsculas o minúsculas

//const frase = prompt('escribe');

// function checkLetter (paco)  {
//   const controlMay = paco.toUpperCase();
//   const controlMin = paco.toLowerCase();

//   if(paco === controlMay) {
//     return 'Mayuscula';
//   } else if (paco == controlMin) {
//     return 'minusculas';
//   } else {
//     return 'mayus y min';
//   }
// };

// // alert(checkLetter(prueba));


// const resultado = checkLetter(frase);
// console.log(resultado);

/// ARRAYS
const topics = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

const topicsMayus = topics.map(function(element) {
  return element.toUpperCase();
});
// topicsMayus.reverse();
// console.log('topics', topics);
// console.log(topicsMayus);

const topicsArrow = topics.map(element => element.toUpperCase());


//FILTER

const topicsFiltered = topics.filter(function(palabra) {
  return palabra.length > 6;
});

const topics2 = topics.filter(item => {
  var hola = 0;
  return item.length > 6;
});


console.log('topics', topics);
console.log('topicsFiltered', topicsFiltered);
console.log('topics2', topics2);

const numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const pares = numbers.filter(function(num) {
  // if (num%2=== 0) {
  //   return num;
  // };

  return num%2 === 0;
});

console.log(pares);

const impares = numbers.filter(function(numero) {
  if (numero%2 !== 0) {
    return numero;
  }
});
console.log(numbers);
console.log(impares);
//// REDUCE

const palabras = ['ala', 'barco', 'cocina'];

let resultad = '';

palabras.reduce(function(acc, current) {
  if (acc.length > current.length) {
    return resultad = acc;
  } else {
    return resultad = current;
  }
}, 'paragüas');

console.log(resultad);

/// NÚMEROS

const times = [60, 75, 79, 80, 55, 59];
let total = 0;

times.reduce(function(acumulador, valorActual){
  total = acumulador + valorActual;
  return total;
}, 0);

console.log(total);
const media = total / times.length;
console.log('media', media)



const words = ['Environmental', 'Systems', 'Research', 'Institute'];

const larga = words.reduce(function(acc, currentValue){
  if (acc.length > currentValue.length) {
    return acc;
  } else {
    return currentValue;
  }
}, '');

console.log(larga);


