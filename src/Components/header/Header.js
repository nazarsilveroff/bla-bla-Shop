import React from "react";
import { HeaderConteiner } from "./HeaderStyle";


const Header = () => {
    return (
        <HeaderConteiner>
            <a href="/">Shop Car</a>
            <nav>
                <ul className="list">
                    <li className="listItem">
                        <a href="/" className="link">Home</a>
                    </li>
                    <li className="listItem">
                        <a href="/Products" className="link">Products</a>
                    </li>
                    <li className="listItem">
                        <a href="/Admin" className="link">Admin</a>
                    </li>
                    <li className="listItem">
                        <a href="/Registation" className="link">Registation</a>
                    </li>
                    <li className="listItem">
                        <a href="/Login" className="link">Login</a>
                    </li>
                </ul>
            </nav>
        </HeaderConteiner>
    );
};

export default Header;
