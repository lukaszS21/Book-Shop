import React, { Component } from "react";
import "./PageFooter.css";
import logo3 from "../../logo3.png";

class PageFooter extends Component {
    render() {
        return (
            <footer className="PageFooter">
                <div className="footerBrand">
                    <img src={logo3} alt="Bookstore logo" />
                    <p>Your modern place for books, audiobooks and comics.</p>
                </div>

                <div className="foot">
                    <h3>Contact</h3>

                    <span>
                        <i className="fa fa-phone" />
                        +48 000 000 000
                    </span>

                    <span>
                        <i className="fa fa-envelope" />
                        support@bookstore.com
                    </span>

                    <span>
                        <i className="fa fa-clock" />
                        Monday - Friday, 11:00 - 23:00
                    </span>
                </div>
            </footer>
        );
    }
}

export default PageFooter;