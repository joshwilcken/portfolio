import React, { Component } from 'react';
import './projects.css';



class Projects extends Component {
    render() {
        return (
            <div>
                <div className='projects'>
                    <h1>Projects</h1>
                    <div className='imageContainer'>
                        <img className='hoverImage' src={require("../../Images/ChaseLandingScreenshot.png")} alt="Chase"/>
                        <div className='overlay'>
                            <h3 className='hoverTextTop'>Chase Bank Clone</h3>
                            <div className='hoverTextList'>
                               <ul>
                                    <li>React</li>
                                    <li>NodeJS</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                            <a href="https://github.com/CloneWellsFargoChase/groupProject/blob/master/ReadMe.md"><div className='hoverTextLeft'>Site</div></a>
                            <a href="https://www.youtube.com/watch?v=n25mskTcKIg&amp;t=7s"><div className='hoverTextRight'>Video Tour</div></a>
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <img className='hoverImage'src={require("../../Images/PaperTradeScreenshot.png")} alt="PaperTrade"/>
                        <div className='overlay'>
                            <h3 className='hoverTextTop'>Paper Trade Application</h3>
                            <div className='hoverTextList'>
                                <ul>
                                    <li>AngularJS</li>
                                    <li>NodeJS</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                            <a href="http://papertradeapp.herokuapp.com/"><div className='hoverTextLeft'>Site</div></a>
                            <a href="https://www.youtube.com/watch?v=6zIsZ-vQ4xY&amp;t=5s"><div className='hoverTextRight'>Video Tour</div></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;