/*
Esercizio 5 – Filtrare prodotti costosi

Tema: Array di oggetti + filter
Obiettivo: Ottenere solo i prodotti il cui prezzo supera una certa soglia.

Traccia:

1. Hai un array di prodotti, ciascuno con nome e prezzo.

2. Usa filter per creare un nuovo array contenente solo i prodotti con prezzo > 2.50.

3. Stampa il risultato.
*/

const prodotti = [
  { nome: "Shampoo", prezzo: 2.99 },
  { nome: "Latte", prezzo: 0.99 },
  { nome: "Petto di Pollo", prezzo: 8.49 },
  { nome: "Avena", prezzo: 0.99 },
  { nome: "Yogurt Greco", prezzo: 2.65 },
];
const soglia = 2.5;

const new_prodotti = prodotti.filter((prodotto) => prodotto.prezzo >= soglia);
console.log(new_prodotti);
