// A. Sintassi della Funzione Freccia (Arrow Function)

/*Si inizia con i parametri racchiusi tra parentesi, seguiti da una 
freccia `=>` e infine il corpo della funzione racchiuso tra parentesi graffe*/
const saluta = (nomeUtente, messaggio) => {
    console.log(nomeUtente + ": " + messaggio);
}

// B. Funzioni Anonime

/*Le funzioni freccia sono spesso utilizzate come funzioni anonime, specialmente 
quando si passa una funzione come argomento ad un'altra funzione o come callback.*/

<button onClick = {()=> saluta("Max", "Ciao")}>Clicca qui</button> // utilizzo in un evento onClick in React



