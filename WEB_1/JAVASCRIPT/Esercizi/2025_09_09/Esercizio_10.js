/*
Esercizio 10 – Totale prezzo dei prodotti costosi

Tema: Array di oggetti + map, filter, reduce
Obiettivo: Calcolare il totale dei prezzi dei prodotti sopra una certa soglia.

Input di esempio:

const prodotti = [
  { nome: "Shampoo", prezzo: 2.99 },
  { nome: "Latte", prezzo: 0.99 },
  { nome: "Petto di Pollo", prezzo: 8.49 },
  { nome: "Yogurt Greco", prezzo: 2.65 }
];
const soglia = 2.75;

Traccia:

    1. Filtra i prodotti con prezzo ≥ soglia.

    2. Eventualmente trasforma i prezzi con map (ad esempio arrotonda a 2 decimali).

    3. Calcola il totale dei prezzi con reduce.
*/

const prodotti = [
  { nome: "Shampoo", prezzo: 2.987 },
  { nome: "Latte", prezzo: 0.99 },
  { nome: "Petto di Pollo", prezzo: 8.478 },
  { nome: "Yogurt Greco", prezzo: 2.65 }
];

const soglia = 2.75;

// prodotti con prezzo >= soglia
const prodotti_maggiori_soglia = prodotti.filter(prodotto => prodotto.prezzo >= soglia);
console.log(prodotti_maggiori_soglia)

// prodotti con prezzi arrotondati
const prezzi_arrotondati = prodotti_maggiori_soglia.map(({nome, prezzo}) => {
    const prezzo_arrotondato = Number(prezzo.toFixed(2));
    return {nome: nome, prezzo: prezzo_arrotondato};
})
console.log(prezzi_arrotondati)

// prezzo totale
const prezzo_totale = prezzi_arrotondati.reduce((acc, prodotto) => acc + prodotto.prezzo, 0);
console.log("Prezzo totale:", prezzo_totale);

