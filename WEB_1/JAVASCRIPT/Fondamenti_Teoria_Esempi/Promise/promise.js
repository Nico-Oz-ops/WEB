// Introduzione alle promise
/* Le Promise sono state introdotte per risolvere i problemi delle callback, rendendo il codice più leggibile e gestibile.

Una Promise rappresenta un'operazione che si completerà in futuro e può avere tre stati:
A. Pending (in attesa): L'operazione non è ancora completata.
B. Fulfilled (risolta): L'operazione è completata con successo.
C. Rejected (rifiutata): L'operazione è fallita.
*/

// Esempio 1 - creo una nuova promise (variabile)
const miaPromise = new Promise(function (resolve, reject) {
  // la funzione passata è l'executor della Promise
  // Simulo un'operazione asincrona con setTimeout
  setTimeout(() => {
    // const successo = true; // variabile che decide se l'operazione va a buon fine
    const successo = Math.random() > 0.5; // true o false casuale

    if (successo) {
      resolve("Operazione completata!"); // segnala che la Promise è stata risolta con successo
    } else {
      reject("Qualcosa è andato storto!"); // segnala che la Promise è stata rifiutata
    }
  }, 2000); // dopo 2 secondi
});

// Gestione del risultato della Promise se va a buon fine
miaPromise
  .then(function (risultato) {
    // viene eseguito solo se "resolve" è stato chiamato
    console.log("Successo:", risultato); // stampa il messaggio di successo
  })

//   // Gestione dell'errore se la Promise fallisce
  .catch(function (errore) {
    // viene eseguito solo se "reject" è stato chiamato
    console.log("Errore:", errore); // stampa il messaggio di errore
  });

/*
.then() → viene eseguito solo se la Promise viene risolta (resolve).
.catch() → viene eseguito solo se la Promise viene rifiutata (reject).

Per quanto riguarda Math.random() > 0.5:
Math.random()

È una funzione di JavaScript che genera un numero casuale compreso tra 0 (incluso) e 1 (escluso).

Esempio di possibili valori: 0.12, 0.87, 0.5, ecc.

Math.random() > 0.5

Confronta il numero casuale generato con 0.5:

    - Se il numero è maggiore di 0.5 → true
    - Se il numero è minore o uguale a 0.5 → false

La variabile successo diventa true o false a caso, con circa il 50% di probabilità per ciascuno.


Esempio pratico:
for (let i = 0; i < 5; i++) {
    const successo = Math.random() > 0.5;
    console.log(successo);
}
*/

// Esempio 2 - creo una nuova promise (funzione)
function caricaDatiUtente(id) {
  return new Promise((resolve, reject) => { // creo una nuova Promise che riceve una funzione con due parametri: resolve (successo) e reject (errore)
    // simuliamo una richiesta al server
    setTimeout(() => {                   // simulo un ritardo di 1.5 secondi (come fosse una chiamata al server)
      if (id > 0) {                      // se l'id è valido (maggiore di 0)...
        resolve({                        // ...chiamo resolve passando un oggetto come risultato e le sue proprietà (id, nome, email)
          id: id,
          nome: "Mario Rossi",
          email: "mario@email.com",
        });
      } else {                            // altrimenti (id <= 0)
        reject("ID utente non valido");   // chiamo reject per segnalare un errore
      }
    }, 1500);                             // la funzione viene eseguita dopo 1500 ms = 1.5 secondi
  });
}

caricaDatiUtente(123)                     // chiamo la funzione con id = 123
// Gestione della promise se va a buon fine:
.then(utente => {                         // .then viene eseguito se la Promise va a buon fine (resolve)
    console.log("Dati utente:", utente);  // stampo l'oggetto restituito
    console.log("Nome:", utente.nome);    // stampo solo la proprietà "nome"
})

// Gestione dell'errore sella promise fallisce 
.catch(errore => {                       // .catch viene eseguito se la Promise fallisce (reject)
    console.log("Si è verificato un errore:", errore);
});



caricaDatiUtente(123)                             // 1. Chiamo la funzione che simula il caricamento dei dati utente (restituisce una Promise)

// Se la Promise di sopra ha successo (.then)
.then(utente => {                                 // 2. Ricevo l'oggetto "utente" risolto dalla prima Promise
    console.log("Utente caricato:", utente.nome); // 3. Stampo il nome dell’utente
    return caricaOrdiniUtente(utente.id);         // 4. Ritorno un’altra Promise che carica gli ordini collegati a quell’utente
})
// Quando caricaOrdiniUtente() è completata con successo
.then(ordini => {                                 // 5. Ricevo la lista di ordini come risultato
    console.log("Ordini caricati:", ordini);      // 6. Stampo gli ordini a console
    return calcolaTotale(ordini);                 // 7. Ritorno un’altra Promise che calcola il totale spesa degli ordini
})
// Quando calcolaTotale() ha finito
.then(totale => {                                 // 8. Ricevo il totale calcolato
    console.log("Totale spesa:", totale);         // 9. Stampo il totale spesa a console
})
// Gestione errori
.catch(errore => {                                // 10. Se una QUALSIASI delle Promise sopra fallisce (reject),
    console.log("Errore in una delle operazioni:", errore);  // 11. Gestisco l’errore qui
})

/* Riassumendo:
- Ogni .then() aspetta che la Promise precedente sia risolta e riceve il suo valore.
- Ogni return dentro .then() passa il valore (o una nuova Promise) al prossimo .then().
- Se una qualsiasi Promise fallisce (reject), si salta subito tutti i .then() e si va direttamente al .catch().
*/

/* Spiegazione per quanto riguardo il ritorno di un'altra Promise:
Non sempre serve scrivere manualmente new Promise(...).

Caso 1.
Se ho già una funzione che ritorna una Promise, come caricaOrdiniUtente() o calcolaTotale(), basta fare:

return caricaOrdiniUtente(utente.id);

Non serve new Promise(...) perché quelle funzioni sono già asincrone e restituiscono una Promise.

Caso 2.
Se invece voglio creare una nuova operazione asincrona, che non esiste ancora, allora:

return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operazione completata!");
    }, 1000);
});

Qui uso new Promise(...) perché sono io che definisco cosa significa "successo" o "errore".

*/

// Esempio:
function caricaOrdiniUtente(id) {
    // già ritorna una Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve(["ordine1", "ordine2"]);
            } else {
                reject("ID non valido");
            }
        }, 1000);
    });
}

function calcolaTotale(ordini) {
    // qui potrei anche restituire subito un numero (sincrono)
    // ma per simulare l'asincronia lo incarto in una Promise
    return new Promise((resolve) => {
        const totale = ordini.length * 50;
        resolve(totale);
    });
}