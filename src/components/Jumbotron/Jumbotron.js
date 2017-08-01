import React, { Component } from 'react';
import './jumbotron.css';
import Typist from 'react-typist';



class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className='jumbotronBackground'>
                    <Typist className='typing' startDelay={2000} avgTypingSpeed={100}>
                        Welcome! Thank you for visiting. Take a look around.
                    </Typist>
                </div>
            </div>
        );
    }
}

export default Jumbotron;