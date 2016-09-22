import getSourceUri from 'components/ReferralButton/modules/getSourceUri'

describe('(Module) getSourceUri', () => {
  it('Returns a valid url when passed a valid url', () => {
    let validURLs = [
      'https://google.com',
      'https://www.nd.edu',
      'http://nd.edu', // Fails
      'https://osf.io' // Fails
    ]
    for (let _url of validURLs) {
      let _source = getSourceUri('?ref=' + _url)
      expect(_source).to.equal(_url)
    }
  })

  it('Returns null when passed an invalid url', () => {
    let _url = getSourceUri('?ref=NOTA URL')
    expect(_url).to.be.an('undefined')
  })
})
