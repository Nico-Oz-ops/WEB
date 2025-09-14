/*
Esercizio 3 – Aggiungere proprietà a corsi con map

Tema: Array di oggetti + map
Obiettivo: Estendere un array di corsi con una nuova proprietà.

Traccia:

    1. Hai un array di corsi, ciascuno con titolo e ore.

    2. Usa map per creare un nuovo array di oggetti che includa anche:

        * livello: se le ore ≥ 30 allora "avanzato", altrimenti "base".

    3. Stampa il nuovo array.

Suggerimento:
Puoi usare l’operatore ternario dentro map.
*/

const corsi = [
  { titolo: "JavaScript Base", ore: 20 },
  { titolo: "React Avanzato", ore: 40 },
  { titolo: "HTML e CSS", ore: 15 },
  { titolo: "Node.js", ore: 35 },
  { titolo: "Python per principianti", ore: 25 }
];

const new_corsi = corsi.map(({titolo, ore}) => {
    const livello_ore = ore >= 30 ? "Avanzato" : "Base";
    return {titolo: titolo, ore: ore, livello: livello_ore};
});
console.log(new_corsi);