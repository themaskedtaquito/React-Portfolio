import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './FrontView.css';

class FrontView extends Component {
  render() {
    return (
      
        <Link className="FrontView" to = {"/"+this.props.type +"/"+this.props.urlName}>
          <div className="FrontView">         
            <img width = "400px" height = "200px" src = {this.props.images[0]}/>   
                                        
              <h3>{this.props.name}</h3>
              <p>{this.props.overview}</p>
          </div>   
        </Link>
         
    );
  }
}

export default FrontView;
