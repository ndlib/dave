// Build an object that contains all the data an ArtifactImage needs
function buildArtifactImage (
  data,
  params,
  offset = 0,
  canvas = null,
  sequence = null
) {
  canvas === null ? canvas = params.pageId : true
  sequence === null ? sequence = params.sequence : true
  const canvasId = parseInt(canvas) + offset
  const sequenceId = parseInt(sequence)
  const canvasObject = data.sequences[sequenceId].canvases[canvasId]
  const imageUri = canvasObject.images[0].resource['@id']
  const zoomLink = '/' + params.source +
              '/' + params.manifest +
              '/' + params.sequence +
              '/' + params.view +
              '/' + canvasId +
              '/detail'
  return {
    pageId: canvasId,
    alt: canvasObject.label,
    imageUri: imageUri,
    zoomLink: zoomLink
  }
}

export default buildArtifactImage
