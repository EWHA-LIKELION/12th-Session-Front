import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";
//import 해온 Provider와 store를 어떻게 사용해야 redux를 사용할 수 있을까요?
//세션 시간에 밟아갔던 과정을 생각해봅시다•• (세션 자료 참고도 좋아요)

import MainPage from "./pages/MainPage";
import CounterPage from "./pages/CounterPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo-list" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
