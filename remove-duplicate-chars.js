//Remove Duplicate chars from a a string
var s = 'A sdS tgsxrv 5645gh#$ gd S Dtbfxe'
//Using reduce
var result = s.split('').sort().reduce((accumolator, current) => {
  const length = accumolator.length
  if (length === 0 || current !== accumolator[length - 1]) {
    accumolator.push(current)
  }
  return accumolator;
}, [])
console.log(result.join(''))


//Using for loop
var arr = s.split('').sort()
var result = [arr[0]]
for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[i - 1]) result.push(arr[i])
}
console.log(result.join(''))

//Remove duplicates using Set
function solution(s) {
  return Array.from(new Set(s))
}
console.log(solution(s))


//Remove duplicates from an array
function remove_duplicates_safe(arr) {
  var seen = {};
  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!(arr[i] in seen)) {
      ret_arr.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  return ret_arr;

}

