/*
Esercizio 1 – Trasformare array studenti con map

Tema: Array di oggetti + map
Obiettivo: Creare un nuovo array con informazioni trasformate partendo da un array di studenti.

Traccia:
    1. Hai un array di studenti, ciascuno con proprietà nome e voti (array di numeri).

    2. Usa map per creare un nuovo array di oggetti che contenga:

            * nome dello studente

            * media calcolata sui suoi voti

    3. Stampa il nuovo array in console.

Suggerimento:
Per calcolare la media puoi usare reduce dentro il map.
*/

const studenti = [
  { nome: "Luis", voti: [5, 8, 10] },
  { nome: "Marco", voti: [7, 8, 9] },
  { nome: "Luisa", voti: [4, 6, 7] },
  { nome: "Maria", voti: [5, 7, 3] },
];

// Alternativa 1
const new_studenti = studenti.map((studente) => {
  const media = studente.voti.reduce((acc, voto) => acc + voto, 0) / studente.voti.length;
  return { nome: studente.nome, media: Number(media.toFixed(2)) };
});

console.log(new_studenti);

// Alternativa 2
const studenti_2 = studenti.map(({ nome, voti }) => {
  const media_voti = voti.reduce((acc, voto) => acc + voto, 0) / voti.length;
  return { nome: nome, media: Number(media_voti.toFixed(2)) };
});
console.log(studenti_2);
