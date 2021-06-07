
import React, {Component, useEffect,useState} from "react";
import './Book.css'
import axios from "axios";



class Book1 extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            book: {
                id_BOOK:props.book.id_BOOK,
                title:props.book.title,
                description:props.book.description,
                price:props.book.price,
                img:props.book.img,
                author:props.book.author

            },


        }
        console.log(this.state.book);
    }
    handleSubmit=event=>{
        event.preventDefault()

        axios.post("/addToBasket/"+this.state.book.id_BOOK+"/"+localStorage.getItem("id")).then(
            res=>{
                console.log(res);
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )

    };

    render()
    {
        return (
            <form onSubmit={this.handleSubmit} className="Books">

                <div className={"image"}>
                    <img className={"ImgBook"} src={this.state.book.img} />
                </div>
                    <div className={"content"}>
                       <div>
                           {this.state.book.title}
                       </div>
                        <div className={"space2"}>
                            {this.state.book.author.name}
                            <div className={"space3"}>
                                {this.state.book.author.surname}
                            </div>
                        </div>
                        <div>
                            {this.state.book.author.publishing_house}
                        </div>
                        <div>
                            {this.state.book.description}

                        </div>

                    </div>
                    <div className={"add_cart"}>
                        <div className={"shop"}>
                            <button>Add</button>
                            <i className="fa fa-cart-arrow-down"></i>
                            {this.state.book.price}
                        </div>
                    </div>
            </form>
        );
    }
}


export default Book1;
