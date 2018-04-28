import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <embed src="MariAllisonResume.pdf" type="application/pdf" width="70%" height="600px" />
      </div>
    );
  }
}

export default Resume;
