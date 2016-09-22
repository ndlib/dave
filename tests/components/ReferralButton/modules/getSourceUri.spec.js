import getSourceUri from 'components/ReferralButton/modules/getSourceUri'

describe('(Module) getSourceUri', () => {
  it('Returns a valid url when passed a valid url', () => {
    let _url = getSourceUri('?ref=http://google.com')
    expect(_url).to.equal('http://google.com')
  })

  it('Returns null when passed an invalid url', () => {
    let _url = getSourceUri('?ref=NOTA URL')
    expect(_url).to.be.an('undefined')
  })
})
