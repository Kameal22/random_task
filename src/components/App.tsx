import LandingPage from "./homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import UserPage from "./userPage/UserPage";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes/theme";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Navbar from "./nav/Navbar";
import Post from "./posts/Post";
import useToggle from "../hooks/useToggle";
import { DisclaimerDiv } from "./nav/styled/navbar.styled";
import { useRef } from "react";
import UseClickOutside from "../hooks/useClickOutside";

function App() {
  const [theme, setTheme] = useLocalStorage("light", "light");
  const [showDisclaimer, setShowDisclaimer] = useToggle(false);

  const disclaimerRef = useRef<HTMLDivElement>(null);

  UseClickOutside(disclaimerRef, setShowDisclaimer);

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <Navbar showDisclaimer={showDisclaimer} setShowDisclaimer={setShowDisclaimer} toggleDarkMode={changeTheme} theme={theme} />
        {showDisclaimer && <DisclaimerDiv ref={disclaimerRef}>
          <h1>My comment to this project:</h1>
          <h2>1. Router over Next</h2>
          <p>Hi, at first I would like to discuss my vanilla react choice - in the technical side of this task I found react-router but at the same time You've pointed out that additional advantage would be to use Next.js. So basically Next.js comes with it's own routing. We create pages folder, and every file inside instantly becomes a route. So there is no need to install any aditional packages like react router. Although I've decided to use react-router to show You that I'm familiar with it and I'm able to use it on daily basis. But! Next.js is also present in my toolbox, I know serverSideProps, SSR idea and it's other features which You can see in one of my latest project - airBnb clone on my Github.</p>
          <h2>2. Redux toolkit</h2>
          <p>According to the document provided for this task - redux toolkit appears as an advantage. I've had quite big and useful experience with it in my biggest project - Trello clone, also present on my github. But I don't think that redux has any use in application as small as this one. Even documentation says that. So I only used it once just to prove that I'm able to. Also I've added redux state persiste library to persist the state over page refreshes.</p>
          <h2>Thank You for Your time.</h2>
        </DisclaimerDiv>}
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
