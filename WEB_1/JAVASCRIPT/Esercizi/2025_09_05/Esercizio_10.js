/*
Esercizio 10 – Somma dei numeri pari in un array

Tema: Array + filter + reduce

Obiettivo: Calcolare la somma di tutti i numeri pari presenti in un array.

Traccia:

    1. Crea un array di numeri, ad esempio: [3, 6, 2, 9, 4, 7].

    2. Usa il metodo filter per ottenere solo i numeri pari.

    3. Usa reduce per calcolare la somma dei numeri filtrati.

    4. Stampa il risultato.

Suggerimento:

    * Per verificare se un numero è pari usa numero % 2 === 0.
    * reduce((acc, val) => acc + val, 0) può servire per sommare tutti gli elementi di un array.
*/

const numeri = [3, 6, 2, 9, 4, 7];

const numeri_pari = numeri.filter(numero => numero % 2 == 0);
const somma_numeri_pari = numeri_pari.reduce((acc, numero) => acc + numero, 0);

console.log(numeri_pari);
console.log(somma_numeri_pari);

/* 
1. numeri_pari: è l’array su cui stiamo lavorando. Ad esempio [6, 2, 4].

2. reduce: è un metodo degli array in JavaScript che serve a "ridurre" tutti gli elementi dell’array 
a un unico valore, passando ogni elemento a una funzione.

3. Funzione (acc, numero) => acc + numero:

    * acc sta per accumulatore, cioè il risultato parziale che si aggiorna ad ogni iterazione.

    * numero è l’elemento corrente dell’array.

    * acc + numero indica che ad ogni passaggio aggiungiamo il numero corrente all’accumulatore.

    * 0 alla fine: è il valore iniziale dell’accumulatore (acc). Senza questo valore iniziale, 
reduce prenderebbe come acc il primo elemento dell’array e partirebbe dal secondo.
*/
