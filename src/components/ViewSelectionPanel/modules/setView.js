import targetPath from '../../../modules/targetPath'
function setView(currentParams, targetView) {
  var newParams = currentParams;
  newParams.view = targetView;
  return targetPath(newParams);
}
export default setView
