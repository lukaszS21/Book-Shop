import React from "react";
import axios from "axios";
import Basket from "./Basket";
import "./Cart.css";
import { Link } from "react-router-dom";

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.loadBooks().then(data => {
            this.setState({ books: data.data });
        });
    }

    loadBooks() {
        return axios.get("http://localhost:8080/GetListBook/" + localStorage.getItem("id"));
    }

    render() {
        return (
            <div className="cart">
                <div className="cartHeader">
                    <span className="cartEyebrow">Your order</span>
                    <h1>Cart</h1>
                    <p>Review selected books before completing your purchase.</p>
                </div>

                <div className="cartContent">
                    {this.state.books.length > 0 ? (
                        this.state.books.map(book => (
                            <div className="cart2" key={book.id}>
                                <Basket book={book} />
                            </div>
                        ))
                    ) : (
                        <div className="emptyCart">
                            <span>🛒</span>
                            <h2>Your cart is empty</h2>
                            <p>Add something interesting and come back here.</p>
                        </div>
                    )}
                </div>

                <div className="cartActions">
                    <Link className="buy" to="/Buy">
                        <span>Buy now</span>
                        <i className="fa fa-arrow-right" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Cart;