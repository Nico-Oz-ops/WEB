/* Le parole chiave async e await rendono il codice asincrono più facile da leggere e scrivere, 
facendolo sembrare codice sincrono. */

// Esempio:

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
// // Uso di async/await
async function miaFunzioneAsincrona() {  // dichiaro una funzione "async": restituisce sempre una Promise
  try {                                  // inizio blocco try: qui metto il codice che potrebbe fallire/rigettare
    const risultato = await miaPromise;  // "await" sospende la funzione finché miaPromise si risolve o si rifiuta
                                            //  - se si risolve: "risultato" contiene il valore risolto
                                            //  - se si rifiuta: qui viene lanciata un'eccezione e si salta al catch
    console.log(risultato);              // eseguito solo in caso di successo: stampa il valore risolto
  } catch (errore) {                     // cattura l'eccezione generata dal reject (o da altri errori nel try)
    console.log("Errore:", errore);      // gestisce l'errore: stampa il motivo del fallimento
  }                                      // fine del blocco catch
}                                        // fine definizione della funzione
miaFunzioneAsincrona()                   // invoco la funzione: parte subito; ritorna una Promise (che qui non sto attendendo)

// /*Questo è esattamente il modo corretto di gestire una Promise con async/await.
// - Se la Promise si risolve, stampi il risultato.
// - Se la Promise viene rifiutata, entri nel catch e stampi l’errore.

// Piccole osservazioni utili:

// - await si può usare solo dentro funzioni dichiarate async.
// - "miaPromise" (definita prima) è quella che decide se andare nel ramo try o nel catch (resolve vs reject).
// - La funzione miaFunzioneAsincrona ritorna una Promise: volendo si può fare miaFunzioneAsincrona().then(...).catch(...)
//   oppure await miaFunzioneAsincrona() dentro un’altra funzione async.
// - Best practice: quando rifiuti una promise, è preferibile usare un oggetto Error, esempio:
// reject(new Error("Qualcosa è andato storto")), così nel catch puoi leggere errore.message.
// Esempio variante:
// */
const miaPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const successo = Math.random() > 0.5; // true o false casuale

    if (successo) {
      resolve("Operazione completata!");             // caso di successo
    } else {
      reject(new Error("Qualcosa è andato storto!")) // caso di errore con oggetto Error
    }
  }, 1000);
});

async function miaFunzioneAsincrona2() {
  try {
    const risultato = await miaPromise2;      // attende che miaPromise finisca
    console.log(risultato);                  // stampa "Operazione completata!"
  } catch (errore) {
    console.log("Errore:", errore.message);  // stampa solo il messaggio contenuto nell’Error
    console.error(errore);                   // stampa l’oggetto completo con stack trace
  }
}
miaFunzioneAsincrona2();
/*Differenze principali:
    - reject("Qualcosa è andato storto!") → passa solo una stringa.
    - reject(new Error("Qualcosa è andato storto!")) → passa un oggetto Error, che contiene:
    - errore.message → messaggio dell’errore
    - errore.stack → traccia dello stack (utile per il debug)

Questo è il modo raccomandato perché rende più facile distinguere 
diversi tipi di errori e loggarli correttamente.*/

/*----------------------------------------------------------*/

// Esempio 1 - Differenza di uso con Promise vs con Async/Await
function caricaDatiUtente(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 123) {
        resolve({ id: 123, nome: "Mario Rossi" }); // simuliamo un utente caricato
      } else {
        reject(new Error("Utente non trovato"));
      }
    }, 1000);
  });
}

function caricaOrdiniUtente(idUtente) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, prodotto: "Laptop" },
        { id: 2, prodotto: "Smartphone" },
      ]);
    }, 1000);
  });
}
// Con Promise:
function ottieniDatiUtente() {
  caricaDatiUtente(173)
    .then((utente) => {
      console.log("Utente:", utente);
      return caricaOrdiniUtente(utente.id);
    })
    .then((ordini) => {
      console.log("Ordini:", ordini);
    })
    .catch((errore) => {
      console.log(errore);
    });
}
ottieniDatiUtente();

// // Con Async/Await:
async function ottieniDatiUtente1() {
  try {
    const utente = await caricaDatiUtente(123);
    console.log("Utente:", utente);

    const ordini = await caricaOrdiniUtente(utente.id);
    console.log("Ordini:", ordini);
  } catch (errore) {
    console.log("Errore:", errore);
  }
}
ottieniDatiUtente1();

// Esempio 2 - senza definire calcoloTotale()
async function caricaDatiCompleti() {
  try {
    console.log("Inizio caricamento...");
    const utente = await caricaDatiUtente(123);
    console.log("Utente caricato:", utente.nome);

    // aspetta che gli ordini siano caricati
    const ordini = await caricaOrdiniUtente(utente.id);
    console.log("Ordini caricati:", ordini.length, "ordini"); //stamperà il numero di ordini caricati.

    // aspetta che il totale sia calcolato
    const totale = await calcolaTotale(ordini);
    console.log("Totale calcolato:", totale, "$");
    return { utente, ordini, totale };
  } catch (errore) {
    console.log("Errore durante il caricamento:", errore);
  }
}
caricaDatiCompleti();

// Esempio 2B - con calcoloTotale() definita

function calcolaTotale(ordini) {
  // funzione che calcola il totale degli ordini
  return new Promise((resolve) => {
    // ritorna una Promise asincrona
    setTimeout(() => {
      // simula un ritardo di 1 secondo (come se fosse un calcolo/una chiamata al server)
      const totale = ordini.reduce((acc, ordine) => {
        // uso reduce per sommare i prezzi di tutti gli ordini
        const prezzo = ordine.prodotto === "Laptop" ? 1000 : 500; // assegno un prezzo fittizio: Laptop=1000$, Smartphone=500$
        return acc + prezzo; // sommo il prezzo corrente al totale accumulato
      }, 0); // inizializzo l'accumulatore a 0
      resolve(totale); // risolvo la Promise restituendo il totale calcolato
    }, 1000); // fine del setTimeout dopo 1 secondo
  }); // fine della Promise
} // fine della funzione

async function caricaDatiCompleti() {
  // funzione asincrona principale
  try {
    // blocco try per catturare eventuali errori
    console.log("Inizio caricamento..."); // messaggio iniziale

    const utente = await caricaDatiUtente(123); // attende che l’utente sia caricato
    console.log("Utente caricato:", utente.nome); // stampa il nome dell’utente

    const ordini = await caricaOrdiniUtente(utente.id); // attende il caricamento degli ordini
    console.log("Ordini caricati:", ordini.length, "ordini"); // numero di ordini caricati

    const totale = await calcolaTotale(ordini); // attende il calcolo del totale
    console.log("Totale calcolato:", totale, "$"); // stampa il totale calcolato

    return { utente, ordini, totale }; // ritorna un oggetto con tutti i dati
  } catch (errore) {
    // cattura errori di qualsiasi Promise fallita
    console.log("Errore durante il caricamento:", errore); // stampa messaggio di errore
  }
}

caricaDatiCompleti(); // invoca la funzione



//Esempio di Caricamento Parallelo

// Funzione che simula il caricamento di un utente
function caricaDatiUtente(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 123) {
        resolve({ id: 123, nome: "Mario Rossi" }); // utente trovato
      } else {
        reject(new Error("Utente non trovato"));  // utente non trovato
      }
    }, 1000);
  });
}

// Funzione che simula il caricamento delle impostazioni
function caricaImpostazioni() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ tema: "dark", lingua: "it" });  // restituisce impostazioni fittizie
    }, 800);
  });
}

// Funzione che simula il caricamento delle notifiche
function caricaNotifiche() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, messaggio: "Benvenuto!" },
        { id: 2, messaggio: "Hai 3 nuovi messaggi" }
      ]); // array di notifiche
    }, 1200);
  });
}

// Funzione principale che carica tutto in parallelo
async function caricaDatiParalleli() {
    try {
        console.log("Caricamento parallelo...");  

        // Creo tutte le Promise senza await: partono subito in parallelo
        const promiseUtente = caricaDatiUtente(123);     
        const promiseImpostazioni = caricaImpostazioni(); 
        const promiseNotifiche = caricaNotifiche();       

        // attendo che tutte le Promise siano completate contemporaneamente
        const [utente, impostazioni, notifiche] = await Promise.all([  // Promise.all([...]) aspetta che tutte siano completate e restituisce i risultati come array.
            promiseUtente,
            promiseImpostazioni,
            promiseNotifiche
        ]);

        console.log("Tutto caricato!");                   
        console.log("Utente:", utente);                    
        console.log("Impostazioni:", impostazioni);        
        console.log("Notifiche:", notifiche);              

        return { utente, impostazioni, notifiche };       // restituisco un oggetto con tutti i dati
    } catch(errore) {
        console.log("Errore nel caricamento parallelo:", errore); // catturo eventuali errori
    }
}

// Invoco la funzione asincrona
caricaDatiParalleli();

/* 
Osservazioni:
    - Tutte le Promise partono subito, senza attendere l’una dall’altra → massimo parallelismo.
    - Promise.all([...]) aspetta che tutte siano completate e restituisce i risultati come array.
    - Se anche solo una Promise fallisce, Promise.all va subito nel catch.
    - Le funzioni simulate (caricaImpostazioni, caricaNotifiche) hanno ritardi diversi per mostrare 
      che il caricamento è davvero parallelo.
*/






























































