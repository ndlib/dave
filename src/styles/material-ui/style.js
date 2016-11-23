import { colors } from '../../configuration/variables.js'
const background1 = colors.background1
const background2 = colors.background2
const primary1 = colors.primary1
const primary2 = colors.primary2
// const secondary1 = colors.secondary1
// const secondary2 = colors.secondary2

function style () {
  return {

    // TitleToolbar, SecondaryToolbar
    toolbar: {
      backgroundColor: background1,
      borderBottom: '6px solid' + primary1,
      borderTop: '2px solid' + primary1,
      width: '100vw'
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
      color: primary2,
      fontSize: '32px',
      lineHeight: '52px',
      verticalAlign: 'middle'
    },

    viewIconsInactive: {
      color: primary2,
      cursor: 'default',
      fontSize: '32px',
      lineHeight: '52px',
      opacity: '0.5',
      verticalAlign: 'middle'
    }
  }
}
export default style
