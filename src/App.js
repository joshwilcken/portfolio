import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing/Landing' 
import Skills from './components/Skills/Skills'
import Header from './components/Header/Header'
import Jumbotron from './components/Jumbotron/Jumbotron'
import About from './components/About/About'
import Parellax from './components/Parellax/Parellax'
import Projects from './components/Projects/Projects'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <About />
        <Landing />
        <Skills />
        <Parellax />
        <Projects />
      </div>

    );
  }
}

export default App;
