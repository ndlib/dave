'use strict'
import React, { Component, PropTypes } from 'react'
import DocumentMetadata from '../DocumentMetadata/'
import CanvasMetadata from '../CanvasMetadata/'
import classes from './Metadata.scss'

class Metadata extends Component {
  render () {
    return (
      <div className={this.props.params.view !== 'g' ? classes.wrapper : classes.wrapperGridStyle}>
        <div className={classes.content}>
          <CanvasMetadata
            data={this.props.data}
            params={this.props.params}
          />
          <DocumentMetadata
            data={this.props.data}
            params={this.props.params}
          />
        </div>
      </div>
    )
  }
}

Metadata.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default Metadata
