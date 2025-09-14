/*
Esercizio 3 – Strutture di controllo (if/else):

Traccia:

    1. Crea una variabile voto = 7.

    2. Stampa:

        * "Promosso" se voto >= 6
        * "Bocciato" altrimenti.

    3. Aggiungi un else if per stampare "Eccellente" se voto >= 9.

Suggerimenti / indizi:

    * Usa la struttura if (condizione) { ... } else if (condizione) { ... } else { ... }.
    * L’ordine delle condizioni conta: controlla prima i voti più alti (>= 9) e poi i voti più bassi (>= 6).
    * Puoi usare console.log() dentro ogni blocco per stampare il messaggio.
*/

const voto = 7

if (voto >= 9) {
    console.log("Eccellente");
} else if (voto >= 6) {
    console.log("Promosso");
} else {
    console.log("Bocciato");
};