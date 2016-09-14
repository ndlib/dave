class ArgumentError extends Error {
  get name () { return 'ArgumentError' }

  constructor (message) {
    super(message)
    this.name = this.constructor.name
    this.message = 'ArgumentError' + ': ' + message
  }
}

export default ArgumentError
