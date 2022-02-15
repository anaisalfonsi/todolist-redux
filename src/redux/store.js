import { configureStore, createSlice } from '@reduxjs/toolkit';
import { addTaskToApi, deleteTaskFromApi, loadTasksFromApi, toggleTaskInApi } from './api';

const todoslice = createSlice({
  name: "todos",
  initialState: {
    tasks: [
      /*{
        id: 1,
        text: "Lorem Ipsum",
        isDone: false,
      },
      {
        id: 2,
        text: "Lorem Ipsum 2",
        isDone: false,
      },*/
    ],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addTaskToApi.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(addTaskToApi.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
      state.loading = false;
    });

    builder.addCase(deleteTaskFromApi.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(deleteTaskFromApi.fulfilled, (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      state.loading = false;
    });

    builder.addCase(loadTasksFromApi.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(loadTasksFromApi.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    });

    builder.addCase(toggleTaskInApi.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(toggleTaskInApi.fulfilled, (state, action) => {
      state.tasks.find((t) => t.id === action.payload.id).isDone = action.payload.isDone;
      state.loading = false;
    });
  },
  // pas nécessaires, puisqu'on utilise les extra-reducers.
  /*reducers: {
     addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        isDone: false,
      });
    }, 
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      task.isDone = !task.isDone;
    },
  },*/
});

// export const { addTask, deleteTask, toggleTask } = todoslice.actions;

export const store = configureStore({
    reducer: {
        todos: todoslice.reducer
    }
})