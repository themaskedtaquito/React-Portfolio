import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './Thumbnail.css';

class Thumbnail extends Component {
  render() {
    return (
      
        <Link className="Thumbnail" to = {"/"+this.props.type +"/"+this.props.urlName}>
          <div>         
          <img width = "250px" height = "250px" src = {this.props.thumbnail}/>   
               
          <div className = "Overview">                        
            <h3>{this.props.name}</h3>
            <p>{this.props.overview}</p>
          </div>
          </div>   
        </Link>
         
    );
  }
}

export default Thumbnail;
