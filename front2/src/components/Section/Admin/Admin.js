
import React,{Component} from 'react';

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Admin.css'
import axios from "axios";

export class Admin extends Component{
    handleSubmit=event=>{
        event.preventDefault()
        console.log("tu2")
        const book={
            title:this.title,
            description:this.description,
            price:this.price,
            quantity:this.quantity,
            category:this.category,
            type:this.type,
            img:this.img,
            author:{
                name:this.name,
                surname:this.surname,
                publishing_house:this.publishing_house
            }


        };
        console.log(book);
        axios.post("book/AddBook",book).then(
            res=>{
                console.log(res);
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )

    };
    render() {
        return (

            <form  onSubmit={this.handleSubmit} className="Back3">
                <h3>Add Book</h3>

                <div className={"form-group"}>
                    <label>Category</label>
                    <input type="text" className="form-control" placeholder="category"
                           onChange={event => this.category=event.target.value}/>
                </div>
                <div className={"form-group"}>
                    <label>Price</label>
                    <input  class="form-control" type="text"  id="inputPassword2" placeholder="Price"
                            onChange={event => this.price=event.target.value}/>
                </div>
                <div className={"form-group"}>
                    <label>DESCRIPTION</label>
                    <input className="form-control" type="text" id="inputPassword2" placeholder="DESCRIPTION"
                           onChange={event => this.description = event.target.value}/>
                </div>
                <div className={"form-group"}>
                    <label>QUANTITY</label>
                    <input className="form-control" type="text" id="inputPassword2" placeholder="QUANTITY"
                           onChange={event => this.quantity = event.target.value}/>
                </div>
                <div className="form-group ">
                    <label for="inputPassword4">Title</label>
                    <input type="text" className="form-control" id="inputPassword" placeholder="Title"
                           onChange={event => this.title=event.target.value}/>
                </div>
                <div className={"form-group"}>
                    <label>Img</label>
                    <input type="text" className="form-control" placeholder="./img/1.jpg"
                           onChange={event => this.img=event.target.value}/>
                </div>
                {/*<div className={"form-group"}>*/}
                {/*    <label>Type</label>*/}
                {/*    <input type="text" className="form-control" placeholder="Type"*/}
                {/*           onChange={event => this.type=event.target.value}/>*/}
                {/*</div>*/}

                <div className={"form-group2"}>
                    <label>type</label>
                <select value={this.type} onChange={event => this.type=event.target.value} >
                    <option value="AudioBook">AudioBook</option>
                    <option value="Comics">Comics</option>
                    <option value="Course">Course</option>
                    <option value="Ebooks">Ebooks</option>
                    <option value="ForRent">ForRent</option>
                </select>
                </div>
                <div className={"form-group"}>
                    <label>name</label>
                    <input type="text" className="form-control" placeholder="name"
                           onChange={event => this.name=event.target.value}/>
                </div>
                <div className={"form-group"}>
                    <label>surname</label>
                    <input type="text" className="form-control" placeholder="surname"
                           onChange={event => this.surname=event.target.value}/>
                </div>
                <div className={"form-group"}>
                    <label>publishing_house</label>
                    <input type="text" className="form-control" placeholder="publishing_house"
                           onChange={event => this.publishing_house=event.target.value}/>
                </div>




                <button className="btn btn-danger btn-lg ">Add Book</button>


            </form>


        );
    }
}

export default Admin;
