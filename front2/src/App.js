import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section";
import PageFooter from "./components/PageFooter/PageFooter";
import {BrowserRouter as Router} from 'react-router-dom'
import {Redirect, Route} from 'react-router';
import axios from 'axios';
import {BrowserRouter, Switch} from 'react-router-dom';
import home from "./components/Section/home";
import AudioBooks from "./components/Section/AudioBooks";
import Ebooks from "./components/Section/Ebooks";
import CurseBook from "./components/Section/CurseBook";
import Comics from "./components/Section/Comics"
import Help from "./components/Section/Help";
import login from "./components/Section/login";
import register from "./components/Section/register";
const api = axios.create({
    baseURL: `http://localhost:8080`
})
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users: []
        }

    }
    componentDidMount() {
        axios.get("http://localhost:8080/users").then((response)=>{
            this.setState({users:response.data})
            console.log(this.state.users);
        });
        // api.get('/users').then(response => response.data)
        //     .then((data) => {
        //         //console.log(this.state.users);
        //         this.setState({users: data})
        //         console.log(this.state.users);
        //     })
        // console.log(this.state.users);
        // //console.log(this.state.users);


    }


    render() {

      return (
        <>
            <BrowserRouter>

                <Route exact path={'/'}>
                    <Redirect to={'/home'}/>
                </Route>
                <Navbar />
                <Switch>
                    <Route path='/home' exact  component={home}/>
                    <Route path='/Ebooks' component={Ebooks}/>
                    <Route path='/AudioBooks' component={AudioBooks}/>
                    <Route path='/ForRent' component={Ebooks}/>
                    <Route path='/Coursebook' component={CurseBook}/>
                    <Route path='/Comics' component={Comics}/>
                    <Route path='/Login' component={login}/>
                    <Route path='/Help' component={Help}/>
                    <Route path='/register' component={register}/>

                </Switch>
                <PageFooter/>
            </BrowserRouter>
            <div>

                <div>

                        {

                            this.state.users.map(
                                user =>
                                    <tr key ={user.id}>
                                        <td> {user.id}</td>
                                        <td> {user.email}</td>
                                    </tr>

                            )
                        };
                </div>
            </div>
        </>

      );
  }
}

export default App;
