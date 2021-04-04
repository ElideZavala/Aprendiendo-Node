// Tabla del 5

console.clear();

console.log('===================');
console.log('=== Tabla del 5 ===');
console.log('===================');

const numero = 5;
let salida = '';

for(i=0; i<=10; i++){
     salida += console.log(`${numero} x ${i} = ${numero * i}` );
}

console.log(salida);