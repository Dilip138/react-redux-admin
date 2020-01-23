import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from './components/login';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
