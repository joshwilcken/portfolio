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
                            <a href=""><div className='hoverTextLeft'>Site</div></a>
                            <a href=""><div className='hoverTextRight'>Video</div></a>
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <img className='hoverImage'src={require("../../Images/PaperTradeScreenshot.png")} alt="PaperTrade"/>
                        <div className='overlay'>
                            <a href=""><div className='hoverTextLeft'>Site</div></a>
                            <a href=""><div className='hoverTextRight'>Video</div></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;