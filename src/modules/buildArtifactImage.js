// Build an object that contains all the data an ArtifactImage needs
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
  const objectLink = '/' + params.source +
              '/' + params.manifest +
              '/' + params.sequence +
              '/' + params.view +
              '/' + canvasId +
              (zoom ? '/detail' : '')
  return {
    canvasId: canvasId,
    alt: canvasObject.label,
    imageUri: imageUri,
    objectLink: objectLink
  }
}

export default buildArtifactImage
