import React, { Component } from 'react';
import repositories from './repositories';
import logo from './logo.svg';
import './App.css';

const ReposList = repositories.components.List;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Top starred repositories created last 30 days</h1>
        </header>
        <div className="content">
          <ReposList />
        </div>
      </div>
    );
  }
}

export default App;
