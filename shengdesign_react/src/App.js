import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Test from './component/test_environment/test';

//import script
import "./index.css";
import Navigation from './component/Navigation/navigation';

//import pages
import Home from "./pages/home/home";
import Works from "./pages/works/works";
import About from "./pages/about/about";

//import component
//import Navigation from "./component/Navigation/navigation";



function App() {
  return (
      <div className="App">
        <Navigation />
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Works" component={Works}/>
            <Route path="/About" component={About}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
