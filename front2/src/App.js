import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section";
import PageFooter from "./components/PageFooter/PageFooter";
import {BrowserRouter as Router} from 'react-router-dom'
import {Redirect, Route} from 'react-router';
import axios from 'axios';
import {BrowserRouter, Switch} from 'react-router-dom';
import home from "./components/Section/home";
import AudioBooks from "./components/Section/Book_List/AudioBooks";
import Ebooks from "./components/Section/Book_List/Ebooks";
import CurseBook from "./components/Section/Book_List/CurseBook";
import Comics from "./components/Section/Book_List/Comics"
import Help from "./components/Section/Help";
import login from "./components/Section/User/login";
import register from "./components/Section/User/register";
import homeLog from "./components/Section/HomeLog";
import Admin from "./components/Section/Admin/Admin"
import myAcount from "./components/Section/User/myAcount";
import AccountSettings from "./components/Section/User/myAcount";
import Cart from "./components/Section/Basket/Cart";
class App extends React.Component{



    render() {

      return (
        <>
            <BrowserRouter>
                <div className={"page"}>
                <Route exact path={'/'}>
                    <Redirect to={'/home'}/>
                </Route>
                <Navbar />
                <Switch>
                    <Route path='/home' exact  component={home}/>
                    <Route path='/homeLog' exact  component={homeLog}/>
                    <Route path='/Ebooks' component={Ebooks}/>
                    <Route path='/AudioBooks' component={AudioBooks}/>
                    <Route path='/ForRent' component={Ebooks}/>
                    <Route path='/Coursebook' component={CurseBook}/>
                    <Route path='/Comics' component={Comics}/>
                    <Route path='/Login' component={login}/>
                    <Route path='/Help' component={Help}/>
                    <Route path='/register' component={register}/>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/myAcount' component={ AccountSettings}/>
                    <Route path='/Cart' component={ Cart}/>

                </Switch>
                <PageFooter/>
                </div>
            </BrowserRouter>

        </>

      );
  }
}

export default App;
