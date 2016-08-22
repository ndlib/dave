// Takes a string, cleans up bad carriage returns and returns JSON
function jsonClean(jsonString) {
  return JSON.parse(jsonString.replace(/(\r\n|\n|\r)/gm, " "));
}
export default jsonClean;
