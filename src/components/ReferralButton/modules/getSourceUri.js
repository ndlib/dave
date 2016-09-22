// Return true if the passed value is a validUri
// http://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url
function validUri (value) {
  return /((ftp|https?):\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(value)
}

// Returns a link to a valid url prefixed with '?ref=' otherwise returns null
function getSourceUri (queryString) {
  const queryParam = '?ref='
  let source
  if (queryString.includes(queryParam)) {
    let sourceCandidate = queryString.replace(queryParam, '')
    if (validUri(sourceCandidate)) {
      source = sourceCandidate
    }
  }

  return source
}

export default getSourceUri
