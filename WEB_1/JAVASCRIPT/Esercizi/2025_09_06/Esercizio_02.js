/*
Esercizio 2 – Somma dei numeri maggiori di 10

Tema: Array + filter + reduce
Obiettivo: Dato un array di numeri, sommare solo quelli maggiori di 10.

    1. Crea un array di numeri, ad esempio [5, 12, 8, 20, 3].

    2. Usa filter per selezionare solo i numeri > 10.

    3. Usa reduce per sommare questi numeri.

Stampa il risultato.
*/

// Alternativa 1 
const numeri = [5, 12, 8, 20, 3];
const num_maggiori = numeri.filter(numero => numero > 10);
const somma = num_maggiori.reduce((acc, numero) => acc + numero, 0);

console.log(`Somma dei numeri maggiori di 10: ${somma}`);

// Alternativa 2
const somma_num_maggiori = numeri.filter(numero => numero > 10).reduce((acc, num) => acc + num, 0);
console.log(`Somma: ${somma_num_maggiori}`)