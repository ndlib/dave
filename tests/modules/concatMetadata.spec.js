import concatMetadata from 'modules/concatMetadata'

describe('(Module) concatMetadata', () => {

  it('Returns a concatenated array with additonalMetadata first', () => {
    let _metadata = [1, 2, 3]
    let _additionalMetadata = [4, 5, 6]
    let _result = concatMetadata(_metadata, _additionalMetadata)
    expect(_result).to.have.length(6)
    expect(_result[0]).to.equal(4)
    expect(_result[3]).to.equal(1)
  })

  it('Returns an array of only additonalMetadata', () => {
    let _metadata = null
    let _additionalMetadata = [4, 5, 6]
    let _result = concatMetadata(_metadata, _additionalMetadata)
    expect(_result).to.have.length(3)
    expect(_result[0]).to.equal(4)
  })

  it('Returns an array of only metadata', () => {
    let _metadata = [1, 2, 3]
    let _additionalMetadata = null
    let _result = concatMetadata(_metadata, _additionalMetadata)
    expect(_result).to.have.length(3)
    expect(_result[1]).to.equal(2)
  })
  
  it('Returns an empty array', () => {
    let _metadata = null
    let _additionalMetadata = null
    let _result = concatMetadata(_metadata, _additionalMetadata)
    expect(_result).to.have.length(0)
  })
})
