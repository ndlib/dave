'use strict'
import React, { Component, PropTypes } from 'react'
import { ToolbarGroup } from 'material-ui'
import NavigationButton from '../NavigationButton/'
import NavigationPanelCurrent from '../NavigationPanelCurrent/'
import linkBuilder from '../../modules/linkBuilder.js'

class NavigationPanel extends Component {

  render () {
    let links
    // Do not render if we are in the grid display
    if (this.props.increment) {
      links = linkBuilder(this.props.data, this.props.params, 1)
    } else if (this.props.params.view !== '1' && this.props.params.view !== '2') {
      return null
    } else {
      links = linkBuilder(this.props.data, this.props.params)
    }

    return (
      <ToolbarGroup style={{margin: '0 auto'}}>
        <NavigationButton
          data={this.props.data}
          params={this.props.params}
          target={links.firstPage}
          icon={'first_page'}
        />
        <NavigationButton
          data={this.props.data}
          params={this.props.params}
          target={links.prevPage}
          icon={'navigate_before'}
        />
        <NavigationPanelCurrent
          data={this.props.data}
          params={this.props.params}
        />
        <NavigationButton
          data={this.props.data}
          params={this.props.params}
          target={links.nextPage}
          icon={'navigate_next'}
        /><NavigationButton
          data={this.props.data}
          params={this.props.params}
          target={links.lastPage}
          icon={'last_page'}
        />
      </ToolbarGroup>
     )
  }
}

NavigationPanel.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  increment: PropTypes.number
}

export default NavigationPanel
