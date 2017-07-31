import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <div>
                <div className='aboutInfo'>
                    <a href='https://www.linkedin.com/in/joshuawilcken/'><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
                    <a href='https://github.com/joshwilcken'><i className="fa fa-github-square fa-3x" aria-hidden="true"></i></a>
                    <a href='https://www.youtube.com/channel/UC1u9VRiXatnuz179ux4eOwQ?view_as=subscriber'><i className="fa fa-youtube-play fa-3x" aria-hidden="true"></i></a>
                    <a download='../../Resume/Developer Resume.pdf'><button>Resume</button></a>
                </div>
            </div>
        );
    }
}

export default About;