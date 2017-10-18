import React, {Component} from 'react'
import './projects.css';

export default class Project extends Component {
    render() {
        return(
            <div className='imageContainer'>
                <img className='hoverImage' src={this.props.image} alt=""/>
                <div className='overlay'>
                    <h3 className='hoverTextTop'>{this.props.projectName}</h3>
                    <div className='hoverTextList'>
                    <ul>
                            <li>{this.props.projectFramework}</li>
                            <li>{this.props.projectBackend}</li>
                            <li>{this.props.projectDatabase}</li>
                        </ul>
                    </div>
                    <a href={this.props.link}><div className='hoverTextLeft'>Site</div></a>
                    <a href={this.props.youTubeLink}><div className='hoverTextRight'>Video Tour</div></a>
                </div>
            </div>
        )
    }
}