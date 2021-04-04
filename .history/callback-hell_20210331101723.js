const empleados = [
     {
          id: 1,
          nombre: 'Fernado'
     },
     {
          id: 2,
          nombre: 'Linda'
     },
     {
          id: 3,
          nombre: 'Karen'
     }
]

const salarios = [
     {
          id: 1,
          salario: '1000'
     },
     {
          id: 2,
          salario: '1500'
     }
]

const getEmpleado = ( id, callback) => {

     const empleado = empleados.find( e => e.id === id)?.salario 

     if(empleado){
          callback( null, empleado );
     } else {
          callback( `Empleado con ${ id } no existe` );
     } 
     
      
}

const getSalario = ( id, callback ) =>{
     
     const salario = salarios.find( s => s.id === id );

     if (salario) {
          callback(null, salario);
     } else {
          callback(`No existe el salario del empleado`);
     }

}


const id = 2

getEmpleado( id, ( err, empleado ) => {
     
     if ( err ) {
          console.log('ERROR!');
          return console.log(err);
     }
     getSalario( id, (err, salario) => {

          if( err ){
               console.log('Tenemos un error Huston')
               return console.log(err);
          }

          console.log(salario);
     }) 
} );

