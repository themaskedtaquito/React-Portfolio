import React, { Component } from 'react';
import OverviewPage from './OverviewPage';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <figure className="profile"><img width = "150px" src = "me.jpg"/></figure>
        
        <p className="About">I’m a programmer, game designer, and writer who likes to find creative ways to combine these three disciplines. </p>
        <OverviewPage data = {this.props.data}/>
      </div>
    );
  }
}

export default Home;
