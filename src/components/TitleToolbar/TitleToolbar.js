import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './TitleToolbar.scss'

import { FontIcon, Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'

class TitleToolbar extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <FontIcon className="material-icons">keyboard_backspace</FontIcon>
          <ToolbarTitle text={ this.props.data.label } />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

TitleToolbar.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default TitleToolbar
