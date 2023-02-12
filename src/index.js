module.exports = function check(str, bracketsConfig) {
  let arrStak = [];
  let aStr = {};
  let sameKeyVal = {};
  let countSameBrackets = 0;
  
  bracketsConfig.forEach(elem => {
    let key = elem[0].toString()
    let value = elem[1]
    aStr[key]=value
    if(key === value) {
      sameKeyVal[key]=value 
    }
    })

  for(let bracket of str) {
    if(bracket in aStr) {
      if(bracket in sameKeyVal){
        countSameBrackets ++
        } else {
          arrStak.push(bracket)
          }
      
    } else {
      if(arrStak.length === 0) {
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
  if(arrStak.length === 0 && countSameBrackets % 2 ==0){
    return true
    }else{
      return false
      }
}
