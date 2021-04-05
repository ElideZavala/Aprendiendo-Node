const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( numero = 5, listar = false, maximo = 10) => {
     colors.enable();

     try {
          
          let salida = '';
          let maximo; 
          
          for(i=0; i<= maximo; i++){
               salida += `${numero} ${'x'.yellow} ${i} ${'='.yellow} ${numero * i}\n`;

          }

          if(listar) {
               console.log('==================='.green);
               console.log('=== Tabla del'.green, colors.red( numero), '===');
               console.log('==================='.green);
               console.log(salida);
          }
          
          fs.writeFileSync(`tabla-${numero}-hasta-el-${maximo}.txt`, salida );
          
          const nombreArchivo = await `tabla-${numero}-hasta-el-${maximo}.txt`.zebra;
          
          return nombreArchivo;
     } catch (error) {
          throw error;
     }

     

     
}

module.exports = {
     crearArchivo,
};