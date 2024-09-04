import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  //RTK의 핵심 기능인 createSlice!
  //action 타입 및 생성, 리듀서 정의를 한 번에 할 수 있게 해줍니다.
  //redux의 단점인 위 역할에 필요했던 방대한 보일러플레이트 코드를 줄여주는 역할을 합니다 ~.~
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    //아래에 각각의 액션에 대한 업데이트 로직이 있는 reducer 함수를 정의내려줍니다.
    //이때 함수들 각각에 대응하는 액션 생성자들이 자동으로 생성됩니다!
    //➡️ +10, -10 리듀서 함수 (혹은 다른 수식)을 추가해봅시다!
    increment10: (state) => {
      state.value += 10;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    decrement10: (state) => {
      state.value -= 10;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment , increment10 , decrement , decrement10 , reset } = counterSlice.actions;
//-------------------------------------------------------------------------
//위에서 정의한 액션 생성자들을 export 해줄 때, 이걸 actons로 정의해주려 합니다!
//그렇다면 어떤 코드를 써줘야 할까요? 위 형식에 맞춰서 써주세요 :)
//➡️ 추가한 action 생성자들에 대해서도 같이 넣어주시면 됩니다.
// hint ✉️ : session 폴더에서 redux.js 에 작성된 코드를 참고하세요~

export default counterSlice.reducer;
