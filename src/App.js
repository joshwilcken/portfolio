import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Skills from './components/Skills/Skills';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import About from './components/About/About';
import Parellax from './components/Parellax/Parellax';
import Projects from './components/Projects/Projects';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Footer from './components/Footer/Footer'


configureAnchors({offset: -70, scollDuration: 5000})



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <ScrollableAnchor id={'about'}><About /></ScrollableAnchor>
        <Landing />
        <ScrollableAnchor id={'skills'}><Skills /></ScrollableAnchor>
        <Parellax />
        <ScrollableAnchor id={'projects'}><Projects /></ScrollableAnchor>
        <Footer />
      </div>

    );
  }
}

export default App;
