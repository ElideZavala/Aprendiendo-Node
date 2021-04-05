const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors')

console.clear();

crearArchivo( argv.n, argv.l)
     .then( nombreArchivo => console.log(nombreArchivo, 'creado'.gray) )
     .catch( err => console.log(err));