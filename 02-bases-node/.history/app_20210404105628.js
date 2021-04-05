const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const [ , , arg3 ] = process.argvl;

console.log( arg3 );


const numero = 9;

// crearArchivo( numero )
//      .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//      .catch( err => console.log(err));