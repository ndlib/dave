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
    // link for testing routing and params
    var link = '/x/manifest-1/1/2/' + Math.floor(Math.random() * 10)

    return (
      <div>
        <DigitalArtifact
          data={ this.props.data }
          params={ this.props.params }
        />
        <Metadata
          data={ this.props.data }
          params={ this.props.params }
        />
        <Branding />
      </div>
     );
  }
}

Page.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default Page;
