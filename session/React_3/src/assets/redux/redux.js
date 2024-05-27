import { configureStore, createSlice } from "@reduxjs/toolkit";

// createSlice를 사용하여 액션 생성자와 리듀서를 한 번에 정의!
const partSlice = createSlice({
  name: "part",
  initialState: {
    selectedPart: "",
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
