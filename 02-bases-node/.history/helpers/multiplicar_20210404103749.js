const fs = require('fs');

const crearArchivo = async ( numero = 5 ) => {
     

     try {          
          console.log('===================');
          console.log('=== Tabla del', numero , '===');
          console.log('===================');
          
          let salida = '';
          
          for(i=0; i<=10; i++){
               salida += `${numero} x ${i} = ${numero * i}\n`;
          }
          
          console.log(salida);
          
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