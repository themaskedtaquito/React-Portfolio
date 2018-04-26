import React, {Component} from 'react';
import Thumbnail from './Thumbnail';
import './OverviewPage.css';

class OverviewPage extends Component {

  render() {

  	const projects = this.props.data //pass in data in the json from state, rather than the already mapped html
  	
  	const thumbnails = projects.map((thumbnail,index)=>{return <Thumbnail {...thumbnail} key ={index}/>
    });
    return (
      <div className="OverviewPage">
        {thumbnails}
      </div>
    );
  }
}

export default OverviewPage;