
import React,{Component} from 'react';
import Lista from "./lista/Lista";
import Book from "./Book/Book";
export class Ebooks extends Component{
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

export default Ebooks;
