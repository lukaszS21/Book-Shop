
import React,{Component} from 'react';
import '../Section.css';
import Lista from "../lista/Lista";
import BookA from "../Book/BookA";

export class AudioBooks extends Component{
    render() {
        return (
            <div className={"section"}>
                    <div className="Content">
                        <Lista/>
                        <BookA/>

                    </div>
            </div>

        );
    }
}

export default AudioBooks;
