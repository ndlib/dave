const background1 = '#F0F0E1'
const background2 = '#444'
const primary1 = '#656557'

function style () {
  return {

    // TitleToolbar, SecondaryToolbar
    toolbar: {
      backgroundColor: background1,
      borderBottom: '6px solid' + primary1,
      borderTop: '2px solid' + primary1
    },
    toolbarTitle: {
      color: primary1,
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '52px',
      margin: '0 4px',
      verticalAlign: 'middle'
    },

    // ViewSelectionPanel, NavigationButton
    viewIcons: {
      color: background2,
      fontSize: '32px',
      lineHeight: '52px',
      verticalAlign: 'middle'
    }
  }
}
export default style
