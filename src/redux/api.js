import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.headers = {
  "Content-Type": "application/json",
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpc3Z3ZGxudWhhZXpoamdlaWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ5MzA4MjgsImV4cCI6MTk2MDUwNjgyOH0.7raIVCIZAAtOJ3j0vWNQNv1prrvgS9Nq5q8bTGNI8hM",
  Prefer: "return=representation",
};

export const addTaskToApi = createAsyncThunk("todos/addTaskToApi", (text) => {
  /* return fetch("https://fisvwdlnuhaezhjgeihw.supabase.co/rest/v1/todos", {
    method: "POST",
    body: JSON.stringify({
      text: text,
    }),
    headers: {
      "Content-Type": "application/json",
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpc3Z3ZGxudWhhZXpoamdlaWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ5MzA4MjgsImV4cCI6MTk2MDUwNjgyOH0.7raIVCIZAAtOJ3j0vWNQNv1prrvgS9Nq5q8bTGNI8hM",
      Prefer: "return=representation",
    },
  })
    .then((response) => response.json())
    .then((json) => json[0]); */

    return axios.post("https://fisvwdlnuhaezhjgeihw.supabase.co/rest/v1/todos", {
        text: text,
    })
    .then((response) => response.data[0]);
});

export const deleteTaskFromApi = createAsyncThunk("todos/deleteTaskFromApi", (id) => {
  /* return fetch("https://fisvwdlnuhaezhjgeihw.supabase.co/rest/v1/todos?id=eq." + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpc3Z3ZGxudWhhZXpoamdlaWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ5MzA4MjgsImV4cCI6MTk2MDUwNjgyOH0.7raIVCIZAAtOJ3j0vWNQNv1prrvgS9Nq5q8bTGNI8hM",
      Prefer: "return=representation",
    },
  })
    .then(() => id); */
    return axios
      .delete("https://fisvwdlnuhaezhjgeihw.supabase.co/rest/v1/todos?id=eq." + id)
      .then(() => id);
});

export const loadTasksFromApi = createAsyncThunk(
  "todos/loadTasksFromApi",
  () => {
    /* return fetch(
      "https://fisvwdlnuhaezhjgeihw.supabase.co/rest/v1/todos",
      {
        headers: {
          "Content-Type": "application/json",
          apiKey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpc3Z3ZGxudWhhZXpoamdlaWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ5MzA4MjgsImV4cCI6MTk2MDUwNjgyOH0.7raIVCIZAAtOJ3j0vWNQNv1prrvgS9Nq5q8bTGNI8hM",
          Prefer: "return=representation",
        },
      }
    ).then((response) => response.json()); */
    return axios
      .get("https://fisvwdlnuhaezhjgeihw.supabase.co/rest/v1/todos")
      .then((response) => response.data);
  }
);

export const toggleTaskInApi = createAsyncThunk("todos/toggleTaskInApi", (task) => {
  /* return fetch("https://fisvwdlnuhaezhjgeihw.supabase.co/rest/v1/todos?id=eq." + task.id, {
    method: "PATCH",
    body: JSON.stringify({
      isDone: !task.isDone,
    }),
    headers: {
      "Content-Type": "application/json",
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpc3Z3ZGxudWhhZXpoamdlaWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ5MzA4MjgsImV4cCI6MTk2MDUwNjgyOH0.7raIVCIZAAtOJ3j0vWNQNv1prrvgS9Nq5q8bTGNI8hM",
      Prefer: "return=representation",
    },
  })
    .then((response) => response.json())
    .then((json) => json[0]); */
    return axios
      .patch("https://fisvwdlnuhaezhjgeihw.supabase.co/rest/v1/todos?id=eq." + task.id, {
          isDone: !task.isDone,
      })
      .then((response) => response.data[0]);
});
