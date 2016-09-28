import React from 'react'
function buildKeyPairs (metadata) {
  let pairs = []

  for (let i = 0; i < metadata.length; i++) {
    pairs.push(<dt key={'dt' + i}>{metadata[i].label}</dt>)

    if (Array.isArray(metadata[i].value)) {
      for (let j = 0; j < metadata[i].value.length; j++) {
        pairs.push(<dd key={'dd' + i + '_' + j} dangerouslySetInnerHTML={{__html: metadata[i].value[j]}}></dd>)
      }
    } else {
      pairs.push(<dd key={'dd' + i} dangerouslySetInnerHTML={{__html: metadata[i].value}}></dd>)
    }
  }
  return pairs
}

export default buildKeyPairs
