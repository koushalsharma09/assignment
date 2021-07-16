import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";


const App = () => {
  return (
     <Router>
       <Navbar />

       <switch>

        <Route path="/" component={Home} exact>
          <Home/>
        </Route>

        <Route path="/About" component={About} exact>
          <About/>
        </Route>

        <Route path="/Contact" component={Contact} exact>
          <Contact/>
        </Route>



       </switch>
      </Router>
  );
};

export default App;

