import React, { Component, PropTypes } from 'react'
import classes from './SecondaryToolbar.scss'
import NavigationPanel from '../NavigationPanel/'
import ViewSelectionPanel from '../ViewSelectionPanel/'
import { Toolbar, ToolbarGroup } from 'material-ui'

class SecondaryToolbar extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Toolbar>
        <ViewSelectionPanel
          data={ this.props.data }
          params={ this.props.params }
        />
        <NavigationPanel
          data={ this.props.data }
          params={ this.props.params }
        />
        <ToolbarGroup lastChild={true}>
        </ToolbarGroup>

      </Toolbar>
    )
  }
}

SecondaryToolbar.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default SecondaryToolbar
