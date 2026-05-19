import React, { useEffect, useState } from "react";
import "./Navbar.css";

import logo3 from "../../logo3.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout } from "../Autorisation/LoginAuth";
import jwt_decode from "jwt-decode";

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [decode, setDecode] = useState({ role: "NULL", name: "NULL" });
    const [info, setInfo] = useState({ role: "NULL", name: "NULL" });
    const [status, setStatus] = useState(false);

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleLogout = () => {
        dispatch(signout()).then(() => {
            history.replace("/");
            setStatus(false);
            setInfo({ role: "NULL", name: "NULL" });
            setDecode({ role: "NULL", name: "NULL" });
        });

        if (localStorage.getItem("token") === null) {
            setClicked(false);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            const token = localStorage.getItem("token");
            const decodedToken = jwt_decode(token);

            setDecode(decodedToken);
            setInfo(decodedToken);
            setStatus(true);
        }
    }, [status, auth.login]);

    return (
        <nav className="NavbarItems">
            <header className="App-header">
                <ul className={clicked ? "li2 li2Active" : "li2"}>
                    {decode.role === "ADMIN" ? (
                        <li className="nav">
                            <i className="fa fa-user" />
                            <Link className="a" to="/admin" onClick={handleClick}>
                                Admin panel
                            </Link>
                        </li>
                    ) : null}

                    <li className="nav">
                        <i className="fa fa-question-circle" />
                        <Link className="a" to="/Help" onClick={handleClick}>
                            Help
                        </Link>
                    </li>

                    {auth.login ? (
                        <li className="nav">
                            <i className="fa fa-user" />
                            <Link className="a" to="/myAcount" onClick={handleClick}>
                                {decode.name}
                            </Link>
                        </li>
                    ) : null}

                    {auth.login ? (
                        <li className="nav">
                            <i className="fa fa-sign-out" />
                            <Link className="a" to="/home" onClick={handleLogout}>
                                Logout
                            </Link>
                        </li>
                    ) : (
                        <li className="nav">
                            <i className="fa fa-sign-in" />
                            <Link className="a" to="/login" onClick={handleClick}>
                                Login / Register
                            </Link>
                        </li>
                    )}
                </ul>

                <button className="nav-icon" type="button" onClick={handleClick} aria-label="Open menu">
                    <span />
                    <span />
                    <span />
                </button>
            </header>

            <div className="Search">
                <Link className="logoLink" to="/home">
                    <img src={logo3} alt="Bookstore logo" />
                </Link>

                <div className="searchBox">
                    <i className="fa fa-search" />
                    <input type="text" placeholder="Search" name="search" />
                </div>

                <Link className="cartLink" to="/Cart">
                    <i className="fa fa-cart-arrow-down" />
                    <span>Cart</span>
                </Link>
            </div>

            <ul className="navi">
                <li>
                    <Link className="a" to="/home">
                        Home
                    </Link>
                </li>

                <li>
                    <Link className="a" to="/ebooks">
                        Ebooks
                    </Link>
                </li>

                <li>
                    <Link className="a" to="/AudioBooks">
                        Audiobooks
                    </Link>
                </li>

                <li>
                    <Link className="a" to="/ForRent">
                        For rent
                    </Link>
                </li>

                <li>
                    <Link className="a" to="/Coursebook">
                        Coursebooks
                    </Link>
                </li>

                <li>
                    <Link className="a" to="/Comics">
                        Comics
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;