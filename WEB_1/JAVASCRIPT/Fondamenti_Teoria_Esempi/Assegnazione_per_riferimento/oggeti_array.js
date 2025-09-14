/*In JavaScript, gli oggetti e gli array sono assegnati per riferimento. Questo significa che quando
assegni un oggetto o un array a una nuova variabile, entrambe le variabili puntano allo stesso
oggetto o array in memoria. Qualsiasi modifica apportata all'oggetto o all'array attraverso una
delle variabili si rifletterà anche sull'altra*/

// Esempio con oggetti
const persona1 = {nome: "Mario", eta: 30};
const persona2 = persona1;
console.log(persona1);
console.log(persona2);

persona2.nome = "Juan";
persona2.eta = 24;
console.log(persona1);
console.log(persona2);

// Esempio con array
const array1 = [1, 2, 3];
const array2 = array1;
console.log(array1);
console.log(array2);

array2.push(4);
console.log(array1);
console.log(array2);

// Shallow copy: evita l'assegnazione per riferimento creando una copia indipendente dell'oggetto o dell'array
// Metodo "Object.assing()" per gli oggetti o lo spread operator (`...`) per gli array

const persona3 = Object.assign({}, persona1); // copia dell'oggetto "persona1"

const array3 = [...array1] // copia dell'array "array1"