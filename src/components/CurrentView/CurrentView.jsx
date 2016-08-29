'use strict'
import React, { Component, PropTypes } from 'react'
import OneUpView from '../OneUpView'
import TwoUpView from '../TwoUpView'
import GridView from '../GridView'

class CurrentView extends Component {

  render () {
    switch (this.props.params.view) {
      case '1':
        return (
          <OneUpView
            data={this.props.data}
            params={this.props.params}
          />
         )
      case '2':
        return (
          <TwoUpView
            data={this.props.data}
            params={this.props.params}
          />
         )
      default:
        return (
          <GridView
            data={this.props.data}
            params={this.props.params}
          />
        )
    }
  }
}

CurrentView.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default CurrentView
