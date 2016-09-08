// Build an object that contains all the data an ArtifactImage needs
function buildArtifactImage (data, params, offset = 0) {
  const pageId = parseInt(params.pageId) + offset
  const sequence = parseInt(params.sequence)
  const canvas = data.sequences[sequence].canvases[pageId]
  const imageUri = canvas.images[0].resource['@id']
  const zoomLink = '/' + params.source +
              '/' + params.manifest +
              '/' + params.sequence +
              '/' + params.view +
              '/' + pageId +
              '/detail'
  return {
    pageId: pageId,
    alt: canvas.label,
    imageUri: imageUri,
    zoomLink: zoomLink
  }
}

export default buildArtifactImage
