import LandingPage from "./homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import UserPage from "./userPage/UserPage";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes/theme";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Navbar from "./nav/Navbar";
import Post from "./posts/Post";

function App() {
  const [theme, setTheme] = useLocalStorage("light", "light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <Navbar toggleDarkMode={changeTheme} theme={theme} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="/users/:id/:post_id" element={<Post />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
