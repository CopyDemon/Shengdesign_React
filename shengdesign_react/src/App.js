import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Test from './component/test_environment/test';

//import script
import "./index.css";
import Site_banner from "./component/Site_banner/Site_banner";

//import pages
import Home from "./pages/home/home";
import Works from "./pages/works/works";
import About from "./pages/about/about";

//import component
//import Navigation from "./component/Navigation/navigation";



function App() {
  return (
      <div className="App">
        <Site_banner/>
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
