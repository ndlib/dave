import React, { Component, PropTypes } from 'react'
import NavigationPanel from '../NavigationPanel/'
import ViewSelectionPanel from '../ViewSelectionPanel/'
import { Toolbar, ToolbarGroup } from 'material-ui'
import style from '../../styles/material-ui/style.js'

class SecondaryToolbar extends Component {
  render () {
    return (
      <Toolbar style={style().toolbar}>
        <ViewSelectionPanel
          data={this.props.data}
          params={this.props.params}
        />
        <NavigationPanel
          data={this.props.data}
          params={this.props.params}
        />
        <ToolbarGroup lastChild />
      </Toolbar>
    )
  }
}

SecondaryToolbar.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default SecondaryToolbar
