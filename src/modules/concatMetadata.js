// combine the additional metadata onto the front of the metadata array
function concatMetadata (metadata, additonalMetadata) {
  if (additonalMetadata) {
    if (metadata) {
      let combinedMetadata = additonalMetadata.concat(metadata)
      return combinedMetadata
    }
    return additonalMetadata
  } else if (metadata) {
    return metadata
  } else {
    return []
  }
}

export default concatMetadata
