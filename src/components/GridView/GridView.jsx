'use strict'
import React, { Component, PropTypes } from 'react'
import GridRow from '../GridRow/'
import classes from './GridView.scss'

class GridView extends Component {
  numberOfColumns () {
    const windowWidth = document.documentElement.offsetWidth
    const thumbnailWidth = this.props.maxThumbnailWidth
    const calculatedColumnCount = Math.round(windowWidth / thumbnailWidth)
    if (calculatedColumnCount > this.props.minColumnCount) {
      return calculatedColumnCount
    } else {
      return this.props.minColumnCount
    }
  }

  render () {
    const data = this.props.data
    const params = this.props.params
    const currentSequence = params.sequence * 1
    const canvases = data.sequences[currentSequence].canvases
    const canvasCount = canvases.length
    const columnCount = this.numberOfColumns()
    const rowCount = Math.ceil(canvasCount / columnCount)
    // const currentCanvas = params.pageId * 1
    let remainingCanvases = canvasCount
    let gridRows = []
    let count = columnCount
    let start = 0
    let i = 0
    for (i; i < rowCount; i++) {
      if (remainingCanvases < columnCount) {
        count = remainingCanvases
      }
      gridRows.push(
        <GridRow
          data={data}
          params={params}
          start={start}
          key={i}
          maxColumns={columnCount}
          count={count}
        />
      )
      remainingCanvases = remainingCanvases - columnCount
      start = start + columnCount
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
