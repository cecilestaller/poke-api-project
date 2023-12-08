import { Link } from "react-router-dom";
import BurgerMenuIcon from "../svg/BurgerMenuIcon";
import DarkModeIcon from "../svg/DarkModeIcon";
import "./Nav.scss";
import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../../context/Context";

const Nav = () => {
  const { searchItem, setSearchItem } = useContext(FetchContext);

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    console.log(searchItem);
  }, [searchItem]);

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
      <Link>
        <DarkModeIcon />
      </Link>
    </nav>
  );
};

export default Nav;
