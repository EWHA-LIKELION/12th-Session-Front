import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./assets/redux/redux";
<<<<<<< HEAD
import { RecoilRoot } from "recoil";

=======
>>>>>>> 63fe4a19aacac5d28846c56b58c2b5aff0750332
import { ThemeProvider } from "./assets/context/ThemeContext";
import { RecoilRoot } from "recoil";

import MainPage from "./pages/MainPage";
import PartPage from "./pages/PartPage";
import ThemePage from "./pages/ThemePage";
import NamePage from "./pages/NamePage";
import NumberPage from "./pages/NumberPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <RecoilRoot>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/redux" element={<PartPage />} />
                <Route path="/contextAPI" element={<ThemePage />} />
                <Route path="/recoil" element={<NamePage />} />
                <Route path="/zustand" element={<NumberPage />} />
              </Routes>
            </BrowserRouter>
          </RecoilRoot>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
