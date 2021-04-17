import React,{Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Menulog} from "./Menulog";
import logo3 from "../../logo3.png";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (



            <nav className="NavbarItems">

                <header className="App-header">
                    <ul className={"li2"}>

                        <Link className='a' to='/login'>
                            MyAcount
                        </Link>
                        <Link className='a' to='/Help'>
                            Help
                        </Link>
                        <Link className='a' to='/login'>
                            Login/Register
                        </Link>
                    </ul>
                </header>
                    <div className="Search">

                        <img src={logo3} alt=""/>

                        <input type="text" placeholder="search" name="serch"></input>

                        <p>
                            <i className="fa fa-cart-arrow-down"></i>
                            <li3>
                                <a className={"nav-links"} href={"Cart"}>{"Cart"}

                                </a>
                            </li3>

                        </p>
                    </div>
                        <ul className={"navi"}>
                            <li>
                                <Link className='a' to='/home'>
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link className='a' to='/ebooks'>
                                    ebooks
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