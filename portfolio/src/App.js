import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';
import ProjectData from './ProjectData.json';

import Home from './Home';
import OverviewPage from './OverviewPage';
import Resume from './Resume';
import Thumbnail from './Thumbnail'
import ProjectPage from './ProjectPage';

class App extends Component {

  constructor(props){
    super(props);
    
    const projects = ProjectData.ProjectData.map((p,key)=>{
      return p
    });
    
    this.state = {
      projects: projects   
    };
  }
  render() {

    const Projects = this.state.projects.slice();

    const games = Projects.filter(project=>{
      return project.type.match("games");
    });
    const media = Projects.filter(project=>{
      return project.type.match("media");
    });

    return (
      <Router>
        <div className="App">
          <header className = "Header">

            <Link to ="/" className = "title">Mari Allison</Link>
            <img src="/pixelephant.png" height="50px"/>
            <Link to ="/">Home</Link>
            <Link to ="/games">Games</Link>
            <Link to ="/media">Multimedia</Link>
            <Link to ="/resume">Resume</Link>
          </header>

          <Route exact path = "/resume" component = {Resume} />

          <Route exact path = "/" 
            render= {props => {
              return <Home data ={this.state.projects} />}
            }
          />
          
          <Route exact path="/games"
            render={props => {
              return <OverviewPage data={games} />}
            }
          />
          <Route exact path="/media"
            render={props => {
              return <OverviewPage data={media} />}
            }
          />

          <Route path="/:type/:urlName"
            render={props => {
              const project = this.state.projects.find(
                p => p.urlName == props.match.params.urlName
              );

              return <ProjectPage project={project} />;
            }}
          />

        </div>
      </Router>
    );
  }
}

export default App;
