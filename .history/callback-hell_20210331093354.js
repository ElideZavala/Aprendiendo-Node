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
     },
     {
          id: 3,
          salario: '1500'
     }
]

const getEmpleado = ( id, callback) => {

     const empleado = empleados.find( e => e.id === id); 

     if(empleado){
          callback( empleado );
     } else {
          callback( `Empleado con ${ id } no existe` );
     } 
     
      
}

getEmpleado( 8, ( empleado ) => {

     console.log(empleado)
} );