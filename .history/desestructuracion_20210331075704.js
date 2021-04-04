
const deadpool = {
     nombre: 'Elide',
     apellido: 'Zavala',
     poder: 'Sabiondo',
     getNombre() {
          return `${this.nombre} ${this.apellido} ${this.poder}`
     }
}

console.log( deadpool.getNombre() );

const { nombre, apellido, poder, edad = 29 } = deadpool;

console.log(nombre, apellido, poder, edad);
