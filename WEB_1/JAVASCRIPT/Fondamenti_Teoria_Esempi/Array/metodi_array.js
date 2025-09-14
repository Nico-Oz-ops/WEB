// Creazione di un array
const hobbies = ['sport', 'cucina', 'lettura'];

// Acceso a un elemento dell'array tramite indice
console.log(hobbies[0]) // 'sport'

// Alcuni metodi dell'array:

// A. Metodo "push": aggiunge un nuovo elemento all'array
hobbies.push('lavoro');
console.log(hobbies); // ['sport', 'cucina', 'lettura', 'lavoro']

// B. Metodo "findIndex": trova l'indice di un determinato valore. Accetta una funzione come input
// che viene eseguita per ogni elemento dell'array.
const index = hobbies.findIndex(elemento => elemento === 'sport');
console.log(index) // 0

// C1. Metodo "map": trasforma ogni elemento dell'array in un altro elemento. Accetta una funzione come input.
// Questa funzione viene eseguita per ogni elementi dell'array, e il valore restituito diventa il nuovo elemento dell'array.
const modifiedHobbies = hobbies.map(elemento => elemento + "!");
console.log(modifiedHobbies); //['sport!', 'cucina!', 'lettura!', 'lavoro!']

// C2. Utilizzo del metodo "map" per trasformare gli elementi in oggetti:
const objectHobbies = hobbies.map(elemento => ({testo: elemento}));
console.log(objectHobbies) //[{testo:'sport'}, {testo:'cucina'}, {testo:'lettura'}, {testo:'lavoro'}]
