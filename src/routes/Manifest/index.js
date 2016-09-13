import { injectReducer } from '../../store/reducers'
export default (store) => ({

  path: ':source/:manifest(/:sequence)(/:view)(/:canvasId)(/:detail)',
  getComponent (nextState, next) {
    require.ensure([
      './containers/ManifestContainer',
      './modules/manifest'
    ], (require) => {
      const Manifest = require('./containers/ManifestContainer').default
      const reducer = require('./modules/manifest').default

      injectReducer(store, {
        key: 'manifest',
        reducer: reducer
      })

      next(null, Manifest)
    }, 'manifest')
  }
})
