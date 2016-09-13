'use strict'
import React, { Component, PropTypes } from 'react'
import style from '../../styles/material-ui/style.js'

class NavigationPanelCurrent extends Component {
  render () {
    let currentDisplayPage = parseInt(this.props.params.pageId) + 1
    let length = this.props.data.sequences[this.props.params.sequence].canvases.length
    return (
      <div style={style().toolbarTitle}>{currentDisplayPage} / {length}</div>
    )
  }
}

NavigationPanelCurrent.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default NavigationPanelCurrent
