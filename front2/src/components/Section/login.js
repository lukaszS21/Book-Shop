
import React,{Component} from 'react';
import './login.css'
import {Link} from "react-router-dom";
import axios from "axios";
export class login extends Component{
    handleSubmit= event=> {
        event.preventDefault();

        const user = {
            email: this.email,
            password: this.password
        }
        axios.post("login",user).then(
            res=>{
                localStorage.setItem('token',res.data.token);
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )

    };


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="Back">
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
                           onChange={event => this.email = event.target.value}/>
                </div>
                <div className={"form-group"}>
                    <label>Password</label>
                    <input className="form-control" type="password" id="inputPassword2" placeholder="Password"
                           onChange={event => this.password = event.target.value}/>
                </div>

                <button className="btn btn-danger btn-lg ">Login</button>

            </form>




        );
    }
}

export default login;
