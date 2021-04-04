const fs = require('fs');

const crearArchivo = async ( numero = 5 ) => {
          
     console.log('===================');
     console.log('=== Tabla del', numero , '===');
     console.log('===================');
     
     let salida = '';
     
     for(i=0; i<=10; i++){
          salida += `${numero} x ${i} = ${numero * i}\n`;
     }

     try {
          console.log(salida);
          await fs.writeFileSync(`tabla-${numero}.txt`, salida );

          const nombreArchivo =  `tabla-${numero}.txt creado`;
     } catch (error) {
          throw error;
     }

     

     
}

module.exports = {
     crearArchivo,
};