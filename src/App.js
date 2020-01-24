import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from './components/login';
import DashBoard from './components/dashBoardComponent';
import './App.css';
function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Admin}></Route>
          <Route path="/dashBoardComponent"component={DashBoard}></Route>
        </Switch>
      </Router>
  );
}

export default App;
