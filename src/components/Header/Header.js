import React, { Component } from 'react';
import './Header.css'
import ScrollableAnchor from 'react-scrollable-anchor';
import App from '../../App'

class Header extends Component {
    render() {
        return (
            <div className='headerWrapper'>
                <h1>Joshua Wilcken</h1>
                <div>
                    <a href='#about'><p>About</p></a>
                    <a href='#skills'><p>Skills</p></a>
                    <a href='#projects'><p>Projects</p></a>
                </div>
            </div>
        );
    }
}

export default Header;