'use strict'
import React, { Component, PropTypes } from 'react'

class GridView extends Component {

  render () {
    return (
      <div>GRID Current Artifact View {this.props.params.pageId}</div>
    )
  }
}

GridView.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default GridView
