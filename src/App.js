import React, {useState} from 'react';
import Login from './Login';
import Reg from './Reg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
return (
    <Router>
                <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/reg" exact component={Reg}/>
              

          </Switch>
       
  </Router>
  )  
}
export default App