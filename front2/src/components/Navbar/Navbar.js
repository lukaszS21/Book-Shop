import React,{Component} from 'react';

import './Navbar.css'

import logo3 from "../../logo3.png";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (



            <nav className="NavbarItems">

                <header className="App-header">
                    <ul className={"li2"}>
                        <div className={"nav"}>
                            <i className="fa fa-user"></i>
                            <Link className='a' to='/login'>
                                MyAcount
                            </Link>
                        </div>
                       <div className={"nav"}>
                           <i className="fa fa-question-circle" styleName={"icon"}></i>
                           <Link className='a' to='/Help'>
                               Help
                           </Link>
                       </div>
                        <div className={"nav"}>
                            <i className={"fa fa-sign-in"}  ></i>
                            <Link className='a' to='/login'>
                                Login/Register
                            </Link>
                        </div>

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
}
export default Navbar