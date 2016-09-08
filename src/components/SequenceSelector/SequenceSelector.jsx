'use strict'
import React, { Component, PropTypes } from 'react'
import { DropDownMenu } from 'material-ui'
import { browserHistory } from 'react-router'
import sequenceMenu from './modules/sequenceMenu.js'
import targetSequence from './modules/targetSequence.js'

class SequenceSelector extends Component {

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, index,
     value) => {
    let uri = targetSequence(this.props.data, this.props.params, value)
    this.context.router.push(uri)
    browserHistory.push(uri)
  }

  render () {
    return (
      <DropDownMenu value={parseInt(this.props.params.sequence)} onChange={this.handleChange}>
        {sequenceMenu(this.props.data)}
      </DropDownMenu>
     )
  }
}

SequenceSelector.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

SequenceSelector.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SequenceSelector
