import React, { Component } from "react";
import "./Lista.css";

export class Lista extends Component {
    render() {
        const categories = [
            "Sport",
            "Science",
            "Medicine",
            "Informatics",
            "Law",
            "Art",
            "Science Fiction",
            "Fantasy",
            "Biographies",
            "Romance",
            "Recipes",
            "Children",
            "History",
            "Mystery",
            "Music",
            "Religion"
        ];

        return (
            <aside className="categoryPanel">
                <div className="categoryHeader">
                    <span>Categories</span>
                    <p>Choose your favorite topic</p>
                </div>

                <div className="categoryList">
                    {categories.map(category => (
                        <span className="categoryItem" key={category}>
                            {category}
                        </span>
                    ))}
                </div>
            </aside>
        );
    }
}

export default Lista;