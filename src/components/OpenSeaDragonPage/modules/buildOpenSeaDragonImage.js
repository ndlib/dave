// Build an object that contains infromation the OpenSeaDragon image and
// page need.
import targetPath from '../../../modules/targetPath.js'
function buildOpenSeaDragonImage (data, params) {
  const canvas = data.sequences[params.sequence].canvases[params.canvasId]
  const imageUri = canvas.images[0].resource['@id']
  const label = canvas.label
  let newParams = Object.assign({}, params)
  newParams.detail = null

  const closeUri = targetPath(newParams)

  return {
    closeUri: closeUri,
    imageUri: imageUri,
    label: label
  }
}

export default buildOpenSeaDragonImage
