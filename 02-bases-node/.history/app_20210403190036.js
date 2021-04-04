const fs = require('fs');

console.clear();
console.log('===================');
console.log('=== Tabla del 5 ===');
console.log('===================');

const numero = 5;
let salida = '';

for(i=0; i<=10; i++){
     salida += `${numero} x ${i} = ${numero * i}\n`;
}

fs.writeFile('tabla-5.txt', salida, (err) => {
     if (err) throw err;

     console.log('tabla-5.txt creado');
})