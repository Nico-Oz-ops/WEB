/*
Esercizio 11: To-Do List con Persistenza (json-server)

Obiettivo: Creare un'applicazione To-Do List completa che interagisce con un backend
fittizio (json-server) per caricare, aggiungere, eliminare e aggiornare le attività, rendendo
i dati persistenti.
*/
import React, { createContext, useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {
  API_URL,
  fetchTaskService,
  deleteTaskService,
  addTaskService,
  toggleTaskService,
  updateTaskService,
} from "./api";

const AppContext = createContext();
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTask = async () => {
    try {
      const data = await fetchTaskService();

      setTasks(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const deleteTask = async (id) => {
    await deleteTaskService(id);
    fetchTask();
  };
  const addTask = async (text) => {
    await addTaskService(text);
    fetchTask();
  };
  const toggleTask = async (id, completed) => {
    await toggleTaskService(id, completed);
    fetchTask();
  };
  const updateTask = async (id, text) => {
    await updateTaskService(id, text);
    fetchTask();
  };
  useEffect(() => {
    fetchTask();
  }, []);
  if (loading) return <div className="alert alert-info">Sto caricando....</div>;
  if (error) return <div className="alert alert-danger">Errore: {error}</div>;
  return (
    <AppContext.Provider>
    <div className="container m-4">
      <h1 className="mb-4">Todo Do List DATA ANALYST</h1>
      <TodoForm onAddTask={addTask}></TodoForm>
      <TodoList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        updateTask={updateTask}
      ></TodoList>
    </div>
    </AppContext.Provider>
  );
};

export default TodoApp;
