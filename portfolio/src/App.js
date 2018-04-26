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
    const projectA = {
    name: "Unowned Collected",
    overview: "A generated board game, created from the rules of several existing games.",
    thumbnail: "/UnownedCollected.png",
    urlName:"unowned",
    images:"/UnownedCollected.png",
    type:"games",
    description:"My original idea was to make a board game by using the rule sets of existing games to generate my own rules, and I've pretty much stuck with the same idea throughout the process. I wanted to do this project for two main reasons. The first is that although this class is pretty much all about writing code, I wanted to have an output that had a physical form. The second reason is that I'm really passionate about games, and although I do really love video games, I also know that board games are in a bit of a 'renaissance' right now and I wanted to be a part of it. As a bit of background on that, board games are one of the most successful categories for Kickstarter, and in the U.S. at least there has been a renewed interest in board game cafes and tabletop stores.\n\tSome of my inspiration also came from the games themselves. Although they are not generated games, many have generative aspects. Games like Carcassone, for example, do not come with a game board, but allow the players to build the playing field as the game progresses (most references to 'land tiles' in my game originated from Carcassone's rules). Another inspiration was a game I encountered in my Intro to Game Dev class called Life in the Garden, which is perhaps more story than game. The contents consists of a deck of cards, each with a couple of sentences on them. You shuffle them, draw a few, read them out, and a complete story can be made from any order. (http://www.electronicbookreview.com/thread/firstperson/edenic)",

    platform: "Print",
    tools: "Adobe Illustrator, NLTK",
    language: "Python",
    team: "1",
    role: "Programmer, Designer"
  }
    const projectB = {
    name: "Keepers of Ra",
    overview: "A transmedia storytelling project born out of a tabletop RPG campaign.",
    thumbnail: "/Ra2.png",
    urlName:"ra",
    images:"/Ra2.png",
    type:"media",
    description:"A crossover between a New World of Darkness campaign and the real world.",
  }
    
    const projects = ProjectData.ProjectData.map((p,key)=>{
      return p
    });
    
    const featured = ProjectData.ProjectData.filter(p=>{

      if(p.featured){
        return true
      }
    });

    this.state = {
      projects: projects,
      featured: featured     
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
          <div className = "Header">

            <Link to ="/" className = "title">Mari Allison</Link>
            <img src="/pixelephant.png" height="50px"/>
            <Link to ="/">Home</Link>
            <Link to ="/games">Games</Link>
            <Link to ="/media">Multimedia</Link>
            <Link to ="/resume">Resume</Link>
          </div>

          <Route exact path = "/resume" component = {Resume} />

          <Route exact path = "/" 
            render= {props => {
              return <Home data ={this.state.featured} />}
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
              console.log("hello");
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
