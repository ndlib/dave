// Takes current params and a target view and return the correct path
import targetPath from '../../../modules/targetPath'
function setView (currentParams, targetView) {
  var newParams = Object.assign({}, currentParams)
  newParams.view = targetView
  return targetPath(newParams)
}

export default setView
