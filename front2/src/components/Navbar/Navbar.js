import React, {Component, useEffect, useState} from 'react';

import './Navbar.css'

import logo3 from "../../logo3.png";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {signout} from "../Autorisation/LoginAuth";
import jwt_decode from "jwt-decode";
function Navbar () {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () => {
        dispatch(signout()).then(() => {
            history.push("/");
        });
    }
    const [decode,setDecode]=useState({role: "NULL", name:"NULL"});
    useEffect(() => {
    if (auth.login) {
    const token= auth.auth.second;
    setDecode(jwt_decode(token)) ;

}
}, [auth.login]);

        return (



            <nav className="NavbarItems">

                <header className="App-header">
                    <ul className={"li2"}>

                        {decode.role==="ADMIN"?(
                            <div className={"nav"}>
                                <i className="fa fa-user"></i>
                                <Link className='a' to='/admin'>
                                    adminPanel
                                </Link>
                            </div>
                        ):null}

                       <div className={"nav"}>
                           <i className="fa fa-question-circle" styleName={"icon"}></i>
                           <Link className='a' to='/Help'>
                               Help
                           </Link>
                       </div>


                        {(auth.login) ? (

                            <div className={"nav"}>
                                <i className="fa fa-user"></i>
                                <Link className='a' to='/myAcount'>
                                    {decode.name}
                                </Link>
                            </div>

                        ) : (
                            null

                        )}

                        {(auth.login) ? (

                            <div className={"nav"}>
                                <i className="fa fa-user"></i>
                                <Link className='a' to='/home'>
                                    logout
                                </Link>
                            </div>

                        ) : (
                            <div className={"nav"}>
                                <i className={"fa fa-sign-in"}  ></i>
                                <Link className='a' to='/login'>
                                    Login/Register
                                </Link>
                            </div>

                        )}

                    </ul>
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