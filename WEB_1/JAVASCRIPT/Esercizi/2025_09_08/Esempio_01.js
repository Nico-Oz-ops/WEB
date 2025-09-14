/*
Esercizio – Funzione attesa

Obiettivo: creare una funzione che simula un’attesa e stampare un messaggio quando il tempo è scaduto.
*/

// Passo 1: creare la Promise
function attesa(ms) { // ms = millisecondi da attendere
    return new Promise((resolve, reject) => {
        if (ms < 0) { // Se ms è negativo → la Promise fallisce con reject.
            reject("Tempo negativo non valido!");
        } else { // Altrimenti → la Promise si risolve dopo "ms" millisecondi con resolve.
            setTimeout(() => resolve("Tempo scaduto!"), ms);
        }
    });
};

// Passo 2: usare .then() e .catch() -> serve se voglio consumare la Promise senza usare async/await.
attesa(2000)
    .then(msg => console.log(msg))  // stampiamo "Tempo scaduto!" dopo 2 secondi
    .catch(err => console.error(err));


// Passo 3: riscrivere con async/await -> serve se voglio scrivere il codice in uno stile più leggibile e “sincrono”.
// È un’alternativa a .then() e .catch(), non è obbligatoria.
async function provaAttesa() {
    try {
        const msg = await attesa(2000); // aspetta la Promise
        console.log(msg);
    } catch (err) {
        console.error(err);
    }
}

provaAttesa();
// Qui l’uso di await rende il codice più leggibile, come se fosse sincrono, ma in realtà è asincrono.



/*
    * Passo 1 + Passo 2 (.then()/.catch()) → usi questo se vuoi gestire la Promise in stile “classico” 
      con i metodi della Promise.

    * Passo 1 + Passo 3 (async/await) → usi questo se preferisci uno stile più leggibile, simile al codice sincrono.

    In un contesto reale, scegli uno dei due modi per consumare la Promise; non serve 
    fare sia .then() che await sullo stesso codice.
*/



