import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    }, // text가 들어가는 것임

    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload); //상태를 전환하려는 할 일의 ID. 액션이 어떤 투두를 향하고 있는지 명확히 하기 위함. 오류나 최신 투두가 아닐 수 있어서...
      if (todo) {
        todo.completed = !todo.completed;
      }
    }, //완료 체크
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload); //action.payload는 삭제하고자 하는 할 일의 고유 id
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
