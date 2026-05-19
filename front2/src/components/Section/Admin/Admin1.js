import React, { useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const api = axios.create({
    baseURL: "http://localhost:8080/"
});

export default function Admin1() {
    const [values, setValues] = useState({
        title: "",
        description: "",
        price: 0,
        quantity: 0,
        category: "",
        type: "",
        img: "",
        author: {
            name: "",
            surname: "",
            publishing_house: ""
        }
    });

    const decode = jwt_decode(localStorage.getItem("token"));
    const auth = useSelector(state => state.auth);
    const history = useHistory();

    if (!auth.login) {
        history.push("/");
    }

    if (decode.role === "USER") {
        history.push("/");
    }

    const handleChange = event => {
        const { name, value } = event.target;

        if (name.startsWith("author.")) {
            const authorField = name.split(".")[1];

            setValues({
                ...values,
                author: {
                    ...values.author,
                    [authorField]: value
                }
            });

            return;
        }

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (decode.role === "ADMIN") {
            api.post("book/AddBook", values).then(
                response => {
                    console.log(response);
                }
            ).catch(
                error => {
                    console.log(error);
                }
            );
        }
    };

    return (
        <div className="adminPage">
            <form onSubmit={handleSubmit} className="Back3">
                <div className="adminHeader">
                    <span className="adminEyebrow">Admin panel</span>
                    <h1>Add book</h1>
                    <p>Create a new product and assign it to the correct type.</p>
                </div>

                <div className="adminFormGrid">
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Book title"
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Price"
                            name="price"
                            value={values.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Quantity"
                            name="quantity"
                            value={values.quantity}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Type</label>
                        <select value={values.type} onChange={handleChange} name="type">
                            <option value="">Select type</option>
                            <option value="AudioBook">Audiobook</option>
                            <option value="Comics">Comics</option>
                            <option value="Course">Coursebook</option>
                            <option value="Ebooks">Ebook</option>
                            <option value="ForRent">For rent</option>
                        </select>
                    </div>

                    <div className="form-group adminWide">
                        <label>Description</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Description"
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group adminWide">
                        <label>Image path</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="./img/1.jpg"
                            name="img"
                            value={values.img}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Author name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Author name"
                            name="author.name"
                            value={values.author.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Author surname</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Author surname"
                            name="author.surname"
                            value={values.author.surname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group adminWide">
                        <label>Publishing house</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Publishing house"
                            name="author.publishing_house"
                            value={values.author.publishing_house}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button className="adminButton" type="submit">
                    Add book
                </button>
            </form>
        </div>
    );
}