'use strict'
import React, { Component, PropTypes } from 'react'
import classes from './Metadata.scss'

class Metadata extends Component {
  render () {
    return (
      <div className={classes.content}>Metadata</div>
    )
  }
}

Metadata.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default Metadata
