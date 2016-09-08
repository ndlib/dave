// Returns a new path given current params and a new sequence that contains
// default starting page. The starting page is defined in the @id of the
// canvases so underscore is used to find it.
import _ from 'underscore'
import setSequence from '../../../modules/setSequence.js'
function targetSequence (data, params, target) {
  let pageAtId = data.sequences[target].startCanvas
  let pageID = _.indexOf(_.pluck(data.sequences[target].canvases, '@id'), pageAtId)
  return setSequence(params, target, pageID)
}

export default targetSequence
