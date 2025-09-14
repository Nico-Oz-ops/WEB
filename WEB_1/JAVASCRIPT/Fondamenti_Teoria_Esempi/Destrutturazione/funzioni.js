// Destrutturazione di parametri delle funzioni

/*La sintassi di destrutturazione per gli array e gli oggetti può essere utilizzata anche nelle 
liste di parametri delle funzioni. Ad esempio, se una funzione accetta un parametro che conterrà 
un oggetto, questo può essere destrutturato per "estrarre" le proprietà dell'oggetto e renderle 
disponibili come variabili con ambito locale (cioè, variabili disponibili solo all'interno del corpo
della funzione).*/

// Esempio - notazione a punto
function storeOrder(order) {
    localStorage.setItem('id', order.id); // notazione a punto per accedere ai valori dentro l'oggetto "order"
    localStorage.setItem('currency', order.currency); // notazione a punto per accedere ai valori dentro l'oggetto "order"
    console.log('Ordine salvato:', order); // stampa l'oggetto prima di salvarlo
}

// creo un ordine
const myOrder = { id: 123, currency: 'EUR' };

// salvo l'ordine
storeOrder(myOrder);

// recupero dal localStorage
console.log('ID salvato:', localStorage.getItem('id'));
console.log(('Currency salvata:', localStorage.getItem('currency')));

// Output atteso:
/*
Ordine salvato: { id: 123, currency: "EUR" }
ID salvato: 123
Currency salvata: EUR
*/


/*Spiegazione codice
- localStorage è una memoria interna del browser (persiste anche dopo aver ricaricato la pagina).
- setItem(chiave, valore) salva una coppia chiave–valore.

In questo caso:

- salva in localStorage la chiave "id" con il valore order.id
- salva la chiave "currency" con il valore order.currency
*/

// Metodo di destrutturazione per accedere ai valori dentro della funzione "storeOrder":
function storeOrder({ id, currency }) {
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}

// creo un oggetto
const myOrder2 = { id: 123, currency: 'EUR' };
storeOrder(myOrder2);

/*Quando passo un oggetto (myOrder2), la funzione estrae subito id e currency dall’oggetto, 
senza dover scrivere order.id o order.currency.

è equivalente a:

function storeOrder(order) {
    const { id, currency } = order; // destrutturazione dentro la funzione
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}
*/

// Esempio con destrutturazione nei parametri:
function storeOrder({ id, currency }) {
    console.log('ID:', id);
    console.log('Currency:', currency);
}

const myOrder3 = {id: 123, currency: 'EUR'}
storeOrder(myOrder3)

// Esempio con destrutturazione nel corpo della funzione:
function storeOrder(order) {
    const { id, currency } = order;
    console.log('ID:', id);
    console.log('Currency:', currency);
}

const myOrder4 = {id: 321, currency: 'USD'}
storeOrder(myOrder4)
