
const deadpool = {
     nombre: 'Elide',
     apellido: 'Zavala',
     poder: 'Sabiondo',
     edad: 120,
     getNombre() {
          return `${this.nombre} ${this.apellido} ${this.poder}`
     }
}

console.log( deadpool.getNombre() );

const { nombre, apellido, poder, edad = 0 } = deadpool;

console.log(nombre, apellido, poder, edad);
