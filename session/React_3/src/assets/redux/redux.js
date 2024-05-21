import { configureStore, createSlice } from "@reduxjs/toolkit";

// createSlice를 사용하여 액션 생성자와 리듀서를 한 번에 정의!
const partSlice = createSlice({
  name: "part",
  initialState: {
    selectedPart: "프론트엔드",
  },
  reducers: {
    setSelectedPart: (state, action) => {
      state.selectedPart = action.payload;
    },
  },
});

export const { setSelectedPart } = partSlice.actions;

const store = configureStore({
  reducer: {
    part: partSlice.reducer,
  },
});

export default store;

//원래는 state, action, reducer 모두 다른 파일에 각각 만들지만...
//한 눈에 보려 이번에만 하나에 담았으니 참고해주세요!
