const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const [ , , arg3 = 'numero=5' ] = process.argv;
const [ , numero ] = arg3.split('=') //Lo sepramos mediante =
console.log( numero );


// const numero = 9;

// crearArchivo( numero )
//      .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//      .catch( err => console.log(err));