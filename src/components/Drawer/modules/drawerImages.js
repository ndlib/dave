import React from 'react'
import buildArtifactImage from '../../../modules/buildArtifactImage.js'
import ArtifactImage from '../../ArtifactImage/'
import classes from '../Drawer.scss'

function drawerImage (data, params) {
  const canvases = data.sequences[params.sequence].canvases

  let images = []

  for (let i = 0; i < canvases.length; i++) {
    let imageObject = buildArtifactImage(data, params, 0, i, null, false)
    let highlight = (i === parseInt(params.canvasId))

    if (!highlight) {
      if (parseInt(params.view) === 2) {
        if (parseInt(params.canvasId) % 2 === 0) {
          highlight = (i === parseInt(params.canvasId) - 1)
        } else if (parseInt(params.canvasId) % 2 === 1) {
          highlight = (i === parseInt(params.canvasId) + 1)
        }
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
