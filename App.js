import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Map from './components/Map/Map.js';
import Loading from './components/Loading/Loading.js';
class App extends Component {
  renderMap(coords){
    return coords ? (<Map mapCoords={coords}/>) : <Loading/>;
  }
  render() {
    const coords = {x:10, y:20}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.renderMap(coords)}

      </div>
    );
  }
}

export default App;
