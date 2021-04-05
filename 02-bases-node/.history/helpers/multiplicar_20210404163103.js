const fs = require('fs');

const crearArchivo = async ( numero = 5, listar = false ) => {
     

     try {
          
          let salida = '';
          
          for(i=0; i<=10; i++){
               salida += `${numero} x ${i} = ${numero * i}\n`;

          }

          if(listar) {
               console.log('===================');
               console.log('=== Tabla del', numero , '===');
               console.log('===================');
               console.log(salida);
          }
          
          
          
          
          fs.writeFileSync(`tabla-${numero}.txt`, salida );
          
          const nombreArchivo = await `tabla-${numero}.txt`;
          
          return nombreArchivo;
     } catch (error) {
          throw error;
     }

     

     
}

module.exports = {
     crearArchivo,
};