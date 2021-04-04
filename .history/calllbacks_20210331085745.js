const getUsuarioById = ( id, callback) => {

     const usuario = {
          id,
          nombre: 'Fernando'
     }

     setTimeout(() => {
        console.log(usuario)  
     }, 1500);
}

getUsuarioById( 10, () => {
     console.log('hola mundo');
} );
