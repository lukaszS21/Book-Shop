
import React,{Component} from 'react';
import Lista from "./lista/Lista";
import Book from "./Book/Book";
export class CurseBook extends Component{
    render() {
        return (
            <div className={"section"}>
                <div className="Content">
                    <Lista/>
                    <Book/>
                </div>

            </div>

        );
    }
}

export default CurseBook;
