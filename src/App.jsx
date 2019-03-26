import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  LocalizeProvider  } from "react-localize-redux";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';

library.add(fab, faAt)

class App extends Component {
  render() {
    return (
      <LocalizeProvider>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
     </LocalizeProvider >
    );
  }
}

export default App;
