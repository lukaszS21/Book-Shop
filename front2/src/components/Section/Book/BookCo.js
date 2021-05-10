
import React,{Component} from 'react';
import './Book.css'
import One from "../../img/1.jpg"
import Book1 from "./Book1"
import BookServices from "./BookServices";
import axios from "axios";

export class BookCo extends Component{
    constructor(props) {
        super(props);
        this.state={
            books:[]}

    }
    componentDidMount()
    {
        this.loadBooks().then(data=>{

            this.setState({books:data.data})
        })
    }
    loadBooks()
    {

        const result=axios.get("http://localhost:8080/Comics");
        return result;


    }


    render() {

        return (
            <div className="section3">
                <div className="Content2">
                    {
                        this.state.books.map(
                            book=>
                                <Book1 book={book}/>
                        )
                    }

                </div>
            </div>

        );
    }
}

export default BookCo;
