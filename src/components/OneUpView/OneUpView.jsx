'use strict'
import React, { Component, PropTypes } from 'react';

class OneUpView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>1 Current Artifact View { this.props.params.pageId}</div>
     );
  }
}

OneUpView.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default OneUpView;
