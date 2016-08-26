import setPage from 'components/NavigationPanel/modules/setPage.js'

describe('(Module) setPage', () => {

  it('Takes the current params and changes the pageId to the target and returns the new path', () => {
    const _params = {
      source: 'source',
      manifest: 'manifest',
      sequence: '0',
      view: '1',
      pageId: '42'
    }
    const _targetPage = '53'
    let _path = setPage(_params, _targetPage)
    expect(_path).to.equal('/source/manifest/0/1/53')
  })
})
