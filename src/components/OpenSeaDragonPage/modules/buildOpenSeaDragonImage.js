// Build an object that contains infromation the OpenSeaDragon image and
// page need.
function buildOpenSeaDragonImage (data, params) {
  const canvas = data.sequences[params.sequence].canvases[params.canvasId]
  const imageUri = canvas.images[0].resource['@id']
  const label = canvas.label
  const closeUri = '/' + params.source +
              '/' + params.manifest +
              '/' + params.sequence +
              '/' + params.view +
              '/' + params.canvasId

  return {
    closeUri: closeUri,
    imageUri: imageUri,
    label: label
  }
}

export default buildOpenSeaDragonImage
