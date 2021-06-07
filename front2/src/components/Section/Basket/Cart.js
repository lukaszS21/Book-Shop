
import React, {Component, useEffect,useState} from "react";

import axios from "axios";
import Basket from './Basket'
import "./Cart.css"
import {Link} from "react-router-dom";

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

          <div className={"cart"}>
              <div className={""}>
                  Cart:
              </div>
              {
                  this.state.books.map(
                      book=>
                          <div className={"cart2"}>
                              <Basket book={book} key={book.id}/>

                          </div>


                  )
              }

              <button className={"buy"} >
                  <Link to='/Buy'>
                      Buy
                  </Link>
              </button>

          </div>
        );
    }
}


export default Cart;
