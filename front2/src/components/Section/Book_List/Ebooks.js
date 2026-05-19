import React, { Component } from "react";
import "../Section.css";
import Lista from "../lista/Lista";
import BookE from "../Book/BookE";

export class Ebooks extends Component {
    render() {
        return (
            <div className="section">
                <div className="catalogHeader">
                    <span className="catalogEyebrow">Digital library</span>
                    <h1>Ebooks</h1>
                    <p>
                        Browse our ebook collection and find your next favorite title.
                    </p>
                </div>

                <div className="Content catalogLayout">
                    <Lista />
                    <BookE />
                </div>
            </div>
        );
    }
}

export default Ebooks;