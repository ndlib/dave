'use strict'
import React, { Component, PropTypes } from 'react';
import TitleToolbar from '../TitleToolbar'
import CurrentView from '../CurrentView'
import SecondaryToolbar from '../SecondaryToolbar'
import classes from './DigitalArtifact.scss'

class DigitalArtifact extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ classes.outer }>
        <TitleToolbar
          data={ this.props.data }
          params={ this.props.params }
        />
        <CurrentView
          data={ this.props.data }
          params={ this.props.params }
        />
      <div className={ classes.bottomBar }>
          <SecondaryToolbar
            data={ this.props.data }
            params={ this.props.params }
          />
        </div>
      </div>
     );
  }
}

DigitalArtifact.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default DigitalArtifact;
