import React, { Component, PropTypes } from 'react'
import { FlatButton } from 'material-ui'
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
          <FlatButton
            icon={<i className="material-icons">looks_one</i>}
            onClick={ setView.bind('a', 'b', 'c') }
          />
          <FlatButton
            icon={<i className="material-icons">looks_two</i>}
          />
          <FlatButton
            icon={<i className="material-icons">view_module</i>}
          />
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
