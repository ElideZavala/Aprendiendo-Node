const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
// option('l')
// Listar
// boolean
// default: false 

console.clear();

crearArchivo( argv.n, argv.l)
     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
     .catch( err => console.log(err));