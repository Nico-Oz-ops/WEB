/*
Esercizio 13 – Prodotti disponibili in sconto

Tema: Array di oggetti + filter + map
Obiettivo: Ottenere i prodotti disponibili (inStock: true), applicare uno 
sconto del 20% al prezzo e restituire il nuovo array.

Traccia:

    1. Parti da un array di prodotti, ciascuno con nome, prezzo e inStock.

    2. Filtra solo i prodotti con inStock: true.

    3. Applica uno sconto del 20% al prezzo di ciascun prodotto filtrato.

    4. Stampa il nuovo array di prodotti scontati.

Suggerimento: Combina filter e map in sequenza.
*/
// Alternativa 1 - metodo diretto, uso di filter + map
const prodotti = [
  { nome: "Shampoo", prezzo: 2.99, inStock: true },
  { nome: "Latte", prezzo: 0.99, inStock: true },
  { nome: "Petto di Pollo", prezzo: 8.49, inStock: false },
  { nome: "Avena", prezzo: 0.99, inStock: true },
  { nome: "Yogurt Greco", prezzo: 2.65, inStock: false },
];

// prodotti inStock = true e sconto del 20%
const prodotti_scontati = prodotti
  .filter((prodotto) => prodotto.inStock === true)
  .map((prodotto) => {
    const sconto = prodotto.prezzo - (prodotto.prezzo * 20) / 100;
    return { nome: prodotto.nome, prezzo: Number(sconto.toFixed(2)) };
  });
console.log(prodotti_scontati);

// Alternativa 2 - metodo asincrono, usando anche filter e map

function applicaSconto(prodotti) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sconto_prodotto = prodotti
        .filter((prodotto) => prodotto.inStock === true)
        .map((prodotto) => ({
          nome: prodotto.nome,
          prezzo: Number(
            (prodotto.prezzo - prodotto.prezzo * (20 / 100)).toFixed(2)
          ),
        }));
      resolve(sconto_prodotto);
    }, 1000);
  });
}

async function provaProdottoScontato() {
  try {
    const prodottiScontati = await applicaSconto(prodotti);
    console.log("Prodotti scontati:", prodottiScontati);
  } catch (error) {
    console.log(error);
  }
}

provaProdottoScontato();