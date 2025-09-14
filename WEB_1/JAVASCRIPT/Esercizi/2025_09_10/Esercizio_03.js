/*
Esercizio 3 – Sequenza di await

Obiettivo: Chiamare più volte la stessa Promise in sequenza e stampare i risultati uno alla volta.

Traccia:

1. Usa attendi(ms)

2. Crea una funzione async che:

    * chiama await attende(1000) tre volte consecutive
    * stampa un messaggio diverso ogni volta (es. "Primo", "Secondo", "Terzo")
*/

function attendi(ms) {
  return new Promise((resolve, reject) => {
    if (ms > 3000) {
      reject("Tempo di attesa troppo lungo!");
    } else {
      setTimeout(() => resolve(`Attesa di ${ms}ms completata`), ms);
    }
  });
}

async function main() {
  try {
    const primo = await attendi(1000);
    console.log("Primo:", primo);

    const secondo = await attendi(1000);
    console.log("Secondo:", secondo);

    const terzo = await attendi(1000);
    console.log("Terzo:", terzo);
  } catch (err) {
    console.error(err);
  }
}
main();