import getSourceUri from 'components/ReferralButton/modules/getSourceUri'

describe('(Module) getSourceUri', () => {
  it('Returns a valid url when passed a valid url', () => {
    let validURLs = [
      'https://library.nd.edu',
      'https://collections.library.nd.edu/95e024022d/the-power-of-my-pen-to-describe/showcases/f657a53206/invading-canada?section=1175094da0',
      'http://onesearch.library.nd.edu/primo_library/libweb/action/search.do;jsessionid=EA0BCCC11BE18F49EF29576941A3A97E?mode=Basic&vid=NDU&tab=onesearch&'
    ]

    for (let _url of validURLs) {
      let _source = getSourceUri('?ref=' + _url)
      expect(_source).to.equal(_url)
    }

  })

  it('Returns null when passed an invalid url', () => {
    let invalidURLs = [
      'https://google.com',
      'https://www.nd.edu',
      'http://nd.edu',
      'https://osf.io',
      'http://library.nd.edu.co'
    ]

    for (let _url of invalidURLs) {
      let _source = getSourceUri('?ref=' + _url)
      expect(_source).to.be.an('undefined')
    }
  })
})
