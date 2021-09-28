// 1.

function same(a,b){
  if(a.length!==b.length){
    return false
  }
  let result1 ={}
  let result2 ={}
  for(let char of a){
    // result1[char] = ++result1[char] || 1
    result1[char] ? result1[char] +=1 : result1[char] = 1;
  } 
  for(let char of b){
    result2[char] = ++result2[char] || 1;
  } 
  for(let key in result1){
    if(!(key in result2)){
      return false;
    }
  }
  for(let key in result1){
    if(result1[key]!==result2[key]){
      return false;
    }
  }
  return true;
}
console.log(same('qwerty','qeywrt'))
console.log(same('car','rat'))
console.log(same('awesome','awesom')) //false
console.log(same('texttwisttime','timetwisttext')) //true
console.log(same('',''))

// 2.
function same(a,b){
    if(a.length!==b.length){
      return false
    }
    let result1 ={}
    // let result2 ={}
    for(let char of a){
      // result1[char] = ++result1[char] || 1
      result1[char] ? result1[char] +=1 : result1[char] = 1;
    } 
    for(let char of b){
    
     if(!(result1[char])){
       return false
     }
      result1[char] -= 1;
    } 
    return true;
  }

  console.log(same('qwerty','qeywrt'))
console.log(same('car','rat'))
console.log(same('awesome','awesom')) //false
console.log(same('texttwisttime','timetwisttext')) //true
console.log(same('',''))
