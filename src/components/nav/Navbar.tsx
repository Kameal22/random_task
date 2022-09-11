import { Disclaimer, NavbarDiv } from "./styled/navbar.styled";

interface Props {
    toggleDarkMode: () => void;
    setShowDisclaimer: () => void;
    showDisclaimer: boolean;
    theme: string;
}

const Navbar: React.FC<Props> = ({ toggleDarkMode, theme, setShowDisclaimer, showDisclaimer }) => {


    return (
        <NavbarDiv>
            {theme === "light" ? <i onClick={toggleDarkMode} className="bi bi-moon" /> : <i style={theme === "light" ? { color: "black" } : { color: "ivory" }} onClick={toggleDarkMode} className="bi bi-moon-fill" />}
            {!showDisclaimer && <Disclaimer onClick={setShowDisclaimer}>Disclaimer</Disclaimer>}

        </NavbarDiv>
    )
}

export default Navbar;