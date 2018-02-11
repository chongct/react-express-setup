import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/App.css';

import PlaceListContainer from '../containers/PlaceListContainer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Router>
        <Route exact path='/' component={PlaceListContainer} />
      </Router>
    </div>
  )
};

export default App;
