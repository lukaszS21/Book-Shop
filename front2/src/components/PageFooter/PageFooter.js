import React,{Component} from 'react';

import './PageFooter.css'
import logo3 from "../../logo3.png";


class PageFooter extends Component{
    render() {
        return(

            <nav className="PageFooter">
                    <div className={"foot"}>
                        <img src={logo3} alt=""/>
                        Kontakt

                        <i className="fa fa-phone">508963621</i>
                        <i className="fa fa-envelope">lukaszstolarz@op.pl</i>
                        <i className="fa fa-clock">poniedziałek-piątek 11:00-23:00</i>
                    </div>
                    <div className={"text"}>

                    </div>

            </nav>
        )
    }
}
export default PageFooter