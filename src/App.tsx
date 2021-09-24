import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HOME_URL } from './constants/routes';
import Header from './features/Header'
import Home from './features/Home'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={HOME_URL} component={Home} />
        <Redirect to={HOME_URL} />
      </Switch>
    </div>
  );
}

export default App;
