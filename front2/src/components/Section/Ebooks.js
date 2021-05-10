
import React,{Component} from 'react';
import Lista from "./lista/Lista";
import BookE from "./Book/BookE";
export class Ebooks extends Component{
    render() {
        return (
            <div className={"section"}>
                <div className="Content">
                    <Lista/>
                    <BookE/>
                </div>
            </div>

        );
    }
}

export default Ebooks;
