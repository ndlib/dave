'use strict'
import React, { Component, PropTypes } from 'react'
import classes from './GridRowAnnotation.scss'

class GridRowAnnotation extends Component {

  render () {
    const rangeAnnotation = '(' + this.props.start + '\u200A–\u200A' + this.props.end + ')'
    return (
      <div className={classes.annotation}>
        {rangeAnnotation}
      </div>
    )
  }
}

GridRowAnnotation.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired
}

export default GridRowAnnotation
