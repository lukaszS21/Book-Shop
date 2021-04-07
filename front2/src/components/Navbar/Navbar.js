import React,{Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Menulog} from "./Menulog";
import logo3 from "../../logo3.png";
class Navbar extends Component{
    render() {
        return(

            <nav className="NavbarItems">
                <header className="App-header">

                        {Menulog.map((item,index)=>{
                            return(
                                <li2 key={index}>

                                    <a className={item.cName} href={item.url} >
                                        {item.title}
                                    </a>
                                </li2>
                            )
                        })}


                </header>
                <div className="Search">

                    <img src={logo3} alt=""/>

                        <input type="text" placeholder="search" name="serch" ></input>

                    <p>
                        <i className="fa fa-cart-arrow-down"></i>
                        <li3>
                            <a classNAme={"nav-links"} href={"Cart"}>{"Cart"}

                            </a>
                        </li3>

                    </p>
                </div>

                <ul className={"navi"}>
                    {MenuItems.map((item,index)=>{
                        return(
                        <li key={index}>
                            <a className={item.cName} href={item.url} >
                                {item.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar