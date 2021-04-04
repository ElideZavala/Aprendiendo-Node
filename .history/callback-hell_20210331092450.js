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

const getEmpleado = ( id ) => {

     const empleado = empleados.find( e => e.id === id); 

     if(empleado === 'undefined'){
          return empleado;
     } else {
          return `Empleado con ${ id } no existe`
     } 
     
      
}

console.log(getEmpleado( 8 ));