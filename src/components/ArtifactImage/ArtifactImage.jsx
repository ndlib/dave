'use strict'
import React, { Component, PropTypes } from 'react';
class ArtifactImage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ textAlign: 'center', height: '100%' }}>
        <img
          src={ this.props.imageObject.imageUri }
          alt={ this.props.imageObject.alt }
          title={ this.props.imageObject.alt }
          style={{ height: '100%' }}
        />
      </div>
     );
  }
}

ArtifactImage.propTypes = {
  imageObject: React.PropTypes.object.isRequired,
}

export default ArtifactImage;
