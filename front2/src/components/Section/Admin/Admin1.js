import React, {Component, useState} from 'react';

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Admin.css'
import axios from "axios";
import { useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";

const api = axios.create({
    baseURL: `http://localhost:8080/`
})
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
    const decode = jwt_decode(localStorage.getItem("token"))
    const auth = useSelector(state => state.auth);
    const history = useHistory();
    if (!auth.login) {
        history.push("/");
    }
    if(decode.role == "USER"){
        history.push("/");
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values)
    };

    const handleSubmit = e => {
        e.preventDefault()
        // const config = {
        //     headers: {
        //         "Authorization": "Bearer " + localStorage.getItem('token')
        //     }
        // }

        if (decode.role == "ADMIN") {
            api.post("book/AddBook", values).then(
                res => {
                    console.log(res);
                }
            ).catch(
                err => {
                    console.log(err);
                }
            )
        }

    };
    return (

        <form onSubmit={handleSubmit} className="Back3">
            <h3>Add Book</h3>

            <div className={"form-group"}>
                <label>Title</label>
                <input type="text" className="form-control" placeholder="category" name={"title"}
                       value={values.title}
                       onChange={handleChange}/>
            </div>
            <div className={"form-group"}>
                <label>Description</label>
                <input class="form-control" type="text" id="inputPassword2" placeholder="Description"
                       name={"description"}
                       value={values.description}
                       onChange={handleChange}/>
            </div>
            <div className={"form-group"}>
                <label>Price</label>
                <input className="form-control" type="text" id="inputPassword2" placeholder="price" name={"price"}
                       value={values.price}
                       onChange={handleChange}/>
            </div>
            <div className={"form-group"}>
                <label>QUANTITY</label>
                <input className="form-control" type="text" id="inputPassword2" placeholder="QUANTITY" name={"quantity"}
                       value={values.quantity}
                       onChange={handleChange}/>
            </div>


            <div className={"form-group2"}>
                <label>type</label>
                <select value={values.type} onChange={handleChange} name={"type"}>
                    <option value="AudioBook">AudioBook</option>
                    <option value="Comics">Comics</option>
                    <option value="Course">Course</option>
                    <option value="Ebooks">Ebooks</option>
                    <option value="ForRent">ForRent</option>
                </select>
            </div>
            <div className={"form-group"}>
                <label>Img</label>
                <input type="text" className="form-control" placeholder="./img/1.jpg" name={"img"}
                       value={values.img}
                       onChange={handleChange}/>
            </div>
            <div className={"form-group"}>
                <label>name</label>
                <input type="text" className="form-control" placeholder="name" name={"author.name"}
                       value={values.author.name}
                       onChange={handleChange}/>
            </div>
            <div className={"form-group"}>
                <label>surname</label>
                <input type="text" className="form-control" placeholder="surname" name={"author.surname"}
                       value={values.author.surname}
                       onChange={handleChange}/>
            </div>
            <div className={"form-group"}>
                <label>publishing_house</label>
                <input type="text" className="form-control" placeholder="publishing_house"
                       name={"author.publishing_house"}
                       value={values.author.publishing_house}
                       onChange={handleChange}/>
            </div>
            <button className="btn btn-danger btn-lg ">Add Book</button>

        </form>
    );
}



