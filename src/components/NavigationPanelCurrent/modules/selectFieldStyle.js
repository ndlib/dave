let selectFieldStyle = function (boxWidth = 'auto') {
  return {
    style: {
      top: '12px',
      width: boxWidth,
      padding: '0 15px',
      height: '30px',
      border: '1px solid',
      backgroundColor: 'white'
    },

    iconStyle: {display: 'none'},

    labelStyle: {top: '-13px'},

    underlineStyle: {display: 'none'},

    menuStyle: {
      backgroundColor: 'white',
      border: 'none'
    }
  }
}
export default selectFieldStyle
