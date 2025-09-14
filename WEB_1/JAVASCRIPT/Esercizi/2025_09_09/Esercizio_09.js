/*
Esercizio 9 – Media generale dei voti degli studenti promossi

Tema: Array di oggetti + map, filter, reduce
Obiettivo: Calcolare la media dei voti degli studenti promossi.
Input di esempio:

const studenti = [
  { nome: "Alice", voti: [8, 7, 9] },
  { nome: "Bruno", voti: [5, 6, 4] },
  { nome: "Carla", voti: [9, 9, 10] },
  { nome: "Davide", voti: [6, 6, 7] }
];

Traccia:

    1. Calcola la media di ciascun studente con map.

    2. Filtra solo gli studenti con media ≥ 6.

    3. Calcola la media generale dei promossi con reduce.
*/

const studenti = [
  { nome: "Alice", voti: [8, 7, 9] },
  { nome: "Bruno", voti: [5, 6, 4] },
  { nome: "Carla", voti: [9, 9, 10] },
  { nome: "Davide", voti: [6, 6, 7] },
];

// media di ciascun studente
const studenti_media = studenti.map(({ nome, voti }) => {
  const media_voti = voti.reduce((acc, voto) => acc + voto, 0) / voti.length;
  return { nome: nome, media: Number(media_voti.toFixed(2)) };
});


// studenti con media >= 6
const filtro_media = studenti_media.filter((studente) => studente.media >= 6);
console.log(filtro_media);


// media generale degli studenti promossi
const media_promossi =
  filtro_media
    .map((studente) => studente.media)
    .reduce((acc, media) => acc + media, 0) / filtro_media.length;
console.log("Media tra gli studenti promossi:", Number(media_promossi.toFixed(2)));
