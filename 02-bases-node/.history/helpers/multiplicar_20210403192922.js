const crearArchivo = ( numero = 5 ) => {
          
     console.log('===================');
     console.log('=== Tabla del 5 ===');
     console.log('===================');
     
     let salida = '';

     for(i=0; i<=10; i++){
          salida += `${numero} x ${i} = ${numero * i}\n`;
     }

     console.log(salida);

     fs.writeFileSync(`tabla-${numero}.txt`, salida );

     console.log(`tabla-${numero}.txt`);
}