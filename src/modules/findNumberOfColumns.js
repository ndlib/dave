function findNumberOfColumns (
  windowWidth,
  minColumnCount,
  maxThumbnailWidth
) {
  const calculatedColumnCount = Math.round(windowWidth / maxThumbnailWidth)

  if (calculatedColumnCount > minColumnCount) {
    return calculatedColumnCount
  } else {
    return minColumnCount
  }
}

export default findNumberOfColumns
