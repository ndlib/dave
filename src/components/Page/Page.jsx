'use strict'
import React, { Component, PropTypes } from 'react';
import Branding from '../Branding/';
import DigitalArtifact from '../DigitalArtifact/';
import Metadata from '../Metadata/'

class Page extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DigitalArtifact />
        <Metadata />
        <Branding />
      </div>
     );
  }
}

export default Page;
