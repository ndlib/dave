'use strict'
import React, { Component, PropTypes } from 'react';
import { FontIcon, Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'
import { Link } from 'react-router'
import setView from './modules/setView.js'

class ViewSelectionPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
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
     );
  }
}

ViewSelectionPanel.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default ViewSelectionPanel;
