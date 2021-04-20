
import React,{Component} from 'react';
import './Book.css'
import One from "../../img/1.jpg"
import Book1 from "./Book1"
export class Book extends Component{
    render() {
        return (
            <div className="section3">
                <div className="Content2">
                    <Book1/>
                    <Book1/>
                    <Book1/>
                    <Book1/>
                    <Book1/>
                    <Book1/>

                </div>
            </div>

        );
    }
}

export default Book;
