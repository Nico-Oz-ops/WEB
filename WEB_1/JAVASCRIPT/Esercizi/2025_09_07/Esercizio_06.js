/*
Esercizio 2 – Copia e modifica oggetto

Traccia:

    1. Crea un oggetto persona = { nome: "Anna", eta: 30 }.

    2. Crea una copia dell’oggetto usando lo spread operator, aggiungendo una 
       nuova proprietà città: "Milano".

    3. Stampa sia l’oggetto originale sia la copia.
*/

const persona = { nome: "Anna", eta: 30};

const persona_copia = {...persona, citta: "Milano"};

console.log("Oggetto originale:", persona);
console.log("Oggetto copia:", persona_copia);