// http://stackoverflow.com/a/326076/5020792
function inIframe () {
  try {
    return window.self !== window.top
  } catch (e) {
    return true
  }
}
export default inIframe
