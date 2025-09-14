/*
Esercizio 6 – Mini progetto JS

Obiettivo: Simulare operazioni asincrone su array di oggetti (es. studenti o prodotti) 
usando Promise + async/await.

Traccia:

1. Parti da un array di oggetti con nome e voti

2. Crea una funzione ritarda(ms) come prima

3. Crea una funzione async che:

    * per ogni studente aspetta 1 secondo

    * calcola la media dei voti

    * stampa "Lo studente X ha media Y
*/

const studenti = [
  { nome: "Alice", voti: [8, 7, 9] },
  { nome: "Bruno", voti: [5, 6, 4] },
  { nome: "Carla", voti: [9, 9, 10] },
  { nome: "Davide", voti: [6, 6, 7] },
];

function ritarda(ms) {
  return new Promise((resolve, reject) => {
    if (ms > 2000) {
      reject("Tempo di attesa troppo lungo!");
    } else {
      setTimeout(() => resolve(`Attesa di ${ms}ms completata`), ms);
    }
  });
}

async function main() {
  try {
    const studente_attesa = await ritarda(1000);
    const media_voti = studenti.map((studente) => {
      return {
        ...studente,
        media: Number(
          (
            studente.voti.reduce((acc, voto) => acc + voto, 0) /
            studente.voti.length
          ).toFixed(2)
        ),
      };
    });
    media_voti.forEach((studente) => {
      console.log(
        `Lo studente ${studente.nome} ha media ${studente.media} -`,
        studente_attesa
      );
    });
  } catch (error) {
    console.log("Errore", error);
  }
}
main();

