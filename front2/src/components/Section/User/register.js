import React, { Component } from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

export class register extends Component {
    handleSubmit = event => {
        event.preventDefault();

        const user = {
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword,
            userDetails: {
                username: this.name,
                surname: this.surname
            }
        };

        alert("User created successfully");

        axios.post("home/registration", user).then(
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
        return (
            <div className="registerPage">
                <form onSubmit={this.handleSubmit} className="Back2">
                    <div className="registerHeader">
                        <span className="registerEyebrow">Create account</span>
                        <h1>Sign up</h1>
                        <p>Create your account and start exploring books.</p>
                    </div>

                    <div className="registerSwitch">
                        <Link className="registerSwitchLink" to="/login">
                            Log in
                        </Link>

                        <span className="registerSwitchActive">Sign up</span>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            onChange={event => this.email = event.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Enter your password"
                            onChange={event => this.password = event.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm your password"
                            onChange={event => this.confirmPassword = event.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            onChange={event => this.name = event.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your last name"
                            onChange={event => this.surname = event.target.value}
                        />
                    </div>

                    <button className="registerButton" type="submit">
                        Sign up
                    </button>
                </form>
            </div>
        );
    }
}

export default register;