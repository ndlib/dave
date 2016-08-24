/*

  Return the default path
  * :source = `encodeURIComponent(referring url)`
  * :manifest = currently manifest `id`
  * :sequence = `[ 0, 1, 2 ... ]` = current sequence
  * :view = `[ 1, 2, g ]` = 1-up, 2-up, or grid
  * :pageId = `[ 0, 1, 2 ... ]` = current page of artifact
  * detail = Openseadragon Mode enabled

 */


function targetPath(params) {
  var path = '/' + params.source + '/' + params.manifest;

  if(params.sequence) {
    path += '/' + params.sequence;
  }
  else {
    path += '/0'
  }

  if(params.view) {
    path += '/' + params.view;
  }
  else {
    path += '/g'
  }

  if(params.pageId) {
    path += '/' + params.pageId;
  }
  else {
    path += '/0'
  }

  if(params.detail) {
    path += '/detail';
  }

  return path;

}

export default targetPath