//Remove Duplicate chars from a astring
var s='A sdS tgsxrv 5645gh#$ gd S Dtbfxe'
//Using reduce
var result = s.split('').sort().reduce((accumolator, current)=>{
    const length = accumolator.length
    if(length === 0 || current !== accumolator[length-1]){
      accumolator.push(current)
    }
    return accumolator;
}, [])
console.log(result.join(''))


//Using for loop
var arr = s.split('').sort()
var result = [arr[0]]
for(let i=1; i< arr.length; i++){
  if(arr[i] !== arr[i-1]) result.push(arr[i])
}
console.log(result.join(''))

//Remove duplicates using Set

function solution(A){
  return Array.from(new Set(A))
}
