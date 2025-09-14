/*
Esercizio 4 – Array e oggetti

Traccia:

    1. Crea un array numeri = [1, 2, 3].
    2. Assegna numeri2 = numeri.
    3. Aggiungi 4 a numeri2.
    4. Stampa numeri e numeri2.
    5. Poi, crea una copia indipendente di numeri usando lo spread operator e aggiungi 5 alla copia.
    6. Stampa sia l’array originale sia la copia.

Domanda: qual è la differenza tra l’assegnazione normale e quella con spread operator?
*/

const numeri = [1, 2, 3];
const numeri2 = numeri;
numeri2.push(4);

console.log(numeri);
console.log(numeri2);

// sia numeri che numeri2 mostrano [1,2,3,4] perché gli array sono assegnati per riferimento

numeri3 = [...numeri];
numeri3.push(5);

console.log(numeri);
console.log(numeri3);

// lo spread operator crea una copia indipendente (numeri3), quindi modificare la copia non cambia l’array originale
