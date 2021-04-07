
import React,{Component} from 'react';
import './Section.css';
import Lista from "./lista/Lista";
import Book from "./Book/Book";
import PageFooter from "../PageFooter/PageFooter";
export class AudioBooks extends Component{
    render() {
        return (
            <section>
                    <div className="Content">
                        <Lista/>
                        <Book/>

                    </div>
            </section>

        );
    }
}

export default AudioBooks;
