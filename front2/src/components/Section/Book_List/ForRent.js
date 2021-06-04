
import React,{Component} from 'react';
import Lista from "../lista/Lista";
import BookF from "../Book/BookF";
export class ForRent extends Component{
    render() {
        return (
            <div className={"section"}>
                <div className="Content">
                    <Lista/>
                    <BookF/>
                </div>

            </div>

        );
    }
}

export default ForRent;
