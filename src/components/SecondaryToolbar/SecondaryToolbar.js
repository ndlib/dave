import React, { Component, PropTypes } from 'react'
import { FontIcon } from 'material-ui'
import { Link } from 'react-router'
import classes from './SecondaryToolbar.scss'
import setView from './modules/setView.js'

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'

class SecondaryToolbar extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <Link to={ setView(this.props.params, '1')}>
            <FontIcon className="material-icons">looks_one</FontIcon>
          </Link>
          <Link to={ setView(this.props.params, '2')}>
            <FontIcon className="material-icons">looks_two</FontIcon>
          </Link>
          <Link to={ setView(this.props.params, 'g')}>
            <FontIcon className="material-icons">view_module</FontIcon>
          </Link>
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
