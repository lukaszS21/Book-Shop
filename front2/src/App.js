import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section";
import PageFooter from "./components/PageFooter/PageFooter";
import {BrowserRouter as Router} from 'react-router-dom'
import {Redirect, Route} from 'react-router';
import axios from 'axios';
const api = axios.create({
    baseURL: `http://localhost:8080`
})
class App extends React.Component{
    state = {
        users: []
    }

    constructor(){
        super();
        api.get('/user').then(response => response.data)
            .then((data) => {
                this.setState({users: data})
            })

    }
  render() {

      return (

          <Router>
              <Route exact path={'/'}>
                  <Redirect to={'/home'}/>
              </Route>

              <div className="App" >
                  <Navbar/>
                  <Section/>
                  <PageFooter/>
              </div>
          </Router>
      );
  }
}

export default App;
