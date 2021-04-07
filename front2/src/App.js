import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section";
import PageFooter from "./components/PageFooter/PageFooter";
import {BrowserRouter as Router} from 'react-router-dom'
import {Redirect, Route} from 'react-router';

class App extends React.Component{
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
