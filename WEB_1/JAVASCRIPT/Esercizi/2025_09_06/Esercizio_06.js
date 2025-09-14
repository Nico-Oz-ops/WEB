/*
Esercizio 6 – Media voti degli studenti

Tema: Array di oggetti + funzioni + map + reduce
Obiettivo: Calcolare la media dei voti di ogni studente e stampare chi ha superato 6.

Traccia:

    1. Crea un array studenti con oggetti:
        { nome: "Ana", voti: [7, 5, 8] }
        { nome: "Luis", voti: [6, 4, 5] }
        { nome: "Maria", voti: [9, 8, 10] }

    2. Crea una funzione che calcoli la media di un array di numeri.

    3. Usa map o forEach per aggiungere a ogni studente la proprietà media.

    4. Stampa solo gli studenti con media >= 6.
*/

const studenti = [
  { nome: "Ana", voti: [7, 5, 8] },
  { nome: "Luis", voti: [6, 4, 5] },
  { nome: "Maria", voti: [9, 8, 10] },
];
console.log(studenti)

// funzione che calcola la media dei voti
const media_voti = (voti) => {
  const somma = voti.reduce((acc, voto) => acc + voto, 0);
  return somma / voti.length;
};

// aggiungere la proprietà media a ogni studente
studenti.forEach(studente => {
    studente.media = media_voti(studente.voti).toFixed(2)
});
console.log(studenti)

// stampare solo gli studenti con media >= 6
studenti.filter(studente => studente.media >= 6).forEach(studente => {console.log(studente)});


