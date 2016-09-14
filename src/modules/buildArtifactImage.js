import ArgumentError from '../errors/ArgumentError.js'

// Build an object that contains all the data an ArtifactImage needs
import targetPath from './targetPath.js'
function buildArtifactImage (
  data,
  params,
  offset = 0,
  canvas = null,
  sequence = null,
  zoom = true
) {
  canvas === null ? canvas = params.canvasId : true
  sequence === null ? sequence = params.sequence : true
  const canvasId = parseInt(canvas) + offset
  const sequenceId = parseInt(sequence)
  const canvasObject = data.sequences[sequenceId].canvases[canvasId]
  const imageUri = canvasObject.images[0].resource['@id']

  let newParams = Object.assign({}, params)
  newParams.sequence = sequenceId
  newParams.canvasId = canvasId

  if (zoom) {
    newParams.detail = '/detail'
  }

  let objectLink = targetPath(newParams)

  return {
    canvasId: canvasId,
    alt: canvasObject.label,
    imageUri: imageUri,
    objectLink: objectLink
  }
}

export default buildArtifactImage
