'use strict'
import React, { Component, PropTypes } from 'react'
import TitleToolbar from '../TitleToolbar'
import CurrentView from '../CurrentView'
import SecondaryToolbar from '../SecondaryToolbar'
import classes from './DigitalArtifact.scss'
import SwipeArea from '../SwipeArea'
import Drawer from '../Drawer'

class DigitalArtifact extends Component {

  render () {
    return (
      <div className={this.props.params.view !== 'g' ? classes.outer : classes.outerGridStyle}>
        <TitleToolbar
          data={this.props.data}
          params={this.props.params}
        />
        <SwipeArea
          data={this.props.data}
          params={this.props.params}
        >
          <div>
            <CurrentView
              data={this.props.data}
              params={this.props.params}
            />
            <Drawer
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
      </div>

     )
  }
}

DigitalArtifact.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default DigitalArtifact
