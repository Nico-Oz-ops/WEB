/*
Esercizio 5 – Gestione errori

Obiettivo: Lanciare e catturare errori con try/catch dentro async.

Traccia:

1. Modifica attendi(ms) per rifiutare la Promise se ms > 2000 (lancia un errore)

2. Crea una funzione async che chiama attendi(ms) con valori diversi

3. Usa try/catch per catturare eventuali errori e stampare "Errore: …"
*/

function attendi(ms) {
  return new Promise((resolve, reject) => {
    if (ms > 2000) {
      reject("Tempo di attesa infinito!");
    } else {
      setTimeout(() => resolve(`Attesa di tan solo ${ms}ms. Nice!`), ms);
    }
  });
}

async function main() {
  try {
    const risultato_1 = await attendi(1000);
    console.log("Successo:", risultato_1);

    const risultato_2 = await attendi(2000);
    console.log("Successo:", risultato_2);

    const risultato_3 = await attendi(2500);
    console.log("Successo:", risultato_3);

  } catch (error) {
    console.error("Errore:", error);
  }
}
main();