/*
Esercizio 14 – Filtra parole lunghe

Tema: Array di stringhe + filter
Obiettivo: Stampare solo le parole con più di 4 lettere.

Traccia:

1. Crea un array di parole, ad esempio ["gatto", "cane", "elefante", "mucca"].

2. Usa filter per ottenere solo le parole con lunghezza maggiore di 4.

3. Stampa il risultato.
*/

// Alternativa 1 - uso di filter
const parole = ["gatto", "cane", "elefante", "mucca"];
const len_parole = parole.filter(parola => parola.length > 4);
console.log(len_parole)

// Alternativa 2 - uso di forEach
parole.forEach(parola => {
    if (parola.length > 4)  {
        console.log(`Le parole con lunghezza maggiore di 4 sono: ${parola}`)
    }
});