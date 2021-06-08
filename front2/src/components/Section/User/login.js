
import React, {useState} from 'react';
import './login.css'

import {Link} from "react-router-dom";

import { signin } from '../../Autorisation/LoginAuth';
import {useDispatch, useSelector} from "react-redux";

export default function Login() {
    const [user,setUser]=useState({email:"", password:""});
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const handleSubmit = e => {

        e.preventDefault();
        dispatch(signin(user));
        alert("Login succesful")
        if(!auth.register_error){
            console.log("Wrong email or password!")
        }



    }

        return (
            <form onSubmit={handleSubmit} className="Back">
                <div className="Login">
                    <div className="Login2">
                        <text>Log In</text>
                    </div>
                    <div className="colorText" >

                        <Link  className={"colorText"}to='/register'>
                            SignUP
                        </Link>
                    </div>
                </div>
                <div className={"form-group"}>
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"
                           onChange={event => user.email = event.target.value}/>
                </div>
                <div className={"form-group"}>
                    <label>Password</label>
                    <input className="form-control" type="password" id="inputPassword2" placeholder="Password"
                           onChange={event => user.password = event.target.value}/>
                </div>
                <button className="btn btn-danger btn-lg ">Login</button>
            </form>

        );
    }



