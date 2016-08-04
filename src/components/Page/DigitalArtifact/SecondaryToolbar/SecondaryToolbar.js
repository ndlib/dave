import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './SecondaryToolbar.scss'

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'

class SecondaryToolbar extends Component {

  render () {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text="Secondary Toolbar" />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default SecondaryToolbar
