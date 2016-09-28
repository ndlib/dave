function additionalMetadata (data) {
  let newMetadata = []
  if (data) {
    if (data.label) {
      newMetadata.push({
        label: 'Label',
        value: data.label
      })
    }
    if (data.description) {
      newMetadata.push({
        label: 'Description',
        value: data.description
      })
    }
    if (data.license) {
      newMetadata.push({
        label: 'License',
        value: data.license
      })
    }
    if (data.attribution) {
      newMetadata.push({
        label: 'Attribution',
        value: data.attribution
      })
    }
    return newMetadata
  }
}

export default additionalMetadata
