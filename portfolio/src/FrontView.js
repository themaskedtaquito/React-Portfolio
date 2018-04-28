import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './FrontView.css';

class FrontView extends Component {
  render() {
    return (
      <div className = "FrontView">
        <Link className="FrontView" to = {"/"+this.props.type +"/"+this.props.urlName}>
          <div className="FrontView">         
            <img height="300px"src = {this.props.images[0]}/>   
                                        
              <h3>{this.props.name}</h3>
              
          </div>   
        </Link>
        <p>{this.props.overview}</p>
        <div className="bottomborder"> </div>
      </div>
         
    );
  }
}

export default FrontView;
