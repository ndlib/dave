'use strict'
import React, { Component, PropTypes } from 'react';

class TwoUpView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>2 Current Artifact View { this.props.params.pageId}</div>
     );
  }
}

TwoUpView.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default TwoUpView;
