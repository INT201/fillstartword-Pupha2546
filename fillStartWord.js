const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if (startWord === null || word === null){
    return undefined
  }
  else if (startWord === undefined || word === undefined) {
    return undefined
  }
  else if (word.includes(startWord)) {
    return word
  }
  else{
    return startWord + word
  }
}
module.exports = fillStartWord
//
