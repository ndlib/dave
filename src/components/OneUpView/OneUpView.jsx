'use strict'
import React, { Component, PropTypes } from 'react';
import ArtifactImage from '../ArtifactImage/'
import buildArtifactImage from '../../modules/buildArtifactImage.js'
import classes from './OneUpView.scss'

class OneUpView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const imageObject = buildArtifactImage(this.props.data, this.props.params)
    return (
      <div className={ classes.outer }>
        <div className={ classes.display }>
          <ArtifactImage
            imageObject={ imageObject }
          />
        </div>
      </div>
     );
  }
}

OneUpView.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default OneUpView;
