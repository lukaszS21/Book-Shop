
import React,{Component} from 'react';
import home from "./Section/home";
import AudioBooks from "./Section/AudioBooks";
import Ebooks from "./Section/Ebooks";
import ForRent from "./Section/ForRent";
import Comics from "./Section/Comics";
import CurseBook from "./Section/CurseBook";
import login from "./Section/login";
import register from "./Section/register";
import Help from "./Section/Help";
import {Route} from 'react-router-dom'
import './Section/home.css'
export class Section extends Component{
    render() {
        return (
            <div className={"section"}>
                <Route path="/home" component={home}/>
                <Route path="/Audiobooks" component={AudioBooks}/>
                <Route path="/Ebooks" component={Ebooks}/>
                <Route path="/ForRent" component={ForRent}/>
                <Route path="/Comics" component={Comics}/>
                <Route path="/CurseBook" component={CurseBook}/>
                <Route path="/login" component={login}/>
                <Route path="/register" component={register}/>
                <Route path="/Help" component={Help}/>
                <Route path="/CurseBook" component={CurseBook}/>
            </div>

        );
    }
}

export default Section;
