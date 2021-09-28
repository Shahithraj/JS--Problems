1.NESTED LOOP
// function same(arr1,arr2){
// if(arr1.length!==arr2.length){
//  return false;
// }
//    for(let i=0;i<arr1.length;i++){
// // index of b = what the index of the number. Eg: b.indexOf(4) in array b which is 1.
//     let index_of_b = arr2.indexOf(arr1[i]**2) //it is also looping
//       if(index_of_b === -1){
//        return false;
//   }
//     arr2.splice(index_of_b,1)
//   }
//   return true;

//  }
// console.log(same([1,2,3,4,6],[1,36,8,4,16]));


2.O(n)
// function same(arr1,arr2){
//   if(arr1.length!==arr2.length){
//     return false;
//   }
//   let result1 ={};
//   let result2 ={};
//   for(let value of arr1){
//     result1[value] = ++result1[value] || 1;
//   }
//   for(let value of arr2){
//     result2[value] = ++result2[value] || 1;
//   }
//   for(let key in result1){
//     if(!(key ** 2 in result2)){
//       return false;
//     }
//   }
//   for(let key in result2){
//     if(result2[key ** 2]!==result1[key]){
//       return false;
//     }
//   }
//     console.log(result1,result2)
//   return true;

// }

// console.log(same([1,4,2,3,4],[1,4,16,9,16]))

// 3.
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
      char = Math.sqrt(char)
     if(!(result1[char])){
       return false
     }
      result1[char] -= 1;
    } 
    return true;
  }

  
  console.log(same([1,2,3,4,2,5],[1,4,4,9,16,16]));
  