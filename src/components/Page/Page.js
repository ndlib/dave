'use strict'
import React, { Component, PropTypes } from 'react';
import DigitalArtifact from '../DigitalArtifact'
import Metadata from '../Metadata'
import Branding from '../Branding'
import classes from './Page.scss'
import '../../styles/core.scss'

class Page extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container text-center'>
        <DigitalArtifact />
        <Metadata />
        <Branding />
      </div>
     );
  }
}

export default Page
