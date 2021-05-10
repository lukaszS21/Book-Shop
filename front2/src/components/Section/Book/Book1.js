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
                title:props.book.title,
                description:props.book.description,
                price:props.book.price,
                author:props.book.author

            },


        }
        console.log(this.state.book);



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
                        <div>
                            {
                                this.state.book.author.name

                            }

                            {
                                this.state.book.author.surname
                            }

                        </div>
                        <div>
                            {
                                this.state.book.author.publishing_house
                            }
                        </div>
                        <div>
                            {
                                this.state.book.description
                            }
                        </div>
                        <div className={"shop"}>
                            <i className="fa fa-cart-arrow-down"></i>
                            {
                                this.state.book.price
                            }
                        </div>
                    </div>




            </div>
        );
    }
}


export default Book1;
