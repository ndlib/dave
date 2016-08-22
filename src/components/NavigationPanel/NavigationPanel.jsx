'use strict'
import React, { Component, PropTypes } from 'react';
import { FontIcon, Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'

class NavigationPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ToolbarGroup>
        <FontIcon className="material-icons">first_page</FontIcon>
        <FontIcon className="material-icons">navigate_before</FontIcon>
        <div>Page x of x</div>
        <FontIcon className="material-icons">navigate_next</FontIcon>
        <FontIcon className="material-icons">last_page</FontIcon>
      </ToolbarGroup>
     );
  }
}

NavigationPanel.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default NavigationPanel;
