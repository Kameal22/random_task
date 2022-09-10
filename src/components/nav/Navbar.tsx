import { useLocalStorage } from "../../hooks/useLocalStorage";
import { NavbarDiv } from "./styled/navbar.styled";

interface Props {
    toggleDarkMode: () => void;
    theme: string;
}

const Navbar: React.FC<Props> = ({ toggleDarkMode, theme }) => {
    return (
        <NavbarDiv>
            {theme === "light" ? <i onClick={toggleDarkMode} className="bi bi-moon" /> : <i onClick={toggleDarkMode} className="bi bi-moon-fill" />}
        </NavbarDiv>
    )
}

export default Navbar;