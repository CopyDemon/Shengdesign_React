import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Test from './component/test_environment/test';

//import pages
import Home from "./pages/home/home";
import Works from "./pages/works/works";
import About from "./pages/about/about";

//import component
import Nav from "./component/nav/nav";


function App() {
  return (
      <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/works" component={Works}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
