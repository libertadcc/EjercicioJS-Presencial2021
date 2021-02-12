'use strict';

const enlaces = document.getElementsByTagName('a');
console.log(`Hay ${enlaces.length} enlaces`);

const penultimo = enlaces[enlaces.length -2];
console.log(penultimo.href);

const tercer = document.getElementById('thirdparagraph');
console.log(tercer);

const enlacesTercer = tercer.getElementsByTagName('a');

console.log(enlacesTercer.length);

const resultado = document.getElementById('resultado');
resultado.innerHTML = enlacesTercer.length;

