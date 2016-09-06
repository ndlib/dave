'use strict'
import React, { Component, PropTypes } from 'react'
import GridRow from '../GridRow/'

class GridView extends Component {

  render () {
    return (
      <GridRow data={this.props.data} params={this.props.params} />
    )
  }
}

GridView.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default GridView
