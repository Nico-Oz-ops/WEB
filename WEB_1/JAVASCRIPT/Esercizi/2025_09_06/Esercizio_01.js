/*
Esercizio 1 – Doppio dei numeri pari

Tema: Array + map + filter
Obiettivo: Dato un array di numeri, creare un nuovo array con il doppio dei numeri pari.

Traccia:

    1. Crea un array di numeri, ad esempio [1, 2, 3, 4, 5, 6].

    2. Usa filter per selezionare solo i numeri pari.

    3. Usa map per moltiplicare per 2 ciascun numero selezionato.

    4. Stampa il risultato.

Suggerimento: puoi concatenare filter e map in un’unica riga.
*/

// Alternativa 1
const numeri = [1, 2, 3, 4, 5, 6];
const numeri_pari = numeri.filter(numero => numero % 2 === 0).map(numero => numero * 2);
console.log(numeri_pari);

// Alternativa 2
const num_par = numeri.filter(numero => numero % 2 === 0);
const pari_doppio = num_par.map(numero => numero * 2);
console.log(pari_doppio) 