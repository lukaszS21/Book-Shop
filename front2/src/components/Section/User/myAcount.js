import React from "react";
import axios from "axios";
import "./myAcount.css";

class myAcount extends React.Component {
    handleSubmit = event => {
        event.preventDefault();

        const user = {
            userDetails: {
                username: this.name,
                surname: this.surname,
                phone: this.phone,
                adres: this.adres
            }
        };

        axios.put("/api/users/UserDetails/" + localStorage.getItem("id"), user).then(
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
            <div className="settings">
                <section className="accountCard">
                    <div className="accountHeader">
                        <span className="accountEyebrow">Profile</span>
                        <h1>Account settings</h1>
                        <p>Update your personal details and delivery information.</p>
                    </div>

                    <form
                        className="accountSettings-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="accountFormGrid">
                            <div className="accountField">
                                <label className="accountSettings-label">Name</label>
                                <input
                                    name="username"
                                    className="input-account"
                                    placeholder="Enter your name"
                                    onChange={event => this.name = event.target.value}
                                    type="text"
                                />
                            </div>

                            <div className="accountField">
                                <label className="accountSettings-label">Last name</label>
                                <input
                                    name="surname"
                                    className="input-account"
                                    placeholder="Enter your last name"
                                    onChange={event => this.surname = event.target.value}
                                    type="text"
                                />
                            </div>

                            <div className="accountField">
                                <label className="accountSettings-label">Phone</label>
                                <input
                                    name="phone"
                                    className="input-account"
                                    placeholder="Enter your phone number"
                                    onChange={event => this.phone = event.target.value}
                                    type="text"
                                />
                            </div>

                            <div className="accountField">
                                <label className="accountSettings-label">Address</label>
                                <input
                                    name="adres"
                                    className="input-account"
                                    placeholder="Enter your address"
                                    onChange={event => this.adres = event.target.value}
                                    type="text"
                                />
                            </div>
                        </div>

                        <button className="accountSettings-btn" type="submit">
                            Save changes
                        </button>
                    </form>
                </section>
            </div>
        );
    }
}

export default myAcount;