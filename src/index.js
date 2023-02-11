module.exports = function check(str, bracketsConfig) {
  let arrStak = [];
  let aStr = {};
  bracketsConfig.forEach(elem => {
    let key = elem[0].toString()
    let value = elem[1]
    aStr[key]=value
    }) 

  for(let bracket of str) {
    if(bracket in aStr) {
      arrStak.push(bracket)
    } else {
      if(arrStak.length == 0) {
        return false
      }
    
    let lastBracket = arrStak[arrStak.length -1];
    
    if(aStr[lastBracket] === bracket) {
      arrStak.pop()
      } else {
        return false
        }
    }
  }
  return arrStak.length == 0
}
