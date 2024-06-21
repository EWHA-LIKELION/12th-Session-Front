import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  //store를 생성하고 구성하는 configureStore에서 reducer를 정의합니다!

  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    //counter 키에 counterReducer를 매핑해줍니다.
    //그렇다면 다른 필드를 추가하고 싶을 때도 이런 식으로 작성해줄 수 있겠죠?
    //이 파일에서는 따로 작성할 코드가 없으니 이해하고 넘어가면 됩니다 :)
  },
});
