import React, { Component } from 'react';
import Project from './Project/Project'
import './projects.css';

class Projects extends Component {
    render() {
        return (
            <div className='projectsWrapper'>
                <h1 className='projectTitle'>Projects</h1>
                <div className='projects'>
                    <Project
                        image={require("../../Images/ChaseLandingScreenshot.png")}
                        projectName={'Chase Bank Clone'}
                        projectLink={"https://chase-clone.herokuapp.com/"}
                        youTubeLink={"https://www.youtube.com/watch?v=n25mskTcKIg&amp;t=7s"}
                        projectFramework={"React"}
                        projectBackend={"NodeJS"}
                        projectDatabase={"PostgreSQL"}
                        />
                    <Project 
                        image={require("../../Images/PaperTradeScreenshot.png")}
                        projectName={"Paper Trade Application"}
                        projectLink={"http://papertradeapp.herokuapp.com/"}
                        youTubeLink={"https://www.youtube.com/watch?v=6zIsZ-vQ4xY&amp;t=5s"}
                        projectFramework={"AngularJS"}
                        projectBackend={"NodeJS"}
                        projectDatabase={"PostgreSQL"}/>
                    <Project 
                        image={require("../../Images/YoutubeClone.png")}
                        projectName={"Youtube Clone"}
                        projectLink={"http://joshwilcken-youtubelone.surge.sh/"}
                        youTubeLink={"https://github.com/joshwilcken/youtubeClone"}
                        projectFramework={"React"}
                        projectBackend={"BootstrapUI"}
                        projectDatabase={"HTML/CSS"}/>
                </div>
            </div>
        );
    }
}

export default Projects;