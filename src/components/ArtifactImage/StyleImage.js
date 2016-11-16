// Style the ArtifactImage img.
function StyleImage (portrait, align) {
  let orientation = portrait ? {height: '100%'} : {width: '100%'}
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
