function linkBuilder (data, params) {
  var increment = parseInt(params.view)
  var firstPage = 0
  var lastPage = data.sequences[params.sequence].canvases.length - 1

  // Go back by the increment amount, but do not overshoot the first page
  var prevPage = Math.max(parseInt(params.pageId) - increment, firstPage)
  var nextPage

  // If on 2up display on even numbered page only advance one page to fix sequence
  if (parseInt(params.pageId) % 2 === 0 && parseInt(params.view) === 2) {
    nextPage = parseInt(params.pageId) + 1
  } else {
    nextPage = Math.min(parseInt(params.pageId) + increment, lastPage)
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
