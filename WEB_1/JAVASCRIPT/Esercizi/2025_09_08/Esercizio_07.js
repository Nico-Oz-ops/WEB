/*
Esercizio 7 – Controllo studente con async/await

1. Funzione controllaStudente(nome) che ritorna una Promise.

2. Risolve se lo studente è presente nell’array studenti, altrimenti rigetta.

3. Usa async/await.

4. Gestisci sia il caso in cui lo studente è presente che quello in cui non è presente.
*/

const studenti = ["Chiara", "Mattia", "Lisa", "Alessio", "Marius", "Natalia"];

function controlloStudente(nome) {
  return new Promise((resolve, reject) => {
    if (studenti.includes(nome)) {
      resolve(`"${nome}" è presente nella lista.`);
    } else {
      reject(`"${nome}" non è presente nella lista.`);
    }
  });
}

async function provaStudente() {
  try {
    const msg = await controlloStudente("Lisa");
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
}
provaStudente();

async function provaStudente_2() {
  try {
    const msg = await controlloStudente("Monalisa");
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
}
provaStudente_2();
