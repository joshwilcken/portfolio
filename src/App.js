import React, { Component } from 'react';
import './App.css';
import Landing from './Pages/Landing/Landing' 
import Skills from './components/Skills/Skills'


class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Skills />
      </div>

    );
  }
}

export default App;
