/*Potremmo avere una funzione chiamata `init` che contiene al suo interno un'altra funzione, 
magari chiamata `greet`, che esegue un `console.log`. All'interno della funzione `init`, è possibile 
chiamare `greet`. Tuttavia, non è possibile chiamare `greet` al di fuori di `init`, in quanto `greet` 
è definita all'interno di `init` e quindi ha uno scope limitato a quella funzione.
In altre parole, `greet` è disponibile solo come variabile all'interno dello scope di `init` e
non può essere accessibile al di fuori di esso. D'altro canto, `init` può essere chiamata
liberamente, poiché ha uno scope che copre l'intero file, non essendo annidata in un'altra funzione.
È possibile definire ed eseguire funzioni all'interno di altre funzioni. Anche se
questa non è una pratica comune in JavaScript puro, diventa molto più comune quando si
lavora con React */

// Esempio funzione annidata

function init() { // esecuzione della funzione esterna init()
  console.log("Funzione init eseguita");
  function greet() {
    console.log("Ciao dal greet interno!");
  }
  greet(); // chiamata a greet
}

init(); // chiamata a init

/* Descrizione del codice:
1. Definisco init.
2. Dentro init definisco un'altra funzione, chiamata greet.
    - greet esiste solo dentro init, quindi è nello scope locale di init
3. Quando chiamo init():
    - stampo "Funzione init eseguita"
    - definisco greet
    - chiamo greet() -> stampa "Ciao dal greet interno!"

Quindi:
    - la funzione interna greet dipende da init.
    - non si può chiamare greet() dall'esterno:
        greet(); // ReferenceError: greet is not defined
    perché è visibile solo dentro init.
*/
