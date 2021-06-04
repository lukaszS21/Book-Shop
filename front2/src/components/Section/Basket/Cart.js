
import React, {Component, useEffect,useState} from "react";

import axios from "axios";
import Book1 from "../Book/Book1";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            books:[],
        }

    }
    componentDidMount()
    {
        this.loadBooks().then(data=>{

            this.setState({books:data.data})
        })
    }
    loadBooks()
    {

        const result=axios.get("http://localhost:8080/GetListBook/"+localStorage.getItem("id"));
        return result;


    }


    render()
    {
        return (

          <div>
              {
                  this.state.books.map(
                      book=>

                           <Book1 book={book} key={book.id}/>
                  )
              }
          </div>
        );
    }
}


export default Cart;
