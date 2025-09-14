/*
Esercizio 8 – Doppio dei numeri pari

Tema: Array + filter + map
Obiettivo: Filtrare solo i numeri pari e moltiplicarli per 2.

Traccia:

    1. Crea un array di numeri, ad esempio [1, 2, 3, 4, 5, 6].

    2. Filtra solo i numeri pari.

    3. Moltiplica ogni numero pari per 2.

    4. Stampa il risultato.

    5. Suggerimento: usa filter e map.
*/
// Alternativa 1
const numeri = [1, 2, 3, 4, 5, 6];
const num_pari = numeri.filter(numero => numero % 2 === 0);
const doppio = num_pari.map(numero => numero * 2);

console.log(doppio);

// Alternativa 2
const numeri_2 = [1, 6, 8, 5, 9, 7, 4];
const num_pari_doppio = numeri_2.filter(numero => numero % 2 === 0).map(numero => numero * 2);

console.log(num_pari_doppio);