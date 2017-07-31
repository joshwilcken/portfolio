import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='headerWrapper'>
                <h1>Joshua Wilcken</h1>
                <div>
                    <p>About</p>
                    <a href='#skills'><p>Skills</p></a>
                    <p>Projects</p>
                </div>
            </div>
        );
    }
}

export default Header;