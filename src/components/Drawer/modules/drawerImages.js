import React from 'react'
import buildArtifactImage from '../../../modules/buildArtifactImage.js'
import ArtifactImage from '../../ArtifactImage/'
import canvasIdIsOdd from '../../../modules/canvasIdIsOdd.js'
import isContinuous from '../../../modules/isContinuous.js'
import classes from '../Drawer.scss'

function drawerImage (data, params) {
  const canvases = data.sequences[params.sequence].canvases

  let images = []

  for (let i = 0; i < canvases.length; i++) {
    let imageObject = buildArtifactImage(data, params, 0, i, null, false)

    // Highlight if current image
    let highlight = (i === parseInt(params.canvasId))

    // If on TwoUpView and not highlighted, highlight other displayed image.
    if (!highlight && parseInt(params.view) === 2) {
      let isOdd = canvasIdIsOdd(params.canvasId)
      if (!isOdd || isContinuous(data, params)) {
        highlight = (i === parseInt(params.canvasId) - 1)
      } else {
        highlight = (i === parseInt(params.canvasId) + 1)
      }
    }

    images.push(
      <div
        className={
          highlight ? classes.imageWrapper + ' ' + classes.active : classes.imageWrapper
        }
        key={i}
      >
        <ArtifactImage imageObject={imageObject} />
      </div>
    )
  }

  return images
}

export default drawerImage
