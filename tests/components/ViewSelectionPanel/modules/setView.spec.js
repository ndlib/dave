import setView from 'components/ViewSelectionPanel/modules/setView.js'

describe('(Module) setView', () => {

  it('Takes the current params and changes the view to the target and returns the new path', () => {
    const _params = {
      manifest: 'manifest',
      sequence: '0',
      view: '1',
      canvasId: '42'
    }
    const _targetView = 'g'
    let _path = setView(_params, _targetView)
    expect(_path).to.equal('/manifest/0/g/42')
  })
})
