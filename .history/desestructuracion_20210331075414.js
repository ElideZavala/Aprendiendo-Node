
const deadpool = {
     nombre: 'Elide',
     apellido: 'Zavala',
     poder: 'Sabiondo',
     getNombre() {
          return `${this.nombre} ${this.apellido} ${this.poder}`
     }
}

console.log( deadpool.getNombre() );

const { nombre, apellido, poder } = deadpool;

console.log(poder);