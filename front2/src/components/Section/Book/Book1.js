import One from "../../img/1.jpg";
import React, {Component, useEffect,useState} from "react";
import './Book.css'
import axios from "axios";


class Book1 extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            book: {
                id:props.book.id,
                title:props.book.title

            }
        }


    }


    render()
    {
        return (

            <div className="Books">

                <div className={"image"}>
                    <img className={"ImgBook"} src={One} alt={""}/>

                </div>

                    <div className={"content"}>
                       <div>
                           {
                               this.state.book.title
                           }
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
