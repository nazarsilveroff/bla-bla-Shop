import React from "react";
import { Link } from "react-router-dom";
import { HeaderConteiner } from "./HeaderStyle";
import Navigation from "./navigation/Navigation";


const Header = () => {
    return (
        <HeaderConteiner>
            <Link to="/">Shop Car</Link>
            <Navigation />
        </HeaderConteiner>
    );
};

export default Header;
