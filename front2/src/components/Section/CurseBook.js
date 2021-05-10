
import React,{Component} from 'react';
import Lista from "./lista/Lista";
import BookC from "./Book/BookC";
export class CurseBook extends Component{
    render() {
        return (
            <div className={"section"}>
                <div className="Content">
                    <Lista/>
                    <BookC/>
                </div>

            </div>

        );
    }
}

export default CurseBook;
