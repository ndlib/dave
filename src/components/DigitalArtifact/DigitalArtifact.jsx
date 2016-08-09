'use strict'
import React, { Component, PropTypes } from 'react';
import TitleToolbar from './TitleToolbar'
import CurrentView from './CurrentView'
import SecondaryToolbar from './SecondaryToolbar'

class DigitalArtifact extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TitleToolbar />
        <CurrentView />
        <SecondaryToolbar />
      </div>
     );
  }
}


export default DigitalArtifact;
