const style = {
  buttonIcon: function () {
    return {
      margin: 0,
      padding: 0,
      textAlign: 'center',
      verticalAlign: 'middle',
      width: '100%'
    }
  },

  scrollBar: function () {
    return {
      overflowY: 'hidden',
      width: 'calc(100vw - 80px)',
      margin: '0 auto',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '.5% .5% .5% 0'
    }
  }
}

export default style
