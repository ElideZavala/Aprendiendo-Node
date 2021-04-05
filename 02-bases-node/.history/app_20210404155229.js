const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
          .option('n', {
                alias: 'numero',
                type: 'number',
                demandOption: true,     
          })
          .check( (argv, options) => {
                if( isNaN( argv.n ) ){
                     throw 'La base tiene que ser un número'
                }
                return true;  // regresar true si no hay un error despues de todas las verficaciones    
          })
          .argv;

console.clear();
console.log( argv );

crearArchivo( argv.n )
     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
     .catch( err => console.log(err));