/*
Esercizio 2 – Trasformare array di prodotti con map

Tema: Array di oggetti + map
Obiettivo: Creare un nuovo array con informazioni calcolate sui prezzi.

Traccia:

    1. Hai un array di prodotti, ciascuno con nome e prezzo.

    2. Usa map per creare un nuovo array che aggiunga l’IVA al prezzo (22%).

    3. Ogni oggetto del nuovo array deve contenere:

        * nome

        * prezzoNetto (quello originale)

        * prezzoIvato (con IVA inclusa, arrotondato a due decimali).

Suggerimento:
Puoi usare .toFixed(2) o Math.round(num * 100) / 100.
*/

const prodotti = [
  { nome: "Shampoo", prezzo: 2.99 },
  { nome: "Latte", prezzo: 0.99 },
  { nome: "Petto di Pollo", prezzo: 8.49 },
  { nome: "Avena", prezzo: 0.99 },
  { nome: "Yogurt Greco", prezzo: 2.65 },
];

const new_prodotti = prodotti.map(({nome, prezzo}) => {
    const prezzo_con_iva = prezzo + (prezzo * 22/100);
    return { nome: nome, prezzoNetto: Number(prezzo.toFixed(2)), prezzoIvato: Number(prezzo_con_iva.toFixed(2))};
});
console.log(new_prodotti);