
const deadpool = {
     nombre: 'Elide',
     apellido: 'Zavala',
     poder: 'Sabiondo',
     // edad: 120,
     getNombre() {
          return `${this.nombre} ${this.apellido} ${this.poder}`
     }
}

// console.log( deadpool.getNombre() );

// const { nombre, apellido, poder, edad = 0 } = deadpool;

// console.log(nombre, apellido, poder, edad);

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
     nombre = 'El inombrable';
     console.log(nombre, apellido, poder, edad);     
}

// imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];

console.log(h1, h2, h3 );