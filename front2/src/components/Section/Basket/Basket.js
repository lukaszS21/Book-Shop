
import React, {Component, useEffect,useState} from "react";

import axios from "axios";
import './Cart.css'


class Basket extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            book: {
                id_BOOK:props.book.id_BOOK,
                title:props.book.title,
                price:props.book.price,
                author:props.book.author

            },


        }
        console.log(this.state.book);
    }

    render()
    {
        return (
            <div className="Basket">

                    <div>
                        Title:{this.state.book.title}
                    </div>
                    <div className={"Basket_space_name"}>
                        Author:{this.state.book.author.name}
                        <div className={"Basket_space_name2"}>
                            {this.state.book.author.surname}
                        </div>
                    </div>

                    <div className={"Basket_space"}>
                       Price: {this.state.book.price}
                    </div>
            </div>
        );
    }
}


export default Basket;
