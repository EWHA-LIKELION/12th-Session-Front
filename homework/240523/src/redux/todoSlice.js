import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
<<<<<<< HEAD
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false});
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
=======
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
>>>>>>> a553386ee12a527c9e4e99a60e6de0bd6b474ea1
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

<<<<<<< HEAD
export default todoSlice.reducer;
=======
export default todoSlice.reducer;
>>>>>>> a553386ee12a527c9e4e99a60e6de0bd6b474ea1
