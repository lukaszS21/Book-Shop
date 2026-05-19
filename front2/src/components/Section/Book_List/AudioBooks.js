import React, { Component } from "react";
import "../Section.css";
import Lista from "../lista/Lista";
import BookA from "../Book/BookA";

export class AudioBooks extends Component {
    render() {
        return (
            <div className="section">
                <div className="catalogHeader">
                    <span className="catalogEyebrow">Listen anywhere</span>
                    <h1>Audiobooks</h1>
                    <p>
                        Discover audiobooks for travel, work, study and relaxing evenings.
                    </p>
                </div>

                <div className="Content catalogLayout">
                    <Lista />
                    <BookA />
                </div>
            </div>
        );
    }
}

export default AudioBooks;