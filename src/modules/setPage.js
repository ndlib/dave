import targetPath from './targetPath'
function setPage (currentParams, targetPage) {
  var newParams = Object.assign({}, currentParams)
  newParams.pageId = targetPage
  return targetPath(newParams)
}
export default setPage
