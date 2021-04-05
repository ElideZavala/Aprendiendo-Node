const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
          .option('n', {
                alias: 'numero',
                type: 'number',
                demandOption: true,     
          })
          .check( (argv, options) => {
                console.log('yargs', argv)
          })
          .argv;

console.clear();

console.log( process.argv );
console.log( argv );

console.log('numero: yargs', argv.n );

// const numero = 9;

// crearArchivo( numero )
//      .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//      .catch( err => console.log(err));