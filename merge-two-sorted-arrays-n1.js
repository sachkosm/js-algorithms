//Merge two sorted arrays of a diferent length with complexity of O(n)
//The result should be a sorted array

var a1 = [98, 99, 78, 1, 5, 4, 6, 3, 6]
var a2 = [56, 3, 5, 7]

var s1 = a1.sort((a, b) => a - b)
var s2 = a2.sort((a, b) => a - b)
var result = []

function mergeSortedArrays(s1, s2) {
  var k = 0
  var c = 0
  var i = 0
  var m = s1.length + s2.length

  while(i < m) {
    if(s1[k] !== undefined && s2[c] === undefined) {
      result.push(s1[k])
      k++

    } else {
      if(s1[k] !== undefined && s1[k] <= s2[c]) {
        result.push(s1[k])
        k++
      }
    }

    if(s2[c] !== undefined && s1[k] === undefined) {
      result.push(s2[c])
      c++
    } else {
      if(s2[c] !== undefined && s2[c] < s1[k]) {
        result.push(s2[c])
        c++
      }
    }

    i++
  }

  return result
}

console.log(mergeSortedArrays(s1, s2))
