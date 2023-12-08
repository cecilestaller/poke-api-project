import { Link } from "react-router-dom";
import BurgerMenuIcon from "../svg/BurgerMenuIcon";
import DarkModeIcon from "../svg/DarkModeIcon";
import "./Nav.scss";
import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../../context/Context"

const Nav = () => {
    
    const { darkMode, setDarkMode, searchItem, setSearchItem } = useContext(FetchContext);

    const handleSearch = (e) => {
        setSearchItem(e.target.value);
    }

    const handleClick = () => setDarkMode(!darkMode);

    console.log(darkMode);

    useEffect(() => {

    }, [darkMode])

    return (  
        <nav>
            <Link to="/type">
                <BurgerMenuIcon />
            </Link>
            <input
                type="text"
                placeholder="Search Pokemon"
                value={searchItem}
                onChange={handleSearch}
                />
            <Link onClick={handleClick}>
                <DarkModeIcon/>
            </Link>
        </nav>
    );
}

export default Nav;