import React, { Component } from 'react';
import OverviewPage from './OverviewPage';
import FrontView from './FrontView';
import './Home.css';

class Home extends Component {
  render() {
  	const projects = this.props.data
  	const view = projects.map(project=>{
  		return( <FrontView {...project} /> )
  	});
    return (
      <div className="Home">
        <figure className="profile"><img width = "150px" src = "me.jpg"/></figure>
        
        <p className="About">I’m a programmer, game designer, and writer who likes to find creative ways to combine these three disciplines. </p>
        <div className="allProjects">
        	{view}
        </div>
      </div>
    );
  }
}

export default Home;
