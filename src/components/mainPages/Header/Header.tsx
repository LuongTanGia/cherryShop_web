import { useState } from "react";
import ImgLogo from "../../../assets/images/Logo.svg";
import SearchIcon from "../../../assets/images/SearchIcon.svg";
import Cart from "../../../assets/images/cart 011.svg";

import { Link } from "react-router-dom";

import "./headerCss.css";
function Header() {
    const [selectedItem, setSelectedItem] = useState("Home");

    const handleItemClick = (index: string) => {
        setSelectedItem(index);
    };

    return (
        <div className="header">
            <div className="header_left">
                <div className="header_menu">
                    <ul className="header_menu-main">
                        <Link
                            to="/"
                            className={`header_menu-item  ${
                                selectedItem === "Home" ? "action" : ""
                            }`}
                            onClick={() => handleItemClick("Home")}
                        >
                            Home
                        </Link>
                        <Link
                            to="/Brand"
                            className={`header_menu-item ${
                                selectedItem === "Brand" ? "action" : ""
                            }`}
                            onClick={() => handleItemClick("Brand")}
                        >
                            Brand
                        </Link>
                        <Link
                            to="/Shop"
                            className={`header_menu-item ${
                                selectedItem === "Shop" ? "action" : ""
                            }`}
                            onClick={() => handleItemClick("Shop")}
                        >
                            Shop
                        </Link>
                        <Link
                            to="/About"
                            className={`header_menu-item ${
                                selectedItem === "About" ? "action" : ""
                            }`}
                            onClick={() => handleItemClick("About")}
                        >
                            About
                        </Link>
                        <Link
                            to="/Community"
                            className={`header_menu-item ${
                                selectedItem === "Community" ? "action" : ""
                            }`}
                            onClick={() => handleItemClick("Community")}
                        >
                            Community
                        </Link>
                    </ul>
                </div>
                <div className="header_logo">
                    <img src={ImgLogo} alt="Logo" />
                </div>
                <div className="header_search">
                    <div className="header_input">
                        <input type="text" placeholder="Search..." />
                        <img
                            src={SearchIcon}
                            alt="searchIcon"
                            className="searchIcon"
                        />
                    </div>
                </div>
            </div>
            <div className="header_right">
                <img src={Cart} alt="searchIcon" className="searchIcon" />
            </div>
        </div>
    );
}

export default Header;
