'use strict'
import React, { Component, PropTypes } from 'react';

class GridView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>GRID Current Artifact View { this.props.params.pageId}</div>
     );
  }
}

GridView.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default GridView;
