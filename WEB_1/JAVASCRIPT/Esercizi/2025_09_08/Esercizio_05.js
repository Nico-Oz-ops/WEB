/*
Esercizio 5 – Attesa semplice con async/await

1. Riscrivi l’esercizio “attesa” usando async/await.

2. Gestisci eventuali errori con try/catch.

3. Prova sia con un valore positivo che negativo per ms.
*/

function attesa(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject("Valore negativo!");
    } else {
      setTimeout(() => resolve("Tempo scaduto!!"), ms);
    }
  });
}

async function provaAttesa() {
  try {
    const msg = await attesa(2000);
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
}

provaAttesa();


async function provaAttesa_2() {
  try {
    const msg = await attesa(-3000);
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
}

provaAttesa_2();