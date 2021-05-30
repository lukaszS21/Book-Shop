
import React, {Component, useEffect,useState} from "react";
import './Book.css'



class Book1 extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            book: {
                id:props.book.id,
                title:props.book.title,
                description:props.book.description,
                price:props.book.price,
                img:props.book.img,
                author:props.book.author

            },


        }
        console.log(this.state.book);



    }


    render()
    {
        return (

            <div className="Books">

                <div className={"image"}>
                    <img className={"ImgBook"} src={this.state.book.img} />


                </div>

                    <div className={"content"}>
                       <div>
                           {
                               this.state.book.title
                           }
                       </div>
                        <div className={"space2"}>
                            {
                                this.state.book.author.name

                            }
                            <div className={"space3"}>
                                {
                                    this.state.book.author.surname
                                }
                            </div>



                        </div>
                        <div>

                            {
                                this.state.book.author.publishing_house
                            }
                        </div>
                        <div>
                            {
                                this.state.book.description
                            }
                        </div>
                        <div className={"shop"}>
                            <button>Add</button>
                            <i className="fa fa-cart-arrow-down"></i>
                            {
                                this.state.book.price
                            }
                        </div>
                    </div>




            </div>
        );
    }
}


export default Book1;
