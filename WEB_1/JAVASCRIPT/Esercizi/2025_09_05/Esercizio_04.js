/*
Esercizio 4 – Array e cicli.

Traccia:

    1. Crea un array di numeri: [3, 7, 2, 9, 4].

    2. Usa un ciclo for per stampare ogni numero moltiplicato per 2.

    3. Usa un ciclo for...of per stampare ogni numero al quadrato.

    4. Usa un ciclo forEach per stampare ogni numero con il messaggio: "Numero: X".

Suggerimenti / indizi:

    * for (let i = 0; i < array.length; i++) → ciclo classico.
    * for (let num of array) → ciclo for...of.
    * array.forEach(num => console.log(num)) → ciclo con funzione freccia.
*/

let numeri = [3, 7, 2, 9, 4]

for (let i = 0; i < numeri.length; i++) {
    console.log(numeri[i] * 2)
};

for (let numero of numeri) {
    console.log(numero ** 2)
};

numeri.forEach(numero => {
    console.log(`"Numero: ${numero}"`)
});