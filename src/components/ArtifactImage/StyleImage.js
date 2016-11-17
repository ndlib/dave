// Style the ArtifactImage img.
function StyleImage (align) {
  let orientation = {
    maxHeight: '100%',
    maxWidth: '100%',
    top: '0',
    bottom: '0',
    margin: 'auto'
  }
  let alignment = {}
  if (align === 'left') {
    alignment = {
      left: 'auto',
      right: '0',
      transform: 'translate(0, 0)'
    }
  } else if (align === 'right') {
    alignment = {
      left: '0',
      right: 'auto',
      transform: 'translate(0, 0)'
    }
  }
  return Object.assign(orientation, alignment)
}
export default StyleImage
