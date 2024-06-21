import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
<<<<<<< HEAD
import todoReducer from "./todoSlice"
=======
import todoReducer from "./todoSlice";
>>>>>>> a553386ee12a527c9e4e99a60e6de0bd6b474ea1

export const store = configureStore({
  reducer: {
    counter: counterReducer,
<<<<<<< HEAD
    todos: todoReducer
    //counter 키에 counterReducer를 매핑해줍니다.
    //그렇다면 다른 필드를 추가하고 싶을 때도 이런 식으로 작성해줄 수 있겠죠?
    //이 파일에서는 따로 작성할 코드가 없으니 이해하고 넘어가면 됩니다 :)
=======
    todos: todoReducer,
>>>>>>> a553386ee12a527c9e4e99a60e6de0bd6b474ea1
  },
});
