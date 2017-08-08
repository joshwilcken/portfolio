import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <div className='aboutSection'>
                <div className='picandText'>
                    <img className='myPhoto' src={require("../../Images/myPicture.jpg")} alt="Me"/>
                    <p>With a background in banking and finance, I have recently switched careers to Web Development. I am always looking to learn and improve my craft. I am excited everyday to code more. If you have any questions or would like to contact me, please send a message to <a href='mailto:joshwilcken@gmail.com'>joshwilcken@gmail.com</a></p>
                </div>
                <div className='aboutInfo'>
                    <a href='https://www.linkedin.com/in/joshuawilcken/'><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
                    <a href='https://github.com/joshwilcken'><i className="fa fa-github-square fa-3x" aria-hidden="true"></i></a>
                    <a href='https://www.youtube.com/channel/UC1u9VRiXatnuz179ux4eOwQ?view_as=subscriber'><i className="fa fa-youtube-play fa-3x" aria-hidden="true"></i></a>
                    <a href='https://docs.google.com/document/d/1t6zmS3K8CBOBXpksJQpWKdEqZumtFhSs4j1A0UWJXWw/edit?usp=sharing' target='_blank'><button>Resume</button></a>
                    {/* src={require("../../Images/PaperTradeScreenshot.png")} */}
                </div>
            </div>
        );
    }
}

export default About;