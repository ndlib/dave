
// Returns a link to a valid url prefixed with '?ref=' otherwise returns null
import validUrl from 'valid-url'
import { whitelist } from '../../../configuration/variables.js'

function getSourceUri (queryString) {
  const queryParam = '?ref='
  let source
  if (queryString.includes(queryParam)) {
    let sourceCandidate = queryString.replace(queryParam, '')
    // Check valid URI
    if (validUrl.isUri(sourceCandidate)) {
      // Check whitelist
      // http://stackoverflow.com/questions/8765453/regex-expression-for-a-url-whitelist
      for (let i = 0; i < whitelist.length; i++) {
        //
        let regex = '^([a-z|A-Z])+?://([^/]+[.])?(' + whitelist[i] + ')?(/.*)?$'
        if (sourceCandidate.match(regex)) {
          source = sourceCandidate
          break
        }
      }
    }
  }

  return source
}

export default getSourceUri
