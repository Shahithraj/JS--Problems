// Find the maximum sum of n consecutive number:

function sum(arr,num){
  if(arr.length<num){
    return null
  }
  let max = 0;
  for(let i=0;i<arr.length-num+1;i++){
    temp=0;
    for(let j=i;j<i+num;j++){
      temp = temp +arr[j]
    } 
 if(temp>max){
   max = temp;
 }
  // console.log(temp,max)
  }
  return max
}
console.log(sum([1,2,3,1,6,3,9,7,5],4))


// 2.Refactor
function sum(arr,num){
    if(arr.length<num){
      return null
    }
    let max =0;
    let temp=0;
    for(let i=0;i<num;i++){
      max = max + arr[i]
    }
    for(let j=num;j<arr.length;j++){
      temp = max + arr[j] - arr[j-num];
      max = Math.max(max,temp)
    }
    return max
  }
  console.log(sum([1,2,3,1,6,3,9,5,3],4))


[1,1,0,1,1,1,0,1,1,1]
function binary(arr){
  let max = 0;
  let temp =0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]===1){
      temp += arr[i]
      max = Math.max(max,temp)
    }else{
      temp =0;
    }
  }
  return max
}
console.log(binary([1,1,0,1,1,1,0,1,1,1,1,1,1]))
