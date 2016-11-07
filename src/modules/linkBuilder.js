// Build first, last, next, previous links based on the current page (or
// whatever data and params are passed)
import isContinuous from './isContinuous.js'
function linkBuilder (data, params, increment) {
  if (typeof increment === 'undefined') {
    if (isContinuous(data, params)) {
      increment = 1
    } else {
      increment = parseInt(params.view)
    }
  }

  const firstPage = 0
  const lastPage = data.sequences[params.sequence].canvases.length - 1

  // Go back by the increment amount, but do not overshoot the first page
  let prevPage = Math.max(parseInt(params.canvasId) - increment, firstPage)
  let nextPage

  // If on 2up display on even numbered page only advance one page to fix sequence
  if (parseInt(params.canvasId) % 2 === 0 && parseInt(params.view) === 2) {
    nextPage = parseInt(params.canvasId) + 1
  } else {
    nextPage = Math.min(parseInt(params.canvasId) + increment, lastPage)
  }

  // Do not overshoot the last page.
  Math.min(nextPage, lastPage)

  return {
    increment: increment,
    firstPage: firstPage,
    lastPage: lastPage,
    nextPage: nextPage,
    prevPage: prevPage
  }
}

export default linkBuilder
