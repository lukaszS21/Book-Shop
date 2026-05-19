import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { signin } from "../../Autorisation/LoginAuth";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const handleChange = event => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(signin(user));
        alert("Login successful");

        if (!auth.register_error) {
            console.log("Wrong email or password!");
        }
    };

    return (
        <div className="authPage">
            <form onSubmit={handleSubmit} className="Back">
                <div className="authHeader">
                    <span className="authEyebrow">Welcome back</span>
                    <h1>Log in</h1>
                    <p>Access your account and continue shopping.</p>
                </div>

                <div className="authSwitch">
                    <span className="authSwitchActive">Log in</span>
                    <Link className="authSwitchLink" to="/register">
                        Sign up
                    </Link>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>

                <button className="authButton" type="submit">
                    Log in
                </button>
            </form>
        </div>
    );
}