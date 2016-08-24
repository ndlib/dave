'use strict'
import React, { Component, PropTypes } from 'react';

class NavigationPanelCurrent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var currentDisplayPage = parseInt(this.props.params.pageId) + 1;
    
    return (
      <div>{ currentDisplayPage } of { this.props.data.sequences[this.props.params.sequence].canvases.length }</div>
     );
  }
}

NavigationPanelCurrent.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default NavigationPanelCurrent;
