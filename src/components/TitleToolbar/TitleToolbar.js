import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './TitleToolbar.scss'

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'

class TitleToolbar extends Component {

  render () {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text="Digital Artifact Title" />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default TitleToolbar
