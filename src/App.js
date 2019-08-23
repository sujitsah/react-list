import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import Series from './containers/series';
import 'whatwg-fetch';
// import Serieslist from './containers/serieslist'

// const Intro = (props)=>(
//   <p className="App-intro">first functional component</p>
// )

class App extends Component {
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Intro className="lol"  />
        
        <Series />
      </header>
    </div>
  );
}
}

export default App;
