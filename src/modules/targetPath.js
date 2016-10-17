/*

  Return the default path
  * :manifest = currently manifest `id`
  * :sequence = `[ 0, 1, 2 ... ]` = current sequence
  * :view = `[ 1, 2, g ]` = 1-up, 2-up, or grid
  * :canvasId = `[ 0, 1, 2 ... ]` = current page of artifact
  * detail = Openseadragon Mode enabled

 */

function targetPath (params) {
  var path = '/' + params.base + '/' + params.manifest

  if (params.sequence) {
    path += '/' + params.sequence
  } else {
    path += '/0'
  }

  if (params.view) {
    path += '/' + params.view
  } else {
    path += '/g'
  }

  if (params.canvasId) {
    path += '/' + params.canvasId
  } else {
    path += '/0'
  }

  if (params.detail) {
    path += '/detail'
  }

  if (window.location.search) {
    path += window.location.search
  }

  return path
}

export default targetPath
