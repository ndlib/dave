// Takes the current params and a target sequence which may contain additional
// starting page data and returns the new path
import targetPath from './targetPath'
function setSequence (currentParams, targetSequence, targetPage = 0) {
  var newParams = Object.assign({}, currentParams)
  newParams.sequence = targetSequence
  newParams.pageId = targetPage
  return targetPath(newParams)
}
export default setSequence
