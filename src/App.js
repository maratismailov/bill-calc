import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import './bootstrap.css'
import Checks from './containers/Checks/Checks';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Checks classname='Checks-grid'/>
      </BrowserRouter>
    );
  }
}

const MapStateToProps = state => {
  return {
    
  };
};

const MapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
