function caricaDatiUtente(id) {                               // funzione che simula il caricamento di un utente dal "server"
  return new Promise((resolve, reject) => {                   // ritorna una Promise (asincrona)
    setTimeout(() => {                                        // simulo un ritardo di 1 secondo
      if (id === 123) {                                       // se l’ID è 123, l’utente esiste
        resolve({ id: 123, nome: "Mario Rossi" });            // la Promise viene risolta con un oggetto utente
      } else {                                                // altrimenti...
        reject(new Error("Utente non trovato"));              // ...rifiuto la Promise con un errore
      }
    }, 1000);
  });
}

function caricaOrdiniUtente(idUtente) {                       // funzione che simula il caricamento degli ordini di un utente
  return new Promise((resolve) => {                           // ritorna sempre una Promise
    setTimeout(() => {                                        // simulo un ritardo di 1 secondo
      if (idUtente === 123) {                                 // se l'utente esiste
        const haOrdini = Math.random() > 0.5;                 // decido casualmente se ha ordini o no
        if (haOrdini) {                                       // se ha ordini...
          resolve([                                           // risolvo con una lista di ordini
            { id: 1, prodotto: "Laptop" },
            { id: 2, prodotto: "Smartphone" }
          ]);
        } else {                                              // se NON ha ordini...
          resolve([]);                                        // risolvo comunque, ma con un array vuoto
        }
      } else {
        resolve([]);                                          // caso teorico: utente non trovato (ma gestito già sopra)
      }
    }, 1000);
  });
}

function ottieniDatiUtente() {                                // funzione principale che usa le due funzioni sopra
  caricaDatiUtente(123)                                       // chiamo la funzione che carica l’utente (ritorna una Promise)
    .then(utente => {                                         // quando la Promise di caricaDatiUtente si risolve...
      console.log("Utente:", utente);                         // stampo i dati dell’utente
      return caricaOrdiniUtente(utente.id);                   // ritorno la Promise che carica i suoi ordini
    })
    .then(ordini => {                                         // quando la Promise di caricaOrdiniUtente si risolve...
      if (ordini.length === 0) {                              // se l’array è vuoto
        console.log("Nessun ordine trovato per questo utente.");
      } else {                                                // altrimenti...
        console.log("Ordini:", ordini);                       // stampo la lista di ordini
      }
    })
    .catch(errore => {                                        // se una delle due Promise fallisce (reject)...
      console.log("Errore:", errore.message);                 // stampo il messaggio di errore
    });
}

ottieniDatiUtente();                                          // invoco la funzione per eseguire tutto il flusso



/*------------------------------------------------------*/

// Con async/away

function caricaDatiUtente(id) {                               // funzione che simula il caricamento di un utente dal "server"
  return new Promise((resolve, reject) => {                   // ritorna una Promise (asincrona)
    setTimeout(() => {                                        // simulo un ritardo di 1 secondo
      if (id === 123) {                                       // se l’ID è 123, l’utente esiste
        resolve({ id: 123, nome: "Mario Rossi" });            // risolvo la Promise con un oggetto utente
      } else {                                                // altrimenti...
        reject(new Error("Utente non trovato"));              // rifiuto la Promise con un errore
      }
    }, 1000);
  });
}

function caricaOrdiniUtente(idUtente) {                       // funzione che simula il caricamento degli ordini
  return new Promise((resolve) => {                           // ritorna sempre una Promise
    setTimeout(() => {                                        // simulo un ritardo di 1 secondo
      if (idUtente === 123) {                                 // se l'utente è valido
        const haOrdini = Math.random() > 0.5;                 // decido casualmente se ha ordini
        if (haOrdini) {                                       // se sì...
          resolve([                                           // risolvo con una lista di ordini
            { id: 1, prodotto: "Laptop" },
            { id: 2, prodotto: "Smartphone" }
          ]);
        } else {                                              // se no...
          resolve([]);                                        // risolvo con un array vuoto
        }
      } else {
        resolve([]);                                          // caso teorico: nessun ordine (utente non trovato già gestito sopra)
      }
    }, 1000);
  });
}

async function ottieniDatiUtente() {                          // funzione principale dichiarata async (così possiamo usare await)
  try {                                                       // inizio blocco try: qui mettiamo codice che può fallire
    const utente = await caricaDatiUtente(123);               // attendo il risultato della Promise di caricaDatiUtente
    console.log("Utente:", utente);                           // stampo l’utente se è stato trovato

    const ordini = await caricaOrdiniUtente(utente.id);       // attendo la Promise di caricaOrdiniUtente
    if (ordini.length === 0) {                                // controllo se l'array è vuoto
      console.log("Nessun ordine trovato per questo utente."); 
    } else {
      console.log("Ordini:", ordini);                         // stampo gli ordini se ci sono
    }
  } catch (errore) {                                          // se una delle due Promise viene rifiutata (reject)...
    console.log("Errore:", errore.message);                   // stampo il messaggio dell’errore
  }
}

ottieniDatiUtente();                                          // invoco la funzione asincrona per avviare il flusso

/*
Le funzioni caricaDatiUtente e caricaOrdiniUtente restano esattamente uguali in entrambe le versioni:

- continuano a restituire una Promise, con resolve/reject o array vuoto per ordini.

Quello che cambia è solo la funzione principale ottieniDatiUtente:

    - con Promise chaining: usi .then(...).then(...).catch(...)
    - con async/await: usi await e try/catch -> il codice diventa più lineare e leggibile, 
      ma il comportamento finale è lo stesso.

Con async/await:

    - non hai il chaining di .then(...), il codice sembra sincrono e più leggibile.
    - gli errori si gestiscono direttamente con try/catch, che è più chiaro di avere .catch(...) in fondo.
    - il flusso è lo stesso della versione con Promise, solo che è scritto in uno stile diverso.
*/