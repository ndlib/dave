// takes current parmas and a target page and return new path based on that data
import targetPath from './targetPath'
function setPage (currentParams, targetPage) {
  var newParams = Object.assign({}, currentParams)
  newParams.pageId = targetPage
  return targetPath(newParams)
}
export default setPage