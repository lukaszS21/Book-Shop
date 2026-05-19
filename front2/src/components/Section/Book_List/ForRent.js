import React, { Component } from "react";
import "../Section.css";
import Lista from "../lista/Lista";
import BookF from "../Book/BookF";

export class ForRent extends Component {
    render() {
        return (
            <div className="section">
                <div className="catalogHeader">
                    <span className="catalogEyebrow">Flexible reading</span>
                    <h1>Books for rent</h1>
                    <p>
                        Rent books easily and enjoy reading without buying every title.
                    </p>
                </div>

                <div className="Content catalogLayout">
                    <Lista />
                    <BookF />
                </div>
            </div>
        );
    }
}

export default ForRent;