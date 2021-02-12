'use strict';

// CONCATENACIÓN DE MÉTODOS

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// > 7
// Mayuscula

const filteredMeses = meses.filter(function(mes){
  return mes.length > 7;
});

console.log(filteredMeses);

const mesesMayus = filteredMeses.map(function(month) {
  return month.toUpperCase();
});

console.log(mesesMayus);

const concatenacionMet = meses.filter(function(item) {
  return item.length > 7
}).map(function(element) {
  return element.toUpperCase();
});

console.log(concatenacionMet);

// arrow function
const arrow = meses.filter((mes) => mes.length > 7 ).map((item) => item.toUpperCase());

console.log(arrow);

// CLASES JS

class Square {
  constructor(lado, impuestos){
    this.lado = lado;
    this.perimetro = lado * 4;
    this.area = lado*lado;
   

    this.calcularVolumen = function () {
      return console.log(lado*this.area);
    }
  }
  print () {
    console.log('printed');
  }
  

}

const pequeño = new Square(2);
const mediano = new Square(5);
const grande = new Square(20);
console.log('pequeño', pequeño);
console.log('mediano', mediano);
console.log('grande', grande);

pequeño.print();

pequeño.calcularVolumen();


/// EJERCICIO FACTURAS

class Factura {
  constructor(cliente, elementos) {
    this.cliente = cliente;
    this.elementos = elementos;
    this.informacion = {
      baseImponible: 0,
      iva: 21,
      total: 0,
      pago: 'efectivo'
    };

    this.calcularBaseImponible = function(){
      return  this.informacion.baseImponible = this.elementos.cantidad * this.elementos.precio;
    };

    this.calcularTotal = function() {
      return this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100))
    }
  }
};

class Cliente {
  constructor(nombre, direccion, tel, nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.tel = tel;
    this.nif = nif;
  }
};

class Elemento {
  constructor(definicion, cantidad, precio) {
    this.definicion = definicion;
    this.cantidad = cantidad;
    this.precio = precio;
  }
};

const cliente1 = new Cliente('Ana', 'Getafe', 652, 2035);
const objeto = [new Elemento('botella', 1, 5), new Elemento('raton', 20, 5)];
const factura1 = new Factura(cliente1, objeto);

console.log(cliente1);
console.log('objeto', objeto);
console.log(factura1);
// factura1.calcularBaseImponible();
// factura1.calcularTotal();