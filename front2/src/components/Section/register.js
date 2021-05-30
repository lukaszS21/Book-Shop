
import React,{Component} from 'react';
import './register.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
export class register extends Component{
    handleSubmit=event=>{
        event.preventDefault()
        console.log("tu")
        const user={
            email:this.email,
            password:this.password,
            password_confirm:this.confirmPassword,
            first_name:this.name,
            last_name:this.surname
        };
        console.log(user);
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
                        <h3>Sing Up</h3>

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
