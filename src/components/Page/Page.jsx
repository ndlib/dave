'use strict'
import React, { Component, PropTypes } from 'react'
import ContentPage from '../ContentPage/'
import OpenSeaDragonPage from '../OpenSeaDragonPage/'

class Page extends Component {
  render () {
    if (this.props.params.detail === 'detail') {
      return (
        <OpenSeaDragonPage
          data={this.props.data}
          params={this.props.params}
        />
      )
    } else {
      return (
        <ContentPage
          data={this.props.data}
          params={this.props.params}
        />
      )
    }
  }
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default Page
