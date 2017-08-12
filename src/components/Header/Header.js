import React, { Component } from 'react';
import './Header.css'
import ScrollableAnchor from 'react-scrollable-anchor';
import App from '../../App'

class Header extends Component {
    render() {
        return (
            <div>
                <div className='headerWrapper'>
                    <h1>Joshua Wilcken</h1>
                    <div>
                        <a href='#about'><p>About</p></a>
                        <a href='#skills'><p>Skills</p></a>
                        <a href='#projects'><p>Projects</p></a>
                    </div>
                </div>
                <div className='ham'>
                    <h1>Joshua Wilcken</h1>
                    <a><img src={require('../../Images/if_menu-alt_134216.svg')} /></a>
                </div>
            </div>
        );
    }
}

export default Header;