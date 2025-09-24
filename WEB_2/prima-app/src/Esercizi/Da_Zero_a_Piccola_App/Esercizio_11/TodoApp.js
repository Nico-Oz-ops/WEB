/*
Esercizio 11: To-Do List con Persistenza (json-server)

Obiettivo: Creare un'applicazione To-Do List completa che interagisce con un backend
fittizio (json-server) per caricare, aggiungere, eliminare e aggiornare le attività, rendendo
i dati persistenti.
*/

import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const API_URL = "http://localhost:4000/tasks";
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const risposta = await fetch(API_URL);
      console.log(risposta);
      const dati_risposta = await risposta.json();
      if (!risposta.ok) throw new Error("Errore nella fetch"); // solleva un eccezione --> se non è OK o se non è nello stato 400, solleva un eccezione
      setTasks(dati_risposta);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const deleteTask = async (id) => {
    await fetch(API_URL + "/" + id, { method: "DELETE" });
    fetchTasks(API_URL);
  };

  useEffect(() => {
    fetchTasks(API_URL);
  }, []);

  return (
    <div className="container-m-4">
      <h1 className="mb-4">To Do List</h1>
      <TodoForm></TodoForm>
      <TodoList task={tasks} onDeleteTask={deleteTask}></TodoList>
    </div>
  );
};

export default TodoApp;
