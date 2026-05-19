import React, { Component } from "react";
import "../Section.css";
import Lista from "../lista/Lista";
import BookCo from "../Book/BookCo";

export class Comics extends Component {
    render() {
        return (
            <div className="section">
                <div className="catalogHeader">
                    <span className="catalogEyebrow">Stories with style</span>
                    <h1>Comics</h1>
                    <p>
                        Explore colorful worlds, heroes, adventures and graphic stories.
                    </p>
                </div>

                <div className="Content catalogLayout">
                    <Lista />
                    <BookCo />
                </div>
            </div>
        );
    }
}

export default Comics;