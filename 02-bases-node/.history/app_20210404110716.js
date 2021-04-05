const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const [ , , arg3 = 'numero=5' ] = process.argv;
const [ , numero ] = arg3.split('=') //Lo separamos mediante = y optenemos el segundo valor 

// const numero = 9;

crearArchivo( numero )
     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
     .catch( err => console.log(err));