/*
Esercizio 15 – Report studenti top

Tema: Array di oggetti + filter + forEach
Obiettivo: Creare un report che evidenzia gli studenti migliori.

Traccia:

    1. Parti da un array di studenti con nome e voti.

    2. Calcola la media dei voti di ciascuno.

    3. Filtra quelli con media maggiore o uguale a 8.

    4. Aggiungi a questi studenti una proprietà bonus: true.

    5. Stampa l’array aggiornato.

Suggerimento: Dopo aver filtrato gli studenti top, puoi usare forEach per aggiungere la proprietà.
*/

const studenti = [
  { nome: "Nico", voti: [7, 9, 10, 8] },
  { nome: "Aurelio", voti: [5, 8, 4, 7] },
  { nome: "Silvana", voti: [10, 9, 8, 9] },
  { nome: "Lorena", voti: [4, 10, 8, 6] },
];

// Modo 1
// calcolo media dei voti degli studenti
function media_studente(voti) {
  const somma_voti = voti.reduce((acc, voto) => acc + voto, 0);
  return Number((somma_voti / voti.length).toFixed(2));
}

console.log(media_studente(studenti[0]["voti"])); // per accedere ai voti del primo studente dell'array usando ["voti"]
console.log(media_studente(studenti[0].voti)); // per accedere ai voti del primo studente dell'array usando notazione punto

// filtro studenti con media >= 8 e aggiungo bonus: true
const studenti_agg = studenti.map(studente => {
    const media = media_studente(studente.voti); // creo questa const per evitare passare media_studente(studente.voti) ogni volta
    return {
        nome: studente.nome,
        media: media,
        bonus: media >= 8
    };
});

console.log(studenti_agg);

// Modo 2
// filtro studenti con media >= 8
const studenti_top = studenti.filter(studente => media_studente(studente.voti) >= 8);
console.log(studenti_top)

// aggiungo a studenti_top la proprietà bonus: true
const studenti_top_bonus = studenti_top.map(studente => {
    return {nome: studente.nome, voti: studente.voti, bonus: true};
});
console.log(studenti_top_bonus)
