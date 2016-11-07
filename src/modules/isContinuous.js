function isContinuous (data, params) {
  const hint = data.sequences[params.sequence].viewingHint
  if (hint) {
    return hint === 'continuous'
  }
  return false
}
export default isContinuous
