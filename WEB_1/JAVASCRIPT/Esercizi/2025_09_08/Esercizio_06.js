/*
Esercizio 6 – Somma asincrona con async/await

1. Riscrivi l’esercizio “somma asincrona” usando async/await.

2. Stampa il risultato della somma.
*/

function sommaAsincrona(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000);
  });
}

async function provaSomma() {
  try {
    const somma_elementi = await sommaAsincrona(9, 8);
    console.log(somma_elementi);
  } catch (error) {
    console.log(error);
  }
}
provaSomma();