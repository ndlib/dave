import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  componentWillMount () {
    // injectTapEventPlugin can only be called once.
    // Live reloading during development can cause this to be called
    // multiple times.
    try {
      injectTapEventPlugin()
    } catch (err) {
      console.log('injectTapEventPlugin already enabled')
    }
  }

  getChildContext () {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  render () {
    const { history, routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={routes} />
        </div>
      </Provider>
    )
  }
}
AppContainer.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}
export default AppContainer
