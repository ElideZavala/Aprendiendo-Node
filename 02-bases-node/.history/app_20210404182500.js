const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors')

console.clear();

crearArchivo( argv.n, argv.l, arg.m)
     .then( nombreArchivo => console.log(nombreArchivo, 'creado'.zebra) )
     .catch( err => console.log(err));