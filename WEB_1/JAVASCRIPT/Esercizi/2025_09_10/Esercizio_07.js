/*
Tema: Fetch API + async/await + filtri su array

Obiettivo: Recuperare dati da un’API esterna e filtrare i risultati.

Nome dell’esercizio: prendiTodoCompletati(userId)

Traccia:

1. Scrivi una funzione asincrona prendiTodoCompletati(userId).

2. Usa fetch per recuperare i dati da:
https://jsonplaceholder.typicode.com/todos

3. Con await, ottieni e trasforma la risposta in JSON.

4. Filtra i TODOs in base a due condizioni:

    * devono appartenere all’utente con userId uguale al parametro passato,

    * devono avere completed: true.

5. La funzione deve restituire l’array filtrato.

6. Stampa in console i titoli (title) dei TODOs completati dall’utente.

Suggerimento: Puoi usare filter per selezionare i TODO e forEach per stamparne i titoli.
*/

async function prendiTodoCompletati(userId) {
  try {
    // chiedo al server tutti i TODO
    const recupero_dati = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );

    // converto il recupero dei dati (risposta) in json (array di oggetti)
    const todos = await recupero_dati.json();

    // filtro i TODOs che appartengono all'utente e che hanno completed: true
    const user_completati = todos.filter(
      (todo) => todo.userId === userId && todo.completed
    );
    // stampo i titoli in console
    user_completati.forEach((todo) => console.log(todo.title));

    return user_completati;
  } catch (error) {
    console.log("Errore", err);
  }
}
prendiTodoCompletati(1);
