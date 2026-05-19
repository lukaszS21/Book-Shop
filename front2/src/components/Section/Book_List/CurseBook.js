import React, { Component } from "react";
import "../Section.css";
import Lista from "../lista/Lista";
import BookC from "../Book/BookC";

export class CurseBook extends Component {
    render() {
        return (
            <div className="section">
                <div className="catalogHeader">
                    <span className="catalogEyebrow">Learn smarter</span>
                    <h1>Coursebooks</h1>
                    <p>
                        Find coursebooks, study materials and practical learning resources.
                    </p>
                </div>

                <div className="Content catalogLayout">
                    <Lista />
                    <BookC />
                </div>
            </div>
        );
    }
}

export default CurseBook;