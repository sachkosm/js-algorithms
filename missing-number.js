
//Find missing number in an array of positive numbers without Sorting the array
function missingNumber(arr){
  var n = arr.length+1,
  sum = 0;
  expectedSum = n* (n+1)/2;

  for(var i = 0, len = arr.length; i < len; i++){
    sum += arr[i];
  }
  return expectedSum - sum;
}

var r = missingNumber([5, 2, 6, 1, 3]);
console.log(r)
