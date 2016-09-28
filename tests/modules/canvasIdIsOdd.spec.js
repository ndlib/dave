import canvasIdIsOdd from 'modules/canvasIdIsOdd'

describe('(Module) canvasIdIsOdd', () => {

  let _result
  it('Return true for odd', () => {
    _result = canvasIdIsOdd('1')
    expect(_result).to.equal(true)
  })

  it('Return false for even', () => {
    _result = canvasIdIsOdd('2')
    expect(_result).to.equal(false)
  })
})
