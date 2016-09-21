import findNumberOfColumns from 'modules/findNumberOfColumns'
import ArgumentError from 'errors/ArgumentError'

describe('(Module) findNumberOfColumns', () => {
  it('should use the default number of columns on small viewports', () => {
    let _columnCount = findNumberOfColumns(300, 3, 100)
    expect(_columnCount).to.equal(3)
  })

  it('should have more columns on large viewports', () => {
    let _columnCount = findNumberOfColumns(800, 3, 100)
    expect(_columnCount).to.equal(8)
  })

  it('should raise an ArgumentError unless it is passed integers', () => {
    expect(findNumberOfColumns(false, 'family', 100)).to.throw(ArgumentError)
  })
})
