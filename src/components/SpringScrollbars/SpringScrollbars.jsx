// Adapted from example at:
// https://github.com/malte-wessel/react-custom-scrollbars/blob/master/examples/simple/components/SpringScrollbars
import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { SpringSystem, MathUtil } from 'rebound'

class SpringScrollbars extends Component {

  constructor (props) {
    super(props)
    this.getScrollLeft = this.getScrollLeft.bind(this)
    this.getScrollWidth = this.getScrollWidth.bind(this)
    this.getWidth = this.getWidth.bind(this)
    this.scrollLeft = this.scrollLeft.bind(this)
    this.handleSpringUpdate = this.handleSpringUpdate.bind(this)
  }

  componentDidMount () {
    this.springSystem = new SpringSystem()
    this.spring = this.springSystem.createSpring(200, 15)
    this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate })
  }

  componentWillUnmount () {
    this.springSystem.deregisterSpring(this.spring)
    this.springSystem.removeAllListeners()
    this.springSystem = undefined
    this.spring.destroy()
    this.spring = undefined
  }

  getScrollLeft () {
    return this.refs.scrollbars.getScrollLeft()
  }

  getScrollWidth () {
    return this.refs.scrollbars.getScrollWidth()
  }

  getWidth () {
    return this.refs.scrollbars.getWidth()
  }

  scrollLeft (left) {
    const { scrollbars } = this.refs
    const scrollLeft = scrollbars.getScrollLeft()
    const scrollWidth = scrollbars.getScrollWidth()
    const val = MathUtil.mapValueInRange(left, 0, scrollWidth, 0, scrollWidth)
    this.spring.setCurrentValue(scrollLeft).setAtRest()
    this.spring.setEndValue(val)
  }

  handleSpringUpdate (spring) {
    const { scrollbars } = this.refs
    const val = spring.getCurrentValue()
    scrollbars.scrollLeft(val)
  }

  render () {
    return (
      <Scrollbars
        {...this.props}
        ref='scrollbars' />
    )
  }
}

export default SpringScrollbars
