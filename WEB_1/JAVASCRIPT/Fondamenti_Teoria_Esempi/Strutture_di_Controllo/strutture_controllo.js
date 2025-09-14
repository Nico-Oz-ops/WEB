// Strutture di controllo

// Esempio 1: Uso di 'if', 'else if', 'else'
// let password = prompt("Inserisci la tua password:");
// if (password === "Ciao") {
//     console.log("Accesso concesso");
// } else if (password === "ciao") {
//     console.log("Accesso concesso, ma attenzione alle maiuscole");
// } else {
//     console.log("Accesso negato");
// }

// Esempio 2: Ciclo "for...of" per iterare un array
const hobbies = ["Sport", "Cucina"];

for (const hobby of hobbies){
    console.log(`Il mio hobby è: ${hobby}`);
}

hobbies.push('Musica', 'Calcio', 'Lettura', 'Trekking');
console.log(hobbies);

for (const hobby of hobbies) {
    console.log(`Il mio hobby è: ${hobby}`)
}

/*Nel contesto di un ciclo `for...of`, la parola chiave `const` può essere utilizzata 
per dichiarare una variabile che sarà costante all'interno di ogni singola iterazione del ciclo. 
In altre parole, per ogni iterazione del ciclo, una nuova variabile `const` viene creata e 
inizializzata con il valore corrente dell'elemento dell'array (o di qualsiasi altro oggetto iterabile).*/

// Esempio
const numeri = [1, 2, 3, 4, 5];

for (const numero of numeri){
    console.log(numero);
    //'numero' è costante all'interno di questa iterazione specifica
    // e non può essere modificato.
    // Tuttavia, una nuova 'const numero' sarà creata per la prossima iterazione
}

// `const` è utilizzabile in un ciclo `for...of` perché una nuova variabile viene creata per ogni iterazione del ciclo.