'use strict'
import React, { Component, PropTypes } from 'react'
import Branding from '../Branding/'
import DigitalArtifact from '../DigitalArtifact/'
import Metadata from '../Metadata/'

class ContentPage extends Component {

  render () {
    return (
      <div>
        <DigitalArtifact
          data={this.props.data}
          params={this.props.params}
        />
        <Metadata
          data={this.props.data}
          params={this.props.params}
        />
        <Branding />
      </div>
   )
  }
}

ContentPage.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default ContentPage
