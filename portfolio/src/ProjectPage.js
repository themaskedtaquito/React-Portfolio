import React, { Component } from 'react';
import './ProjectPage.css';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class ProjectPage extends Component {
  render() {
    let hasVideo;
    if(this.props.project.video){
        hasVideo=true;
      }

    let imageReel = this.props.project.images.map(img=>{
      return (
        <div>
          <img src = {img} />
        </div>
      )
    });

    if(hasVideo){
      
      imageReel.unshift(<div>
          <img src = {this.props.project.video}/>
        </div>);
    };

    return (

      <div className="ProjectPage">
        <Carousel className= "car" showThumbs = {false}  showStatus={false} infiniteLoop={true} width="600px">
          {imageReel}
        </Carousel>
        
        <div className="GRID">
          <h1 className = "name">{this.props.project.name}</h1>

          <div className = {this.props.project.type + " column"}>
            <h2>Specs</h2>
            <p>Platform: <span>{this.props.project.platform}</span></p>
            <p>Tools: <span>{this.props.project.tools}</span></p>
            <p>Language: <span>{this.props.project.language}</span></p>         
            <p>Team Size: <span>{this.props.project.team}</span></p>
            <p>Role: <span>{this.props.project.role}</span></p>
          </div>

          <div className = "details">
            <h2>Overview</h2>
            <div dangerouslySetInnerHTML={{ __html: this.props.project.description}} />
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectPage;
