import { Link } from "react-router-dom";
import BurgerMenuIcon from "../svg/BurgerMenuIcon";
import DarkModeIcon from "../svg/DarkModeIcon";
import "./Nav.scss";

const Nav = () => {
    return (  
        <nav>
            <Link>
                <BurgerMenuIcon />
            </Link>
            <input type="text" placeholder="Search Pokemon"/>
            <Link>
                <DarkModeIcon />
            </Link>
        </nav>
    );
}

export default Nav;