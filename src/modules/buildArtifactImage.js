function buildArtifactImage (data, params, offset = 0) {
  var pageId = parseInt(params.pageId) + offset
  var sequence = parseInt(params.sequence)
  var canvas = data.sequences[sequence].canvases[pageId]
  var imageUri = canvas.images[0].resource['@id']
  return {
    pageId: pageId,
    alt: canvas.label,
    imageUri: imageUri
  }
}

export default buildArtifactImage
