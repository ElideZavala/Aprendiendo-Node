const argv = require('yargs')
     .option('n', {
               alias: 'numero',
               type: 'number',
               demandOption: true,     
     })
     .option('l', {
          alias: 'listar',
          type: 'boolean',
          demandOption: true,
          default: false
     })
     .check( (argv, options) => {
               if( isNaN( argv.n )){
                    throw 'La base tiene que ser un número'
               }
               return true;  // regresar true si no hay un error despues de todas las verficaciones    
     })
     .argv;