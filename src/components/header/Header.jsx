import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import PokeLogo from "../svg/PokeLogo";

const Header = () => {
    return (  
        <header>
            <PokeLogo />
            <Link>
                
            </Link>
            <Nav />
        </header>
    );
}

export default Header;