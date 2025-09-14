/*
Esercizio 3 – Destrutturazione e rest

Traccia:

    1. Dato l’array [10, 20, 30, 40], usa la destrutturazione per estrarre i 
    primi due elementi in variabili a e b e il resto in un array resto.

    2. Dato l’oggetto { nome: "Luca", eta: 28, città: "Torino", lavoro: "developer" }, 
    usa la destrutturazione per estrarre nome e eta e mettere il resto in un oggetto altro.

    3. Stampa tutte le variabili estratte.
*/

// Array
const numeriArray = [10, 20, 30, 40];
const [a, b] = numeriArray;
console.log(a, b);

const [primo, secondo, ...resto] = numeriArray;
console.log(resto);

// Oggetto
const personaObj = { nome: "Luca", eta: 28, citta: "Torino", lavoro: "developer" };
const { nome: nomePersona, eta: etaPersona } = personaObj;
console.log(nomePersona, etaPersona);

const { nome: np, eta: ep, ...altro } = personaObj;
console.log(altro);
