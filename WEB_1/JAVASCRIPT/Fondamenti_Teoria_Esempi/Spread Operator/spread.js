// L'operatore di spread è un potente strumento per estrarre elementi da array 
// e proprietà da oggetti, permettendoci di unirli in nuovi array o oggetti.

// Esempio 1: utilizzo dell'operatore spread con array
const hobby1 = ['Nuoto', 'Ciclismo'];
const hobby2 = ['Lettura'];

// unione degli array SENZA l'operatore spread:
const unioneSenzaSpread = [hobby1,hobby2];
console.log(unioneSenzaSpread); //[[ 'Nuoto', 'Ciclismo' ], [ 'Lettura' ]]

// unione degli array CON l'operatore spread:
const unioneConSpread = [...hobby1,...hobby2];
console.log(unioneConSpread); //['Nuoto', 'Ciclismo', 'Lettura']

// Esempio 2: utilizzo dell'operatore spread con oggetti
const utente = { nome: 'Mario', eta: 30 };
const utenteEsteso = { isAdmin: true };

// unione degli oggetti con l'operatore spread:
const utenteFinale = {...utente,...utenteEsteso};
console.log(utenteFinale)