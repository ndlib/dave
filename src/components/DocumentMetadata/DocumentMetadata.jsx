'use strict'
import React, { Component, PropTypes } from 'react'
import KeyPairMetadata from '../KeyPairMetadata/'
import concatMetadata from '../../modules/concatMetadata.js'
import additionalMetadata from '../../modules/additionalMetadata.js'

class DocumentMetadata extends Component {

  render () {
    let metadata = concatMetadata(this.props.data.metadata, additionalMetadata(this.props.data))
    return (
      <div>
        <h2>Document Metadata</h2>
        <KeyPairMetadata metadata={metadata} />
      </div>
     )
  }
}

DocumentMetadata.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default DocumentMetadata
