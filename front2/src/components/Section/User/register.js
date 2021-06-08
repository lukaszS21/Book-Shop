
import React,{Component} from 'react';
import './register.css'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import {Link} from "react-router-dom";
export class register extends Component{
    handleSubmit=event=>{
        event.preventDefault()
        console.log("tu")
        const user={
            email:this.email,
            password:this.password,
            password_confirm:this.confirmPassword,
            userDetails:{
                username:this.name,
                surname:this.surname
            }

        };
        console.log(user);
        alert("User created succesful")
        axios.post("home/registration",user).then(
            res=>{
                console.log(res);
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )

    };
    render() {
        return (
                <form  onSubmit={this.handleSubmit} className="Back2">
                    <div className="Login">

                        <div className="Login2" >
                            <Link  className="Logintext" to='/login'>
                                LogIn
                            </Link>
                        </div>

                        <div className="colorText" >
                            <Link  className="colorText"  to='/register'>
                                SignUP
                            </Link>

                        </div>
                    </div>
                    <div className={"form-group"}>
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email"
                            onChange={event => this.email=event.target.value}/>
                        </div>
                        <div className={"form-group"}>
                            <label>Password</label>
                            <input  class="form-control" type="password"  id="inputPassword2" placeholder="Password"
                                   onChange={event => this.password=event.target.value}/>
                        </div>
                    <div className="form-group ">
                        <label for="inputPassword4">ComfirmPassword</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="ComfirmPassword"
                               onChange={event => this.confirmPassword=event.target.value}/>
                    </div>
                        <div className={"form-group"}>
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Name"
                                   onChange={event => this.name=event.target.value}/>
                        </div>
                        <div className={"form-group"}>
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name"
                                   onChange={event => this.surname=event.target.value}/>
                        </div>
                        <button className="btn btn-danger btn-lg ">Sing UP</button>
                </form>
        );
    }
}

export default register;
