/*
Esercizio 15 – Converti numeri in stringhe

Tema: Array + map
Obiettivo: Trasformare un array di numeri in un array di stringhe.

Traccia:

1. Crea un array di numeri, ad esempio [1, 2, 3, 4, 5].

2. Usa map per trasformare ogni numero in stringa.

3. Stampa il nuovo array.
*/

// Alternativa 1 - uso di map e toString
const numeri = [1, 2, 3, 4, 5];
const num_to_string = numeri.map(numero => numero.toString());
console.log(num_to_string);

// Alternativa 2 - uso di map e template literals
const num_to_str = numeri.map(numero => `${numero}`);
console.log(num_to_str);

// Alternativa 3 - uso di map e String()
const numero_stringa = numeri.map(numero => String(numero));
console.log(numero_stringa);