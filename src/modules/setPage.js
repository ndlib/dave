// takes current parmas and a target page and return new path based on that data
import targetPath from './targetPath'
function setPage (currentParams, targetPage) {
  let newParams = Object.assign({}, currentParams)
  newParams.canvasId = targetPage
  return targetPath(newParams)
}
export default setPage
