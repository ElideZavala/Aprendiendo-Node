const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const numero = 3;

crearArchivo( numero )
     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
     .catch( err => console.log(err));