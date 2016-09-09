'use strict'
import React, { Component, PropTypes } from 'react'
import GridRow from '../GridRow/'
import classes from './GridView.scss'

class GridView extends Component {
  constructor (props) {
    super(props)
    this.updateWindowWidth = this.updateWindowWidth.bind(this)
  }

  updateWindowWidth (e) {
    const windowWidth = window.innerWidth
    this.setState({windowWidth: windowWidth})
    this.setState({columnCount: this.findNumberOfColumns(windowWidth)})
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

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowWidth)
  }

  findNumberOfColumns (
    windowWidth,
    minColumnCount = this.props.minColumnCount,
    maxThumbnailWidth = this.props.maxThumbnailWidth
  ) {
    const calculatedColumnCount = Math.round(windowWidth / maxThumbnailWidth)
    if (calculatedColumnCount > minColumnCount) {
      return calculatedColumnCount
    } else {
      return minColumnCount
    }
  }

  componentWillUpdate () {
    this.scrollToActiveRow()
  }

  scrollToActiveRow (
    canvasId = parseInt(this.props.params.pageId),
    columnCount = this.state.columnCount
  ) {
    const activeRowNumber = Math.floor(canvasId / columnCount)
    const activeRowRef = 'gridRow' + activeRowNumber
    const activeRow = this.refs[activeRowRef]
    activeRow.scrollIntoView()
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
      <div className={classes.gridview}>
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
