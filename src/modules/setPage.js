// takes current parmas and a target page and return new path based on that data
import targetPath from './targetPath'
function setPage (currentParams, data, targetPage) {
  let newParams = Object.assign({}, currentParams)
  if (targetPage < 0) {
    newParams.canvasId = 0
  } else if (targetPage >= data.sequences[parseInt(currentParams.sequence)].canvases.length) {
    newParams.canvasId = data.sequences[parseInt(currentParams.sequence)].canvases.length - 1
  } else {
    newParams.canvasId = targetPage
  }
  return targetPath(newParams)
}
export default setPage
