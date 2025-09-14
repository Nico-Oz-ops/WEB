/*
Esercizio 14 – Somma ore corsi

Tema: Array di oggetti annidati + reduce
Obiettivo: Calcolare il totale delle ore di tutti i corsi di uno studente.

Traccia:

    1. Parti da un array di studenti, ciascuno con nome e una lista di corsi.

    2. Ogni corso contiene un nome e il numero di ore.

    3. Scrivi una funzione che dato uno studente restituisce il totale delle ore di tutti i suoi corsi.

    4. Stampa il totale per almeno uno studente di esempio.

Suggerimento: Usa reduce per sommare le ore all’interno dell’array dei corsi.
*/

const studenti = [
  {
    nome: "Nico",
    corsi: [
      { nomeCorso: "Matematica", ore: 10 },
      { nomeCorso: "Informatica", ore: 12 },
      { nomeCorso: "Fisica", ore: 8 },
    ],
  },
  {
    nome: "Aurelio",
    corsi: [
      { nomeCorso: "Matematica", ore: 9 },
      { nomeCorso: "Chimica", ore: 11 },
      { nomeCorso: "Biologia", ore: 7 },
    ],
  },
  {
    nome: "Silvana",
    corsi: [
      { nomeCorso: "Informatica", ore: 15 },
      { nomeCorso: "Fisica", ore: 10 },
    ],
  },
];

// Se volessi stampare il totale delle ore di un solo studente:
function oreTotale(studente) {
  const ore_totale_corsi = studente.corsi.reduce(
    (acc, corso) => acc + corso.ore,
    0
  );
  return ore_totale_corsi;
}

const oreTotaleNico = oreTotale(studenti[0]); // usando l'indice
console.log("Ore totale di Nico:", oreTotaleNico);

const trovaNico = studenti.find((studente) => studente.nome === "Nico"); // controllando che il nome esiste nell'array
const totaleOreNico = oreTotale(trovaNico);
console.log("Horas de Nico:", totaleOreNico);

// Se volessi stampare il totale delle ore di ogni studente:
function totaleOreStudenti(studenti) {
  return studenti.map((studente) => {
    return {
      nome: studente.nome,
      totaleOre: studente.corsi.reduce((acc, corso) => acc + corso.ore, 0),
    };
  });
}

const totali = totaleOreStudenti(studenti);
console.log(totali);



// **Versione asincrona**

// funzione asincrona che calcola il totale delle ore
function totaleOreStudenti(studenti) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ore_studenti = studenti.map((studente) => {
        return {
          nome: studente.nome,
          totaleOre: studente.corsi.reduce((acc, corso) => acc + corso.ore, 0),
        };
      });
      resolve(ore_studenti);
    }, 1000);
  });
}

async function provaOreTotale() {
  try {
    const ore_totale_corsi_studente = await totaleOreStudenti(studenti);
    console.log(ore_totale_corsi_studente);
  } catch (error) {
    console.log(error);
  }
}
provaOreTotale();
