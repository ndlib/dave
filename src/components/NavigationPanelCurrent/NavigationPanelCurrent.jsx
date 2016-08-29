'use strict'
import React, { Component, PropTypes } from 'react'

class NavigationPanelCurrent extends Component {
  render () {
    var currentDisplayPage = parseInt(this.props.params.pageId) + 1

    return (
      <div>{currentDisplayPage} of {this.props.data.sequences[this.props.params.sequence].canvases.length}</div>
    )
  }
}

NavigationPanelCurrent.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default NavigationPanelCurrent
