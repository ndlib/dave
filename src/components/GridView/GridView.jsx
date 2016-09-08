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
    this.setState({windowWidth: window.innerWidth})
  }

  componentWillMount () {
    this.updateWindowWidth()
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateWindowWidth)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowWidth)
  }

  numberOfColumns (
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

  render () {
    const data = this.props.data
    const params = this.props.params
    const currentSequence = params.sequence * 1
    const canvasCount = data.sequences[currentSequence].canvases.length
    const columnCount = this.numberOfColumns(this.state.windowWidth)
    const rowCount = Math.ceil(canvasCount / columnCount)
    // const currentCanvas = params.pageId * 1
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
        <GridRow
          data={data}
          params={params}
          start={rowStart}
          key={i}
          maxColumns={columnCount}
          count={count}
        />
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
