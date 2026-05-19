import React from "react";
import "./Book.css";
import axios from "axios";

class Book1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {
                id_BOOK: props.book.id_BOOK,
                title: props.book.title,
                description: props.book.description,
                price: props.book.price,
                img: props.book.img,
                author: props.book.author
            }
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post("/addToBasket/" + this.state.book.id_BOOK + "/" + localStorage.getItem("id")).then(
            response => {
                console.log(response);
            }
        ).catch(
            error => {
                console.log(error);
            }
        );
    };

    render() {
        const { book } = this.state;
        const authorName = book.author ? book.author.name : "";
        const authorSurname = book.author ? book.author.surname : "";
        const publishingHouse = book.author ? book.author.publishing_house : "";

        return (
            <form onSubmit={this.handleSubmit} className="Books">
                <div className="bookImageWrapper">
                    <img className="ImgBook" src={book.img} alt={book.title} />
                </div>

                <div className="content">
                    <h2>{book.title}</h2>

                    <div className="bookMeta">
                        <span>{authorName} {authorSurname}</span>
                        <span>{publishingHouse}</span>
                    </div>

                    <p>{book.description}</p>
                </div>

                <div className="add_cart">
                    <div className="priceBox">
                        <span className="priceLabel">Price</span>
                        <strong>{book.price}</strong>
                    </div>

                    <button className="addToCartButton" type="submit">
                        <span>Add</span>
                        <i className="fa fa-cart-arrow-down" />
                    </button>
                </div>
            </form>
        );
    }
}

export default Book1;