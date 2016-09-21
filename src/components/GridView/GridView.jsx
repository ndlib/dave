'use strict'
import React, { Component, PropTypes } from 'react'
import GridRow from '../GridRow/'
import findNumberOfColumns from '../../modules/findNumberOfColumns'
import classes from './GridView.scss'

class GridView extends Component {
  constructor (props) {
    super(props)
    this.updateWindowWidth = this.updateWindowWidth.bind(this)
  }

  componentWillMount () {
    const currentSequence = this.props.params.sequence * 1
    this.setState({canvasCount: this.props.data.sequences[currentSequence].canvases.length})
    this.updateWindowWidth()
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateWindowWidth)
    this.scrollToActiveRow()
  }

  componentWillUpdate () {
    this.scrollToActiveRow()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowWidth)
  }

  updateWindowWidth (e) {
    const windowWidth = window.innerWidth
    this.setState({windowWidth: windowWidth})
    this.setState({columnCount: findNumberOfColumns(
      windowWidth,
      this.props.minColumnCount,
      this.props.maxThumbnailWidth
    )})
  }

  scrollToActiveRow (
    canvasId = parseInt(this.props.params.canvasId),
    columnCount = this.state.columnCount,
    container = this.refs['gridView']
  ) {
    const activeRowNumber = Math.floor(canvasId / columnCount)
    let scrollAmount = 0
    let i = 0
    for (i; i < activeRowNumber; i++) {
      scrollAmount = scrollAmount + this.refs['gridRow' + i].offsetHeight
    }
    container.scrollTop = scrollAmount
  }

  render () {
    const columnCount = this.state.columnCount
    const canvasCount = this.state.canvasCount
    const rowCount = Math.ceil(canvasCount / columnCount)
    let count = columnCount
    let gridRows = []
    let i = 0
    for (i; i < rowCount; i++) {
      let rowStart = i * columnCount
      let remainingCanvases = (canvasCount - rowStart)
      if (remainingCanvases < columnCount) {
        count = remainingCanvases
      }
      gridRows.push(
        <div key={i} ref={'gridRow' + i}>
          <GridRow
            data={this.props.data}
            params={this.props.params}
            start={rowStart}
            maxColumns={columnCount}
            count={count}
          />
        </div>
      )
    }
    return (
      <div className={classes.gridview} ref={'gridView'}>
        {gridRows}
      </div>
    )
  }
}

GridView.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  minColumnCount: PropTypes.number,
  maxThumbnailWidth: PropTypes.number
}

GridView.defaultProps = {
  minColumnCount: 3,
  maxThumbnailWidth: 250
}

export default GridView
