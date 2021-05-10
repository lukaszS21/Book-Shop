
import React,{Component} from 'react';
import Lista from "./lista/Lista";
import BookCo from "./Book/BookCo";
export class Comics extends Component{
    render() {
        return (
            <div className={"section"}>
                <div className="Content">
                <Lista/>
                <BookCo/>
                </div>
            </div>

        );
    }
}

export default Comics;
