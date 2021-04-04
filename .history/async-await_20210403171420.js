const empleados = [
     {
          id: 1,
          nombre: 'Elide'
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
];

const getEmpleado = ( id ) => {
     return new Promise(( resolve, reject ) => {
          const empleado = empleados.find( e => e.id === id)?.nombre;

           ( empleado )  
           ? resolve( empleado ) 
           : reject( `No existe empleado con id ${ id }`)
     });
   
}

const getSalario = ( id ) => { 

     return new Promise(( resolve, reject ) => {
          const salario = salarios.find( s => s.id === id )?.salario;

           ( salario )
           ? resolve( salario )
           : reject( `No existe salario con id ${ id }`);
     });
}

// El async es transformar una funcion para que regrese una promesa
const getInfoUsuario = async( id ) => {
     
     const empleado = await getEmpleado(id);

     return empleado;
}

const id = 1;  

getInfoUsuario(id)
.then( msg => console.log(msg));

