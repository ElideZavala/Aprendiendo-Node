const argv = require('yargs')
     .option('n', {
          alias: 'numero',
          type: 'number',
          demandOption: true,
          describe: 'Es la base de la tabla de multiplicar' 
     })
     .option('m', {
          alias: 'maximo',
          type: 'number',
          demandOption: 10,
          describe: 'Es el numero maximo al que se multiplicara'
     })
     .option('l', {
          alias: 'listar',
          type: 'boolean',
          default: false,
          describe: 'muestra la tabla en consola'
     })
     .check( (argv, options) => {
               if( isNaN( argv.n )){
                    throw 'La base tiene que ser un número'
               }
               return true;  // regresar true si no hay un error despues de todas las verficaciones    
     })
     .argv;

module.exports = argv;
     