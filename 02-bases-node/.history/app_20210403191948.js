const fs = require('fs');

console.clear();
console.log('===================');
console.log('=== Tabla del 5 ===');
console.log('===================');

const numero = 3;
let salida = '';

for(i=0; i<=10; i++){
     salida += `${numero} x ${i} = ${numero * i}\n`;
}

console.log(salida);

fs.writeFileSync(`tabla-${numero}.txt`, salida );

console.log(`tabla-${numero}.txt`);