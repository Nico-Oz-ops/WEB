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

// Funzione che calcola il totale delle ore di tutti gli studenti e restituisce una Promise
function totaleOreStudenti(studenti) {
  return new Promise((resolve) => { // Creo una Promise; resolve serve a "ritornare" il risultato
    setTimeout(() => { // Simulo un ritardo di 1 secondo (come se fosse una chiamata asincrona)
      const ore_studenti = studenti.map((studente) => { // Trasformo ogni studente in un oggetto con nome e totaleOre
        return {
          nome: studente.nome, // Copio il nome dello studente
          totaleOre: studente.corsi.reduce((acc, corso) => acc + corso.ore, 0), // Sommo tutte le ore dei corsi dello studente
        };
      });
      resolve(ore_studenti); // Risolvo la Promise passando l'array ore_studenti
    }, 1000); // Il timer dura 1000ms = 1 secondo
  });
}

// Funzione async per usare await sulla Promise
async function provaOreTotale() {
  try {
    const ore_totale_corsi_studente = await totaleOreStudenti(studenti); 
    // await "sospende" l'esecuzione finché la Promise non si risolve
    // alla fine, ore_totale_corsi_studente contiene l'array restituito da resolve
    console.log(ore_totale_corsi_studente); // Stampo il risultato finale
  } catch (error) {
    console.log(error); // Se c'è un errore nella Promise, lo intercetto qui
  }
}

// Chiamata della funzione async
provaOreTotale(); // Avvia tutto il processo
