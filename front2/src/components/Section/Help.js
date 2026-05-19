import React, { Component } from "react";
import "./help.css";

export class Help extends Component {
    render() {
        return (
            <div className="section5">
                <section className="helpCard">
                    <div className="helpContent">
                        <span className="helpEyebrow">Support</span>
                        <h1>Need help?</h1>
                        <p>
                            Contact us if you have questions about your order, account or available books.
                        </p>
                    </div>

                    <div className="helpContact">
                        <div className="helpItem">
                            <i className="fa fa-phone" />
                            <div>
                                <span>Phone</span>
                                <strong>+48 000 000 000</strong>
                            </div>
                        </div>

                        <div className="helpItem">
                            <i className="fa fa-envelope" />
                            <div>
                                <span>Email</span>
                                <strong>support@bookstore.com</strong>
                            </div>
                        </div>

                        <div className="helpItem">
                            <i className="fa fa-clock" />
                            <div>
                                <span>Opening hours</span>
                                <strong>Monday - Friday, 11:00 - 23:00</strong>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Help;