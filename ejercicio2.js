'use strict';
console.log('ejercicio2');

// const age = prompt('What\'s your age?');
// console.log(age);
let alto = 15;

// alto = prompt('Ancho: ');
// const ancho = prompt('Ancho');
// const base = prompt('base: ');

// const volumen = alto*ancho*base;
// console.log(`El volumen es de ${volumen}`);


const liber = {
  day: 5,
  mes: "Abril"
};

console.log(liber['day'], liber.mes);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
console.log(meses[3]);

/// volumen

const data = ['hola', 2, 5, 'adios'];
const number1 = data[1];
const number2 = data[2];

// console.log(number1, number2);

// console.log(number1>number2);
// console.log(number1>=number2);
// console.log(number1<number2);
// console.log(number1<=number2);
// console.log(number1+number2);

// console.log(data[1]%data[2]);

let usuario = {
  name: 'Liber',
  address: {
    street: 'Pinto',
    number: 4
  }
};

let usuario2 = {
  name: 'Paca',
  address: {
    street: 'Hola',
    number: 40
  }
};

const array = [usuario2, usuario];
console.log(array);

array[0].name = 'Pepa';
array[0].address.number = 200;

console.log(array);

