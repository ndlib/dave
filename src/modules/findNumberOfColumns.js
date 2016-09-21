import ArgumentError from '../errors/ArgumentError.js'

function findNumberOfColumns (
  windowWidth,
  minColumnCount,
  maxThumbnailWidth
) {
  if (!(Number.isInteger(windowWidth))) {
    throw new ArgumentError('windowWidth must be an Integer')
  }
  if (!(Number.isInteger(minColumnCount))) {
    throw new ArgumentError('minColumnCount must be an Integer')
  }
  if (!(Number.isInteger(maxThumbnailWidth))) {
    throw new ArgumentError('maxThumbnailWidth must be an Integer')
  }

  const calculatedColumnCount = Math.round(windowWidth / maxThumbnailWidth)

  if (calculatedColumnCount > minColumnCount) {
    return calculatedColumnCount
  } else {
    return minColumnCount
  }
}

export default findNumberOfColumns
