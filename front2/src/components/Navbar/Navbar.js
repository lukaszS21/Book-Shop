import React, {Component, useEffect, useState} from 'react';

import './Navbar.css'

import logo3 from "../../logo3.png";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {signout} from "../Autorisation/LoginAuth";
import jwt_decode from "jwt-decode";
function Navbar () {
    const [clicked, setClicked] = useState(false);

    const handleClick = () =>setClicked(!clicked);


    const changeClicked = () => setClicked(!clicked);
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () => {


        dispatch(signout()).then(() => {
            history.replace('/');
            setStatus(false);
            setInfo({role: "NULL", name: "NULL"});
        })
        if(localStorage.getItem("token") === null){
            setClicked(false);
        }
    }
    const [decode,setDecode]=useState({role: "NULL", name:"NULL"});
    const [info, setInfo] = useState({role: "NULL", name: "NULL"})
    const [status, setStatus] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            const token= localStorage.getItem("token");
            setDecode(jwt_decode(token)) ;
            setInfo(jwt_decode(token)) ;
            setStatus(true);
            console.log(info);
        }
        console.log(info);
    }, [status, auth.login]);

        return (
            <nav className="NavbarItems">
                <header className="App-header">
                    {/*<ul className={clicked ? "nav-menu-active:":"li2"}>*/}
                    <ul className="li2">

                        {decode.role==="ADMIN"?(
                            <li className={"nav"}>
                                <i className="fa fa-user"></i>
                                <Link className='a' to='/admin' onClick={handleClick}>
                                    adminPanel
                                </Link>
                            </li>
                        ):null}

                       <li className={"nav"}>
                           <i className="fa fa-question-circle" styleName={"icon"}></i>
                           <Link className='a' to='/Help' onClick={handleClick}>
                               Help
                           </Link>
                       </li>

                        {(auth.login) ? (

                            <li className={"nav"}>
                                <i className="fa fa-user"></i>
                                <Link className='a' to='/myAcount' onClick={handleClick}>
                                    {decode.name}
                                </Link>
                            </li>

                        ) : (
                            null

                        )}

                        {(auth.login) ? (
                            <li className={"nav"}>
                                <i className="fa fa-user"></i>
                                <Link className='a' to='/home' onClick={handleLogout}>
                                    logout
                                </Link>
                            </li>

                        ) : (
                            <li className={"nav"}>
                                <i className={"fa fa-sign-in"}  ></i>
                                <Link className='a' to='/login' onClick={handleClick}>
                                    Login/Register
                                </Link>
                            </li>

                        )}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}></div>
                </header>
                    <div className="Search">

                        <img src={logo3} alt=""/>

                        <input type="text" placeholder="search" name="serch"></input>

                        <p>
                            <i className="fa fa-cart-arrow-down"></i>
                            <div className={"li3"}>
                                <a className={"nav-links"} href={"Cart"}>{"Cart"}

                                </a>
                            </div>

                        </p>
                    </div>
                        <ul className={"navi"}>
                            <li>
                                <Link className='a' to='/home'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className='a' to='/ebooks'>
                                    Ebooks
                                </Link>

                            </li>
                            <li>
                                <Link className='a' to='/AudioBooks'>
                                   AudioBooks
                                </Link>

                            </li>
                            <li>
                                <Link className='a' to='/ForRent'>
                                   ForRent
                                </Link>
                                <Link className='a' to='/Coursebook'>
                                    Coursebook
                                </Link>
                                <Link className='a' to='/Comics'>
                                    Comics
                                </Link>
                            </li>
                        </ul>
            </nav>


        )
    }

export default Navbar