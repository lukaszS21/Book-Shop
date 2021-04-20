import One from "../../img/1.jpg";
import React, {Component} from "react";
import './Book.css'

export class Book1 extends Component{
    render() {
        return (
            <div className="Books" >
                <div className={"image"}>
                    <img className={"ImgBook"} src={One} alt={""}/>
                </div>
                <div className={"content"}>
                    <div >
                        Title
                    </div>
                    <div >
                        Author
                    </div>
                    <div >
                        Publishing house
                    </div>
                    <div className={"space"}>
                        Description
                    </div>
                </div>

                <div className={"shop"}>
                    <i className="fa fa-cart-arrow-down"></i>
                    22.0
                </div>
            </div>
        );
    }
}

export default Book1;
