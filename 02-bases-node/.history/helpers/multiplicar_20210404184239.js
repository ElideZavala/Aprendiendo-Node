const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( numero = 5, listar = false, maximo = 10) => {
     colors.enable();

     try {
          
          let salida, consola = '';
          
          for( let i = 0; i <= maximo; i++){
               salida += `${numero} x ${i} = ${numero * i}\n`;
               consola += `${numero} ${'x'.yellow} ${i} ${'='.yellow} ${numero * i}\n`;


          }

          if(listar) {
               console.log('==================='.green);
               console.log('=== Tabla del'.green, colors.red( numero), '===');
               console.log('==================='.green);
               console.log(consola);
          }
          
          fs.writeFileSync(`tabla-${numero}-hasta-el-${maximo}.txt`, salida );
          
          return `tabla-${numero}-hasta-el-${maximo}.txt`.zebra;
          
     } catch (error) {
          throw error;
     }

     

     
}

module.exports = {
     crearArchivo,
};