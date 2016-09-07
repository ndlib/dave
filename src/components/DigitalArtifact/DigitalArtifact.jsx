'use strict'
import React, { Component, PropTypes } from 'react'
import TitleToolbar from '../TitleToolbar'
import CurrentView from '../CurrentView'
import SecondaryToolbar from '../SecondaryToolbar'
import classes from './DigitalArtifact.scss'
import SwipeArea from '../SwipeArea'

class DigitalArtifact extends Component {

  render () {
    return (
      <SwipeArea
        data={this.props.data}
        params={this.props.params}
      >
        <div className={classes.outer}>
          <TitleToolbar
            data={this.props.data}
            params={this.props.params}
          />
          <CurrentView
            data={this.props.data}
            params={this.props.params}
          />
          <div className={classes.bottomBar}>
            <SecondaryToolbar
              data={this.props.data}
              params={this.props.params}
            />
          </div>
        </div>
      </SwipeArea>
     )
  }
}

DigitalArtifact.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default DigitalArtifact
