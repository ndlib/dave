import setPage from 'modules/setPage.js'

describe('(Module) setPage', () => {
  const _data = {
    sequences: {
      0: {
        canvases: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
      }
    }
  }
  const _params = {
    base: '1',
    manifest: 'manifest',
    sequence: '0',
    view: '1',
    canvasId: '5'
  }

  it('Takes the current params and changes the canvasId to the target and returns the new path', () => {
    let _targetPage = '9'
    let _path = setPage(_params, _data, _targetPage)
    expect(_path).to.equal('/1/manifest/0/1/9')
  })

  it('Prevents navigating below 0', () => {
    let _targetPage = '-1'
    let _path = setPage(_params, _data, _targetPage)
    expect(_path).to.equal('/1/manifest/0/1/0')
  })

  it('Prevents navigating past the length of the canvases array', () => {
    let _targetPage = '20'
    let _path = setPage(_params, _data, _targetPage)
    expect(_path).to.equal('/1/manifest/0/1/15')
  })
})
