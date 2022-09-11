import { NavbarDiv } from "./styled/navbar.styled";

interface Props {
    toggleDarkMode: () => void;
    theme: string;
}

const Navbar: React.FC<Props> = ({ toggleDarkMode, theme }) => {
    return (
        <NavbarDiv>
            {theme === "light" ? <i onClick={toggleDarkMode} className="bi bi-moon" /> : <i style={theme === "light" ? { color: "black" } : { color: "ivory" }} onClick={toggleDarkMode} className="bi bi-moon-fill" />}
        </NavbarDiv>
    )
}

export default Navbar;