
// Returns a link to a valid url prefixed with '?ref=' otherwise returns null
import validUrl from 'valid-url'
function getSourceUri (queryString) {
  const queryParam = '?ref='
  let source
  if (queryString.includes(queryParam)) {
    let sourceCandidate = queryString.replace(queryParam, '')
    if (validUrl.isUri(sourceCandidate)) {
      source = sourceCandidate
    }
  }

  return source
}

export default getSourceUri
